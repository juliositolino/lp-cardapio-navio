# Fotos de Final de Ano 2026

Origem: PDF `[Navio Pescados] Campanha Fim de Ano 2026.pdf`, fornecido pelo responsável pela Navio em 23/11/2026.

Recortes das imagens incorporadas às páginas 13, 19 e 20, sem geração ou retoque dos pratos. Foram removidos os textos e as molduras das artes. O recorte do quadro “Salada e mais” mostra mariscos e foi associado ao Vinagrete de Marisco, preservando as fotos anteriores das saladas de bacalhau.

O script `scripts/extract-campaign-photos.py` registra página, imagem e coordenadas de cada recorte e permite reproduzir os arquivos a partir do PDF original.

## Imagens substituídas pelo responsável

- `mesa-natal-sem-texto.png`: foto da mesa enviada em 23/11/2026, editada com ImageGen integrado para remover o título branco sobre a parede. O prompt está em `02_assets_visuais/banner-mesa-natal-sem-texto-prompt.txt`.
- `bacalhau-a-moda-campanha.png`: nova foto enviada do Bacalhau à Moda, copiada sem edição.

## Sessão de novembro de 2026

As 12 associações para produtos sem foto foram aprovadas pelo responsável em 27/11/2026. Os originais estão em `Fotos/Fotos-Sessao-Novembro-2026/` e foram preservados.

As cópias em `sessao-novembro/` usam WebP, 1200 x 900 pixels, qualidade 80 e enquadramento 4:3. A orientação é corrigida, as cores são convertidas para sRGB e os metadados não são copiados. As fotos verticais de Salmão à Belle Munière e Migas de Bacalhau têm o centro do recorte ajustado para preservar o prato.

Para reproduzir as imagens, execute `node scripts/prepare-november-photos.mjs` com as dependências do projeto instaladas. O script registra os nomes originais e os destinos, incluindo `salmão a moda1.jpg` e `arroz a grega.jpg`, escolhidos entre as alternativas.

Bacalhau de Natas em Lascas, Tilápia à Belle Munière e Arroz de Amêndoas continuam sem foto: não foi encontrada correspondência na pasta fornecida.
