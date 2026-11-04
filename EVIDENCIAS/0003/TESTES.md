# Testes e resultados — Campanha 0003

Executados após `npm ci` limpo em Termux Android 13 ARM64, Node `v26.4.0`, npm `11.21.1`.

| Comando | Código | Resultado |
|---|---:|---|
| `npm ci --fetch-retries=0 --fetch-timeout=120000` | 0 | Instalou 191 pacotes; lockfile reproduzível no ambiente. Audit automático sinalizou 9 moderate no conjunto completo. |
| `npm run build` | 0 | `@idb/contracts` TypeScript, `@idb/server` TypeScript e Vite `8.3.5`; 16 módulos transformados; bundle web gerado. |
| `npm run typecheck` | 0 | contracts, server e web. |
| `npm run lint` | 0 | ESLint nos fontes TypeScript/TSX. |
| `npm test` | 0 | 3 arquivos, 5 testes aprovados; repetido após instalação limpa e mudanças finais. |
| `npm run verify` | 0 | Build + typecheck + lint + testes encadeados, sem falhas. |
| `npm audit --omit=dev --json` | 0 | 0 vulnerabilidades em dependências runtime. |
| `npm audit --json` | 0 (JSON produzido) | 9 moderadas; 0 low/high/critical; dependências dev ESLint/typescript-eslint/minimatch. |
| `npm ls @rolldown/binding-android-arm64` | 0 | `vite@8.3.5 -> rolldown@1.2.16 -> @rolldown/binding-android-arm64@1.2.16`. Build passou usando essa cadeia. |

Testes específicos:

- Operação Zod aceita UUID, fingerprint, hash SHA-256, nonce e expiração ISO; rejeita digest inválido/campo de credencial extra.
- Common error valida contrato estrito e recusa campo não declarado.
- Fastify inicia em `127.0.0.1` com porta efêmera, responde `/health` 200 e fecha `app.close()` sem listener remanescente.
- Child process built server em loopback emite `server_started`, recebe SIGTERM e sai com código 0.

Playwright E2E, UI flows, bancos/adapters, migrations, persistência, security flows e testes multiplataforma não foram executados porque estão fora do escopo/implementação desta campanha. Nenhum SQL foi executado.
