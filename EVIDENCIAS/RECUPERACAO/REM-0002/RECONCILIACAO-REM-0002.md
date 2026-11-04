# Evidência de reconciliação — REM-0002

A pré-validação identificou zero descritores de arquivo abertos para escrita nos dois caminhos oficiais. Nenhum processo concorrente com arquivo alvo aberto para escrita foi observado.

A cópia local original foi preservada antes de alterações em `~/REM-0002-backup.ix6k4o/local-history`. Há 33 arquivos e 17 diretórios; hash e comparação recursiva foram validados conforme `VALIDACAO-BACKUP.md`. O inventário SHA-256 completo de todos os caminhos locais/remotos está em `INVENTARIO-SHA256.tsv`.

Os sete diffs mostram apenas um apêndice REM-0001 comum, idêntico por bytes e acrescentado após o conteúdo local. A integração proposta conserva o texto local e resulta exatamente nos blobs remotos; cada hash final será conferido contra o remoto. Os cinco arquivos exclusivos locais (registros Campanha 0002) e oito arquivos exclusivos remotos (incluindo todos os artefatos REM-0001) são preservados.

O diretório local não tinha metadados Git; por isso não se declara ancestralidade com os commits históricos locais citados em documentos. A linhagem remota será usada sem reescrita e permanece a ancestral da publicação.
