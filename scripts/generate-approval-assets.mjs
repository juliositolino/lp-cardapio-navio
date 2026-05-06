import { chromium } from "playwright";
import { spawn } from "node:child_process";
import { mkdir, copyFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const approvalDir = path.join(root, "05_aprovacao");
const exportDir = path.join(root, "04_exports");

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitForServer(url, timeoutMs = 120000) {
  const start = Date.now();

  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {}

    await wait(1000);
  }

  throw new Error(`Servidor nao respondeu em ${timeoutMs}ms: ${url}`);
}

async function exportVariant(page, { url, jpgPath, pdfPath }) {
  await page.goto(url, { waitUntil: "networkidle" });
  await page.waitForTimeout(1800);

  await page.screenshot({
    path: jpgPath,
    type: "jpeg",
    quality: 90,
    fullPage: true
  });

  await page.pdf({
    path: pdfPath,
    printBackground: true,
    format: "A4",
    margin: {
      top: "10mm",
      right: "10mm",
      bottom: "10mm",
      left: "10mm"
    }
  });
}

async function main() {
  await mkdir(approvalDir, { recursive: true });
  await mkdir(exportDir, { recursive: true });

  const dev = spawn("npm", ["run", "dev"], {
    cwd: root,
    stdio: "ignore",
    shell: true
  });

  try {
    await waitForServer("http://127.0.0.1:3000");

    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage({ viewport: { width: 1440, height: 2400 } });

    const v01Jpg = path.join(approvalDir, "cardapio-dia-das-maes_v01_fiel.jpg");
    const v01Pdf = path.join(approvalDir, "cardapio-dia-das-maes_v01_fiel.pdf");
    const v02Jpg = path.join(approvalDir, "cardapio-dia-das-maes_v02_contraste-reforcado.jpg");
    const v02Pdf = path.join(approvalDir, "cardapio-dia-das-maes_v02_contraste-reforcado.pdf");

    await exportVariant(page, {
      url: "http://127.0.0.1:3000",
      jpgPath: v01Jpg,
      pdfPath: v01Pdf
    });

    await exportVariant(page, {
      url: "http://127.0.0.1:3000/?variant=high-contrast",
      jpgPath: v02Jpg,
      pdfPath: v02Pdf
    });

    await browser.close();

    await copyFile(v01Jpg, path.join(exportDir, "cardapio-dia-das-maes_v01.jpg"));
    await copyFile(v02Jpg, path.join(exportDir, "cardapio-dia-das-maes_v02.jpg"));
  } finally {
    dev.kill();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
