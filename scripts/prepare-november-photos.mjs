import { mkdir, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

// Relações aprovadas para os 12 produtos sem foto em 27/11/2026.
// Os originais são apenas lidos. As cópias para o site ficam em public/.
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = path.join(root, "Fotos", "Fotos-Sessao-Novembro-2026");
const output = path.join(root, "public", "campaigns", "final-de-ano-2026", "sessao-novembro");
const photos = [
  ["arroz cremoso de camarão.jpg", "arroz-cremoso-de-camarao"],
  ["salmão a moda1.jpg", "salmao-a-moda"],
  ["salmão a belle mouniere .jpg", "salmao-a-belle-muniere", 0.54],
  ["tilápia a moda.jpg", "tilapia-a-moda"],
  ["abadejo a moda.jpg", "abadejo-a-moda"],
  ["abadejo a belle muniere.jpg", "abadejo-a-belle-muniere"],
  ["arroz com brócolis.jpg", "arroz-com-brocolis"],
  ["arroz a grega.jpg", "arroz-a-grega"],
  ["arroz com alho e salsa.jpg", "arroz-alho-e-salsa"],
  ["migas de bacalhau.jpg", "migas-de-bacalhau", 0.54],
  ["sardela.jpg", "sardela"],
  ["maionese de camarão.jpg", "maionese-de-camarao"]
];

await mkdir(output, { recursive: true });
sharp.cache(false);
let originalBytes = 0;
let optimizedBytes = 0;

for (const [file, slug, centerY = 0.5] of photos) {
  const input = path.join(source, file);
  const target = path.join(output, `${slug}.webp`);
  const metadata = await sharp(input).metadata();
  const swapAxes = (metadata.orientation ?? 1) >= 5;
  const width = swapAxes ? metadata.height : metadata.width;
  const height = swapAxes ? metadata.width : metadata.height;
  const cropWidth = Math.min(width, Math.floor(height * 4 / 3));
  const cropHeight = Math.floor(cropWidth * 3 / 4);
  const left = Math.floor((width - cropWidth) / 2);
  const top = Math.max(0, Math.min(height - cropHeight, Math.round(height * centerY - cropHeight / 2)));

  // Orientação corrigida, enquadramento 4:3 e conversão sRGB.
  // O Sharp remove EXIF/GPS e outros metadados por padrão.
  await sharp(input)
    .rotate()
    .extract({ left, top, width: cropWidth, height: cropHeight })
    .resize(1200, 900, { withoutEnlargement: true })
    .toColourspace("srgb")
    .webp({ quality: 80, effort: 6 })
    .toFile(target);

  const before = (await stat(input)).size;
  const after = (await stat(target)).size;
  originalBytes += before;
  optimizedBytes += after;
  console.log(`${slug}: ${(before / 1048576).toFixed(1)} MiB -> ${(after / 1024).toFixed(0)} KiB (1200 x 900)`);
}

console.log(`Total: ${(originalBytes / 1048576).toFixed(1)} MiB -> ${(optimizedBytes / 1048576).toFixed(2)} MiB; redução de ${(100 * (1 - optimizedBytes / originalBytes)).toFixed(2)}%.`);
