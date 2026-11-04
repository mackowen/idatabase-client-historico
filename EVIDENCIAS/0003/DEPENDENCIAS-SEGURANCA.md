# Dependências e auditoria de segurança — Campanha 0003

## Versões diretas fixadas

| Grupo | Dependências |
|---|---|
| Runtime contracts | Zod `4.6.7` |
| Runtime server | Fastify `5.12.8`, Pino `10.4.0`, workspace `@idb/contracts` |
| Runtime web | React/ReactDOM `19.3.1` |
| Build/test dev | Vite `8.3.5`, Vitest `5.1.0`, TypeScript `6.0.3`, ESLint `10.14.0`, typescript-eslint `8.72.1`, plugin React `6.2.1` |
| Types | `@types/node 26.4.0`, React/ReactDOM `19.3.0` |

Versões exatas e dependências transitivas estão em `package-lock.json`. Node/Vite/Vitest engines são compatíveis com Node `26.4.0`; a documentação oficial informa Vite Node 20.19+/22.12+ e Vitest 5 Node 22.12+/24/26. A runtime local cumpriu ambas as faixas.

## Binários/plataforma

Vite 8 carrega Rolldown nativo opcional. Npm instalou o pacote Android ARM64 `@rolldown/binding-android-arm64@1.2.16`; Vite production build passou no Termux atual. Isto é evidência local de execução, não garantia para todo Android/Bionic nem outra ABI. Não foram instalados addons de SQLite nem DB drivers.

## npm audit

- Full audit: 9 moderadas, 0 alta, 0 crítica. O advisory é transitivo em `minimatch@10.2.6`, alcançando `eslint@10.14.0`, `@eslint/config-array` e `typescript-eslint`; mensagem do registry: possível denial of service por amplificação de globparts.
- `npm audit --omit=dev`: 0 vulnerabilidades runtime.
- Nenhum `npm audit fix`, downgrade/override ou `--force` foi aplicado. O fix sugerido pelo audit alteraria versões/major constraints do toolchain; requer triagem da Campanha 0004 e reexecução integral da suíte.

Não foram incluídas credenciais reais, tokens ou chaves. Fixtures são sintéticas.
