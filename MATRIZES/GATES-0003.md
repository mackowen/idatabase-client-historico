# Gates da Campanha 0003

| Gate | Estado | Evidência e justificativa |
|---|---|---|
| G1 — Build | PASS | `npm ci` limpo; `npm run build` concluiu contracts TS, server TS e Vite 8.3.5 no Termux Android ARM64. |
| G2 — Contratos | PASS | Zod schemas common/error/operation/health e testes de parse/recusa de campos não declarados; typecheck passou. |
| G3 — Testes | PASS | `npm test`: 3 arquivos/5 testes passaram; inclui HTTP smoke e processo filho encerrado por SIGTERM. |
| G4 — Segurança | PARTIAL | Sem segredos de produção e nenhum DB; npm audit full encontrou 9 moderate em dependências dev (ESLint/typescript-eslint/minimatch), 0 high/critical; `npm audit --omit=dev` zero. Não houve mitigação automática. |
| G5 — Persistência | PLANNED | Fora do escopo; nenhum DB, migration, WAL ou adapter foi criado/aberto. Planejada para campanhas posteriores. |
| G6 — E2E | N/A | Sem interface funcional; Playwright não foi instalado/executado. Smoke backend não equivale a E2E web. |
| G7 — UX e acessibilidade | N/A | Shell informativo mínimo, sem fluxos funcionais; avaliação UX completa não aplicável. |
| G8 — Plataformas | PARTIAL | Termux toolchain/install/build/test comprovados; plataforma não homologada em produção. Linux ARM64/glibc, Linux x64, Windows x64 e Docker não testados. |
| G9 — Git e histórico | PASS | Código commit local sem push; histórico preserva ancestralidade e recebe somente registros; publicação verificada no GitHub no fechamento. |
| G10 — Promoção | PARTIAL | Fundação mínima passa, mas advisory dev, persistência, segurança completa e homologação ficam pendentes; sem decisão de release. |

Resultado global: **PARTIAL**. `PLANNED` e `N/A` não significam aprovação.
