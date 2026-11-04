# Inventário — Campanha 0003

## Repositórios

| Repositório | Branch/HEAD ao registrar | Remote/upstream | Estado |
|---|---|---|---|
| Código | `main`, `f44a21bb9ed6d4d8e947901d5b5b4ba671daad85` | origin SSH oficial; sem upstream; remote sem refs | Worktree limpo; 3 commits locais; nenhum push. |
| Histórico | `main`, antes dos registros `988c1ef977f1081cc3e3d57d1bc87c3c87fe076e` | origin SSH oficial; `origin/main` | Base limpa e avanço normal, sem divergência no preflight. |

## Árvore de código adicionada

- Root: `package.json`, `package-lock.json`, TS strict base, ESLint/Vitest configs.
- Workspaces: `packages/contracts`, `apps/server`, `apps/web`.
- Contratos: common operation/error, health response, schemas e diretórios reservados adapters/workers/persistence.
- Backend: `createApp`, `/health`, Pino redaction, start e graceful shutdown.
- Web: shell React/Vite informativo sem administração.
- Testes: contracts/unit e server smoke/process lifecycle.

Dependências de editor/grid/graph/state, Tailwind, Playwright, drivers DB, SQLite bindings e migrations não fazem parte desta campanha; constam na baseline e são reservadas para campanhas dedicadas.

## Ferramentas observadas

Android 13 `arm64-v8a`; Node `v26.4.0` (`android/arm64`); npm `11.21.1`; Git `2.56.0`; Python `3.14.6`; Clang `21.1.8`, target Android API 24; SQLite `3.54.1`; PostgreSQL client/libpq `18.6`. Nenhuma ferramenta global foi instalada ou atualizada.
