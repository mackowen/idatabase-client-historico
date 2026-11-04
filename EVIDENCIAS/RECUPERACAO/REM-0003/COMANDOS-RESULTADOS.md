# REM-0003 — comandos e resultados reproduzíveis

Comandos executados somente em modo de leitura, exceto a criação dos artefatos documentais REM-0003 no repositório de histórico.

| Comando/verificação | Resultado observado |
|---|---|
| `git -C <repo> rev-parse --show-toplevel` nos dois repositórios | Código 0; cada raiz coincide com o caminho oficial. |
| `git -C <repo> status --short --branch --ignored` antes de criar evidências | Código 0; ambos limpos; zero untracked/ignored. |
| `git -C <repo> rev-parse HEAD`, `branch --show-current`, `remote -v`, `rev-list --count HEAD` | Código 0; código `main`/`3a133887…`/2 commits; histórico `main`/`fbb59237…`/5 commits; remotes esperados. |
| `git ls-remote git@github.com:mackowen/idatabase-client.git HEAD refs/heads/main` | Código 0, sem linhas; API repo respondeu HTTP 200, size 0, default branch `main`. |
| `git ls-remote git@github.com:mackowen/idatabase-client-historico.git HEAD refs/heads/main` | Código 0; ambos apontam para `fbb59237c82328d365d5192a01ae606bfa2d7240`. |
| GitHub API `/git/ref/heads/main` e `/contents/REMEDIACOES/REM-0002.md?ref=main` | HTTP 200; ref corresponde ao HEAD remoto e o arquivo está publicado. |
| `git -C <repo> fsck --full` | Código 0 para código e histórico. O histórico ainda reporta os 12 blobs sem referência já anotados na REM-0002 quando usado `--no-reflogs`; nenhum GC/prune foi executado. |
| `git ls-files` e `find` fora de `.git` | Código 0; 44 arquivos rastreados no código, 58 no histórico antes dos arquivos REM-0003; árvore do código sem fontes/manifests. Listagens completas nesta pasta. |
| `find ... -name package.json -o -name '*lock*' -o -name tsconfig.json -o -name '*.ts' -o -name '*.tsx' -o -name '*.js' -o -name '*.yml' -o -name '*.yaml'` no código | Código 0, sem resultados relevantes para produto/build/test/CI. |
| `node -p` | `v26.4.0`, platform `android`, arch `arm64`, modules ABI `147`, N-API `10`. |
| `require.resolve` de React/TypeScript/Vite/Fastify/Pino/Zod/Vitest/Playwright/Monaco/AG Grid/XYFlow/SQLite/pg | Todos não localizáveis no repositório. O comando de inventário termina sem instalar nada. |
| `getprop`, `uname` | Android 13, ABI `arm64-v8a`, kernel Android/Linux `5.4.274`, `aarch64`. |
| `timeout 8s termux-info` | Código 124 (timeout), sem inventário útil. |
| versões Clang/GCC/Make/CMake/pkg-config | Clang/GCC alias `21.1.8`, alvo `aarch64-unknown-linux-android24`; Make `4.4.1`; CMake `4.4.4`; pkg-config `0.29.2`. |
| `pkg-config --modversion sqlite3`, headers e libs | `3.54.1`; `sqlite3.h` presente; `-lsqlite3` resolvido pelo pkg-config. |
| Node headers / node-gyp / NDK | `node.h` e `node_api.h` presentes; `node-gyp`, `ndk-build` ausentes; variáveis NDK não definidas. |
| `psql --version`, `pg_config --version`, `pg_isready` | `18.6`; endpoint local aceita conexão (código 0). Nenhum comando SQL foi executado. |
| `docker`, `playwright`, `tsc`, `vite`, `vitest` | Executáveis ausentes. |

Nenhum build, teste, compilação, instalação, conexão SQL ou mudança de configuração foi executado. As versões encontradas demonstram somente a presença local das ferramentas.
