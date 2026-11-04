# REM-0003 — auditoria atual do Termux Android ARM64

## Ambiente observado

| Verificação | Resultado | Interpretação |
|---|---|---|
| `uname -a` | Linux/Android 5.4.274, `aarch64` | Ambiente real Termux/Android. |
| `getprop ro.build.version.release` | `13` | Android 13. |
| `getprop ro.product.cpu.abi` | `arm64-v8a` | ABI ARM64 Android. |
| `node -p process.platform/process.arch` | `android` / `arm64`; Node `v26.4.0`, modules ABI `147`, N-API `10` | Runtime funciona localmente; não comprova suporte do produto. |
| `npm --version` | `11.21.1` | npm disponível; sem manifestos de produto. |
| `git --version` | `2.56.0` | Git disponível; repositórios verificados na evidência de inventário. |
| `python --version` | `3.14.6`; `Android`, `aarch64` | Python disponível. |
| `clang --version`, `clang -dumpmachine` | Clang `21.1.8`; `aarch64-unknown-linux-android24` | Compilador direcionado ao Android ARM64. Nenhum código foi compilado. |
| `gcc --version`, `gcc -dumpmachine` | Resolve para Clang `21.1.8`; mesmo target Android API 24 | GCC independente não foi encontrado. |
| Make / CMake / pkg-config | Make `4.4.1`, CMake `4.4.4`, pkg-config `0.29.2` | Ferramentas nativas disponíveis. |
| `termux-info` sob `timeout 8s` | Código `124`, sem saída útil | Limitação do inventário; dados de Android foram obtidos por `getprop` e `uname`. |

## Banco de dados e headers

| Verificação | Resultado | Limite |
|---|---|---|
| SQLite CLI / pkg-config | SQLite `3.54.1`; `pkg-config` encontra `-lsqlite3` e `/data/data/com.termux/files/usr/include/sqlite3.h`. | Confirma biblioteca/header do sistema, não o binding do futuro app. |
| Headers Node | `node.h` e `node_api.h` presentes em `$PREFIX/include/node`. | Nenhum addon do produto existe para compilar ou carregar. |
| `node-gyp` / `ndk-build` | Ambos ausentes. `ANDROID_NDK_HOME`/`ANDROID_NDK_ROOT` não definidos. | Compilação de addon não foi tentada; requisito exato dependerá do addon/toolchain e versão. |
| PostgreSQL | `psql`/`pg_config` `18.6`; `pkg-config` encontra libpq; `pg_isready` código 0, endpoint local aceita conexão. | Nenhuma sessão SQL foi aberta nem banco alterado; não comprova adapter do produto. |

## Conclusões técnicas delimitadas

- **Observado:** Node, npm, Git, Python, Clang Android, Make/CMake/pkg-config, SQLite CLI/biblioteca/headers, headers Node e cliente PostgreSQL estão disponíveis.
- **Não comprovado:** build de app, compilação/carregamento de addon Node, instalação de dependências, ligação dinâmica ao SQLite/libpq, WAL/migrações e execução do produto. Não há código, manifestos ou lockfile a testar.
- **Inferência, não teste:** Android ARM64 usa ABI e toolchain distintos de Linux ARM64 glibc e Windows. A ABI estável de Node-API não garante que binários nativos ou bibliotecas externas sejam compatíveis com Android.
- As instruções oficiais de `node-gyp` pedem Python, `make` e compilador C/C++ em Unix; para Python 3.12 ou superior requerem `node-gyp` 10 ou superior. Aqui Python é 3.14.6 e `node-gyp` está ausente, então essa rota precisa de um teste futuro com versão fixada e headers Termux. [Node-API ABI stability](https://nodejs.org/learn/modules/abi-stability) · [node-gyp installation requirements](https://github.com/nodejs/node-gyp#installation).
- A API SQLite em WAL requer que processos no mesmo banco estejam no mesmo host; o WAL não opera em filesystem de rede, há um writer por arquivo e checkpoints fazem parte do ciclo de persistência. A documentação SQLite atual indica que o bug WAL-reset foi corrigido a partir de 3.51.3; a biblioteca Termux observada é 3.54.1, mas a futura dependência Node pode carregar outra versão. [SQLite WAL](https://www.sqlite.org/wal.html).

Não foi feita compilação de prova, instalação, build ou teste automatizado nesta auditoria. Isso preserva o escopo exclusivamente de planejamento.
