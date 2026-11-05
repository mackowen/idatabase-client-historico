# Matriz de plataformas IDB-FREEZE-AUTH-v5.6

“Pretendida” é direção de produto, não suporte. A situação observada vem da auditoria REM-0004; build/teste/homologação de aplicação seguem ausentes no início da Campanha 0003.

| Plataforma | Intenção | Toolchain disponível | Build comprovado | Testes executados | Homologada para produção |
|---|---|---|---|---|---|
| Android/Termux ARM64 | PRIORIDADE de desenvolvimento, explícita | SIM: toolchain observada em REM-0004 e campanha 0003 | SIM, somente a fundação 0003 (React/Vite + Fastify/TS) | `npm ci`, build, typecheck, lint, 5 testes na campanha 0003 | NÃO homologada para produção; SQLite interno e bindings de produto ainda não homologados |
| Linux ARM64 glibc | Planejada; suporte oficial pendente decisão | NÃO auditada em runner | NÃO | NÃO | NÃO |
| Linux x64 | Planejada; suporte oficial pendente decisão | NÃO auditada em runner | NÃO | NÃO | NÃO |
| Windows x64 | Planejada; suporte oficial pendente decisão | NÃO auditada em runner | NÃO | NÃO | NÃO |
| Docker | Opcional; suporte oficial pendente decisão | Docker Engine não disponível neste Termux | NÃO | NÃO | NÃO |

## Progressão exigida por plataforma

1. **Pretendida:** responsável aprova alvo e faixa de versões.
2. **Toolchain disponível:** registrar SO, arquitetura, ABI/libc, Node, compilador, dependências e headers.
3. **Build comprovado:** checkout limpo, lockfile, build/addons carregados; artefato e logs preservados.
4. **Testes executados:** unit/contract/integration e E2E aplicáveis; relatório de todos os testes e limitações.
5. **Homologada:** gates de segurança/persistência/performance/releases aprovados em runner/dispositivo identificado e repetição de release.

Não promover estado de um degrau com base no anterior. Android/Bionic não comprova Linux ARM64/glibc. Docker só vira alvo obrigatório por decisão formal. A evidência de 0003 não demonstra compatibilidade de SQLite interno, persistência, adapters, installers ou production runtime.
