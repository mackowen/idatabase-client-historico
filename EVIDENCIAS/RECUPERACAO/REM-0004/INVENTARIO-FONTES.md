# REM-0004 — inventário de fontes investigadas

Data: 2026-11-04 UTC. A investigação foi somente leitura, exceto pela correção identificada em `docs/README.md` no repositório de código e pela criação dos artefatos REM-0004.

## Repositório histórico

- Raiz: `~/projetos/repos/idatabase-client-historico`; branch `main`; HEAD `fc072fce415e1645bcabaa940fb4ea383f2d3c37`; worktree limpo antes desta remediação; `origin` SSH oficial; upstream `origin/main`.
- Refs locais/remotas: apenas `main`, `origin/main` e `origin/HEAD`; nenhuma tag. `git log --all` mostra seis commits, de `b2de42e` a `fc072fc`; reflog contém a criação por clone, commits REM-0002/REM-0003 e atualizações de push, sem entradas de commits históricos originais da Campanha 0001.
- GitHub: `git ls-remote`, API `git/ref/heads/main` concordam em `fc072fce…`. Árvore da API recursiva: 90 entradas, `truncated=false`; nenhum caminho com `v5.4` ou `baseline`. Os únicos caminhos AUD são a matriz pendente de 0001 e a matriz de recuperação REM-0003. Não há caminho com definições individuais AUD.
- Histórico de conteúdo consultado: todas as versões acessíveis pelos seis commits, `git log --all --name-status`, refs, reflogs, árvores e blobs soltos. Nenhum documento-fonte v5.4 foi encontrado.

## Repositório de código

- Raiz: `~/projetos/repos/idatabase-client`; branch `main`; HEAD após correção documental `a939fa0f8a6f0240c9a0e1d0a9f2350ff76b82c6`; worktree limpo; `origin` SSH oficial; sem upstream.
- Histórico Git local: três commits lineares. `git fsck --full` sem objetos inalcançáveis ou erros. O remoto não anuncia `HEAD` ou `main`; nenhum push foi feito.
- Arquivos e conteúdo pesquisados em todos os arquivos rastreados e commits locais com termos `v5.4`, `baseline`, `AUD-01`…`AUD-16`, `EXIT-01`…`EXIT-12`. Não há texto normativo ou mapa individual dos achados. A árvore de código continua sem manifestos ou implementação de aplicação.

## Backups de recuperação documentados

Os dois backups abaixo são citados nos próprios registros REM-0001/REM-0002; foram consultados sem escrita. Seus manifests SHA-256 foram validados (`sha256sum -c`, código 0):

1. `~/projetos/backups/idatabase-client-historico-recovery-20261104T043346Z`: 28 arquivos fonte (30 arquivos incluindo `MANIFEST.json` e `MANIFEST.sha256`); manifesto de origem SHA-256 `42969eb9e90bb467f22d7d02bf20d8f948b27e9f532db6eff1fcab1fd91f3da0`. A busca em conteúdo e nomes encontrou apenas a afirmação de que v5.4 foi “FROZEN”/fornecida no pedido e a ausência dos critérios individuais; não há cópia da baseline.
2. `~/REM-0002-backup.ix6k4o/local-history`: cópia de 33 arquivos, hashes validados pelo `BACKUP-SHA256SUMS.txt` versionado. Contém as mesmas matrizes AUD/EXIT sem definições e os registros 0001/0002; nenhuma baseline v5.4 adicional.

Esses são os backups nomeados em registros oficiais. Nenhum outro diretório de projeto foi pesquisado ou alterado.

## Clone temporário do remoto histórico

O clone bare de auditoria citado na Campanha 0002 existe em `~/idatabase-hist-audit.FQtCo7/repo.git`. Sua configuração e refs correspondem ao histórico publicado; não há tags ou refs adicionais em relação à cadeia examinada. O conteúdo é a história atualmente publicada, sem baseline adicional.

## Doze blobs sem referência

