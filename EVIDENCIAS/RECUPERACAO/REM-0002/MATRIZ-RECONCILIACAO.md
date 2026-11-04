# Matriz de reconciliação — REM-0002

Os SHA-256 locais e remotos para todos os arquivos estão em `INVENTARIO-SHA256.tsv`; os sete diffs linha a linha estão em `DIFFS/`. A linha de contexto vazia do formato unified diff é representada como `[contexto: linha vazia]` para evitar whitespace final no próprio registro; os arquivos de diff são transcrições, e os hashes registram os bytes exatos das origens. O backup íntegro das versões locais está descrito em `VALIDACAO-BACKUP.md`, com manifesto original em `BACKUP-SHA256SUMS.txt`.

| Arquivo | SHA-256 local | SHA-256 remoto | Diferença e conteúdo exclusivo | Proposta de integração | Risco de perda |
|---|---|---|---|---|---|
| `AUDITORIAS/0001.md` | `2f937988ff8c5df8021ad62d3e62b467749ab187110dfc5bdb14f56e2cc9e584` | `4c6ce4a9b325f900991506c57112dfa67a3201393c368c9b9ec465e12fb93b4d` | Local é prefixo byte a byte; remoto acrescenta adendo REM-0001 de 397 bytes. Nenhuma linha local exclusiva. | Preservar o texto local e acrescentar literalmente o sufixo remoto; validar hash Git final contra remoto. | Nenhum após backup; versão local integral permanece fora do repo. |
| `CAMPANHAS/0001.md` | `0a65197cabf0a8d9117b6f7ab379129857677f41fe883631f581a84e1a9f828b` | `51483df20e67faddf97efde700ba7d2b34a3a62320505cefdd4c76c1f543de58` | Local é prefixo byte a byte; remoto acrescenta o mesmo adendo. Nenhuma linha local exclusiva. | Idem; resultado conferido byte a byte com remoto. | Nenhum após backup; versão local integral permanece fora do repo. |
| `CHECKPOINTS/0001.md` | `f6e184022711b8e1cac7797862e5e767eec771d1ec5e513151c5150f8a006e95` | `dde90c6fa4d5582627c4cab936e56555c89c1b3569237f26c0042668bd37d936` | Local é prefixo byte a byte; remoto acrescenta o mesmo adendo. Nenhuma linha local exclusiva. | Idem; resultado conferido byte a byte com remoto. | Nenhum após backup; versão local integral permanece fora do repo. |
| `MATRIZES/EXIT-0001.md` | `14837fcfd063f2e5d5c6a18d4468be4cca92884e0705b2f115631bc6db9c3df9` | `d79c33c6865525db79d695e1127e712dfe0897aaaf8aa2d32446413e00c600a0` | Local é prefixo byte a byte; remoto acrescenta o mesmo adendo. Nenhuma linha local exclusiva. | Idem; resultado conferido byte a byte com remoto. | Nenhum após backup; versão local integral permanece fora do repo. |
| `MATRIZES/GATES-0001.md` | `cbcc7fbe509e6dc3e78ec3d086325f6186b080282f5c980444a809ced1477d56` | `5ed05ea4d25927055b6aec7292b235ecdabcc53fb7d10abba7c7ad8ae7c99bbd` | Local é prefixo byte a byte; remoto acrescenta o mesmo adendo. Nenhuma linha local exclusiva. | Idem; resultado conferido byte a byte com remoto. | Nenhum após backup; versão local integral permanece fora do repo. |
| `REGISTROS/0001.md` | `1ac2e7209d30ddeefb71a721bef55d65787020e4f10cd0093632e6d71ddcdee0` | `8c9f33f20b48fc43cbbebbedc2ca210e47084267dd58056a609286c7715222f4` | Local é prefixo byte a byte; remoto acrescenta o mesmo adendo. Nenhuma linha local exclusiva. | Idem; resultado conferido byte a byte com remoto. | Nenhum após backup; versão local integral permanece fora do repo. |
| `RESUMOS/0001.md` | `b6d4268a5539cccd2c410e5fd83df337d238bd488fb009c2fb4843de8cf1bbd3` | `e00b8a66da899dbd098f9d7489a87d96e3e2257ee412db89036f4482f22b721a` | Local é prefixo byte a byte; remoto acrescenta o mesmo adendo. Nenhuma linha local exclusiva. | Idem; resultado conferido byte a byte com remoto. | Nenhum após backup; versão local integral permanece fora do repo. |

O sufixo comum documenta que REM-0001 preserva Campanha 0001 como PARTIAL, sem reclassificação. Não há diferença de linha local exclusiva nos sete arquivos. Assim, a integração é aditiva e não requer decisão editorial.

## Arquivos exclusivos por origem

- Local (5): `CAMPANHAS/0002.md`, `RESUMOS/0002.md`, `REGISTROS/0002.md`, `EVIDENCIAS/0002/INVENTARIO.md`, `EVIDENCIAS/0002/TOOLCHAIN.md`. Serão mantidos e incorporados.
- Remoto (8): `.gitignore`, `AGENTS.md`, `POLITICA-GIT.md`, `README.md`, `REMEDIACOES/REM-0001.md`, `EVIDENCIAS/RECUPERACAO/REM-0001/MANIFEST-ORIGEM.json`, `EVIDENCIAS/RECUPERACAO/REM-0001/MANIFEST-ORIGEM.sha256`, `EVIDENCIAS/RECUPERACAO/REM-0001/RELATORIO-BACKUP.md`. Todos serão preservados sem edição.
- Iguais por hash: 21 arquivos. Divergentes: 7. Local: 33 arquivos. Remoto: 36 arquivos. União por caminho: 41.

## Linhagem Git

O diretório local não possui `.git`; não há refs/objetos locais disponíveis para verificar ancestralidade. Nenhum ancestral local é inventado nem alegada recuperação de objetos. O remoto tem cadeia comprovada `b2de42e6f2c7425ee6c509b0c11687077f1b50f8` → `999536fe1005bdfd122b7a5a4ae043fd151ef5fa` → `76b9c86448f13f0d9983f39f926b4219c21cd559`. A publicação reconciliada partirá desta linhagem remota.
