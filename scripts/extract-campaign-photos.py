"""Extrai fotos das artes do PDF da agência, sem recriar ou retocar os pratos.

Uso: python scripts/extract-campaign-photos.py "caminho/da/campanha.pdf"
Dependências: pypdf e Pillow. Não são necessárias para executar o site.
"""
import sys
from pathlib import Path
from pypdf import PdfReader

root = Path(__file__).resolve().parent.parent
output = root / "public/campaigns/final-de-ano-2026"
output.mkdir(parents=True, exist_ok=True)
reader = PdfReader(sys.argv[1])

# Página (1-based), imagem e retângulo na arte original de 1080 x 1350.
photos = {
    "mesa-de-natal": (13, 0, (0, 610, 1080, 1135)),
    "bobo-de-camarao": (13, 1, (65, 415, 520, 700)),
    "bacalhau-de-natas": (19, 2, (125, 380, 955, 1005)),
    "camarao-ao-thermidor": (19, 1, (125, 415, 955, 1045)),
    "paella": (20, 0, (125, 380, 955, 1005)),
    "antepasto-polvo-e-lula": (13, 2, (65, 415, 520, 700)),
    "ceviche": (13, 2, (560, 415, 1010, 700)),
    "torta-de-camarao": (13, 2, (65, 785, 520, 1075)),
    "vinagrete-de-marisco": (13, 2, (560, 785, 1010, 1075)),
}

for name, (page, index, bounds) in photos.items():
    source = reader.pages[page - 1].images[index].image.convert("RGB")
    assert source.size == (1080, 1350), f"Arte inesperada: página {page}"
    photo = source.crop(bounds)
    photo.save(output / f"{name}.jpg", quality=94, optimize=True)
    print(f"{name}: {photo.width} x {photo.height}")