`git fsck --full --no-reflogs --unreachable` encontrou exatamente os 12 blobs listados abaixo; não encontrou commits/trees sem referência relevantes. Cada blob foi lido com `git cat-file blob`, classificado pelo cabeçalho/conteúdo e teve SHA-256 calculado. São diffs de adendo REM-0001, matrizes/registros da REM-0002 ou atualização de resumo/Campanha 0002. Nenhum contém texto AUD individual ou baseline v5.4. Os blobs permanecem intactos; não houve GC/prune.

| OID Git | SHA-256 do conteúdo | Conteúdo identificado |
|---|---|---|
| `05f081d5693086f358161b985a0adb1635eab4ef` | `d1af790e9edd1f7777e41d24363eec1f1c9e509fd3e29af212890df6d5a5420a` | Patch `CHECKPOINTS/0001.md` / adendo REM-0001 |
| `052342fc379f584f2d1d189013cec30a62aaa5d3` | `b92bed8a84aad900cc8835eb40ab133f46650b82c1708245ec21d0305beb8e44` | `RESUMOS/0002.md` |
| `3154934dbfc195a4f2bcf3874ad22e5d486b77de` | `e489a21d7dfd380f53cdc47aadaa098e230928b3be4f0a2ce878674ec010a408` | Patch `RESUMOS/0001.md` / adendo REM-0001 |
| `5c228e93d962524a8d6dae6b6137ba63eaa42b0b` | `f80798a431d2042fc3a61a9db1b62a0319deedf9ee1d141f874ed4ef8a58b8e8` | Patch `CAMPANHAS/0001.md` / adendo REM-0001 |
| `6c05fd075aecfb46045a9649ae31fc16d1786ee9` | `e9893358aa199f949a220d2ae2550e5ac0081d9ba6c8d4e17d6962c9d8f8760a` | Patch `MATRIZES/GATES-0001.md` / adendo REM-0001 |
| `7d0296d4f74f2880866089e17a0e91a8cc96c970` | `649c8e1933e933c77c84aae32b6008ebe1cf8716f3c94e8731fb58a6169ff76c` | Patch `AUDITORIAS/0001.md` / adendo REM-0001 |
| `883441a83e52e6309c53a829b6ab9f5ef7cb9b33` | `c48eb9141c60242767d58ab9c33c1c0b365394582ee378618b6287406f2aa389` | Matriz documental de reconciliação REM-0002 |
| `9cbcac00e840935dd6f89a38f2c5e447d3d053c5` | `b440d7f37c605d3722eb0056903396ccea3d660737f9fb54f18b89d8e66709d0` | Patch `MATRIZES/EXIT-0001.md` / adendo REM-0001 |
| `ae60ad1ae59d67cda646fa536f39f944f51b3771` | `5c805e735920b0a17726dd0080933aa026d735f91890d5249b077159f71b35b7` | Atualização da Campanha 0002 após REM-0002 |
| `bdfbbecaed7c367a3a317391238e16abad8ca022` | `03d8404c5ec754d6a79a88e98710a9475ca0f08b1cbd82d135640517a935c1c5` | Matriz documental de reconciliação REM-0002 |
| `c3a52742c06a7dfc3495f28f9b7c7bfd3484df9c` | `467d6236cee1739ed134a5ce7279d3059e8180e3fa01e1d36c8930561bc25ee2` | Registro de execução REM-0002 |
| `e4e40851681e2466d4857ca1f5694b248588ad93` | `07c807c4831808c3f279601b09678b27662253f0cfd5d07e12030027caa514f5` | Relatório de execução REM-0002 |

## Limite e conclusão da busca

A busca alcançou todas as fontes preservadas dentro dos dois repositórios oficiais, seus históricos/refspecs publicados, o backup REM-0001, o backup REM-0002 e o clone bare temporário expressamente citados nos registros. Os manifests dos backups validam suas cópias documentais, mas não contêm a baseline. A busca não recuperou o material normativo original. Não se afirma que nenhum exemplar exista em outros dispositivos, anexos da conversa ou armazenamento não citado.
