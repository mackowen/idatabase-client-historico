# Evidência 0002 — toolchain e compatibilidade

## Inventário observado

| Ferramenta/ambiente | Resultado |
|---|---|
| Android | `getprop ro.build.version.release` → `13`; `ro.product.cpu.abi` → `arm64-v8a`. |
| Kernel | `uname -a` → Linux/Android `5.4.274-qgki-g82179e362f33`, `aarch64`. |
| Termux | `termux-info` excedeu timeout de 8 s (código 124). Registro Campanha 0001 informa termux-tools `1.46.0+really1.45.0-1`; `dpkg-query` confirmou essa versão. |
| Node.js | `v26.4.0`; `process.platform=android`, `process.arch=arm64`. |
| npm / pnpm | npm `11.21.1`; pnpm `10.30.1` global. |
| Git | `2.56.0`. |
| Python | `3.14.6`; `platform.system=Android`, `platform.machine=aarch64`. |
| Clang / Make / CMake | Clang `21.1.8`, alvo `aarch64-unknown-linux-android24`; GNU Make `4.4.1`; CMake `4.4.4`; pkg-config `0.29.2`. `gcc` resolve para Clang; não há GCC separado. |
| SQLite | `sqlite3 --version` e `pkg-config --modversion sqlite3` → `3.54.1`; arquitetura 64-bit. |
| PostgreSQL | `psql --version` / `pg_config --version` → `18.6`; `pg_isready` → accepting connections no endpoint local padrão. Nenhum SQL executado. |
| Docker / Playwright | CLI não encontrado; Playwright não instalado/localizável. |
| `tsc`, `vite`, `vitest` | Não localizados. |

## Estrutura observada do produto

O código contém estrutura de diretórios e arquivos `.gitkeep`, documentação e README. Não há `package.json`, lockfile npm/pnpm/yarn, código TS/JS, Dockerfile ou testes de aplicação. O README declara que nenhuma aplicação, contrato, dependência ou script foi implementado. React, TypeScript, Vite, Fastify, Pino, Zod, Vitest, Playwright, Monaco, AG Grid e React Flow/XYFlow estão **ausentes/não verificáveis no produto**. Não foi instalada dependência para verificar versões.

## Compatibilidade e riscos

- Termux ARM64: runtime Node, Python, Clang e SQLite estão presentes, mas isso comprova apenas disponibilidade das ferramentas locais, não build do produto.
- Node addons e SQLite: ABI Android/Bionic não é intercambiável com binários pré-compilados glibc. `pkg-config`/CLI não validam bindings ou migrações.
- WAL/migrações, isolamento SQLite interno/externo, workers e processos filhos: sem implementação; sem conclusão de compatibilidade.
- Playwright/browser: dependências e binários de navegador não verificados; execução Termux não comprovada.
- Monaco/AG Grid mobile: sem interface; ergonomia, memória, toque e teclado não avaliados.
- Linux x64, Linux ARM64 glibc e Windows x64: nenhum ambiente correspondente; compatibilidade não verificada.
- Docker: indisponível neste dispositivo; compatibilidade opcional não verificada.
- Build reproduzível: sem manifests, lockfile, scripts ou CI; não demonstrada.

## Limites e códigos de saída

Não foram executados build, testes unitários, E2E, benchmark, instalação, compilação nativa ou operações SQL. Os comandos de versão citados terminaram com código 0, exceto `termux-info` (timeout/código 124). A disponibilidade do servidor PostgreSQL foi observada apenas por `pg_isready`, sem conexão de leitura a banco. As definições individuais AUD-01–AUD-16 da baseline v5.4 não estão na documentação disponível; os identificadores permanecem pendentes.
