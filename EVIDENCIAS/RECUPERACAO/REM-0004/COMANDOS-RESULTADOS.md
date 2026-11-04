# Comandos e resultados — REM-0004

Comandos executados em modo de leitura salvo a alteração documental indicada. Saídas resumidas; nenhum segredo incluído.

| Verificação | Resultado |
|---|---|
| `git status --short --branch`, `rev-parse --show-toplevel`, `rev-parse HEAD`, `branch -avv`, `tag -n`, `remote -v` nos dois oficiais | Código começou `main`/`3a133887…`, limpo; histórico `main`/`fc072fce…`, limpo; remotes SSH esperados. Histórico segue em `origin/main`; código sem upstream. |
| `git log --all --oneline --decorate --graph`; reflogs; `git fsck --full --no-reflogs --unreachable` no histórico | Seis commits lineares; nenhum tag/ref extra; exatamente 12 dangling blobs, todos classificados no inventário; nenhum commit perdido encontrado. Sem GC/prune. |
| `git fsck --full --no-reflogs --unreachable` no código | Código 0, sem objeto inalcançável/erro. |
| `git cat-file blob <OID>` + SHA-256 para cada dangling blob | 12 conteúdos identificados como diffs REM-0001 ou artefatos REM-0002; nenhum texto normativo v5.4 ou descrição individual AUD. |
| `git fsck --full` final no histórico | 14 dangling blobs listados: 12 preexistentes e dois objetos intermediários do próprio REM-0004 (diff A-01 anterior e manifesto SHA anterior); nenhum commit perdido; todos preservados, sem GC/prune. |
| `git ls-remote` dos dois SSH remotes | Histórico HEAD/main `fc072fce415e1645bcabaa940fb4ea383f2d3c37`; código sem refs. |
| API GitHub `git/ref/heads/main`; API tree recursiva no SHA `fc072fce…` | Ref confere; 90 entradas, `truncated=false`; nenhuma baseline v5.4 nem documento individual AUD. |
| Pesquisa textual de arquivos/commits/backups por `v5.4`, `baseline`, IDs AUD/EXIT | Registros dizem que a v5.4 foi fornecida no pedido, mas ausência de definições individuais; nenhum fonte original. Detalhes em `INVENTARIO-FONTES.md`. |
| `sha256sum -c` no backup REM-0001 e no backup REM-0002 | Todos os arquivos OK, código 0. Nenhuma cópia/arquivo foi alterado. |
| `node --version`; `npm --version`; `git --version`; `python --version` | Node `v26.4.0`, npm `11.21.1`, Git `2.56.0`, Python `3.14.6`. |
| Clang/Make/CMake/pkg-config/SQLite/headers/PostgreSQL | Clang `21.1.8`, alvo Android API 24; Make `4.4.1`; CMake `4.4.4`; pkg-config `0.29.2`; SQLite `3.54.1`; Node headers presentes; psql/libpq `18.6`; `pg_isready` aceita conexão local. |
| SSH | `ssh -T -o BatchMode=yes -o ConnectTimeout=8 git@github.com` autenticou `mackowen`; exit 1 esperado por GitHub não oferecer shell. |
| Mudança A-01 | SHA anterior de `docs/README.md`: `e91ba112fb077646e0811b6dec3a2ca74af0014ddc75623e72b173c3091f978d`; SHA posterior: `8c392763f9e72110b281eb7905c5366faeb81d0f82aac42dd7f8022b0d2158b8`; diff substitui somente o caminho histórico legado pelo canônico. |
| Build/testes/SQL | Não executados: repositório sem app/manifests/testes; campanha é documental; nenhuma sessão SQL aberta. |
