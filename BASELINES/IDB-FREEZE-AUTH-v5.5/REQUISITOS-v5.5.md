# Requisitos IDB-FREEZE-AUTH-v5.5

`M` = obrigatório; `C` = condicional à decisão indicada. A origem `REM-0005` é o pedido do responsável de 2026-11-04; `Histórico` aponta a evidência existente, não uma recuperação v5.4.

| ID | Requisito e critério verificável | Origem |
|---|---|---|
| ARCH-01 | M — Frontend React/TypeScript/Vite; build de produção reproduzível por lockfile. | REM-0005 §4 |
| ARCH-02 | M — Tailwind e componentes acessíveis; avaliação automatizada e manual de teclado/semântica nos fluxos entregues. | REM-0005 §4 |
| ARCH-03 | M — Monaco SQL editor, AG Grid Community e React Flow/XYFlow; só habilitar em campanhas de UI, cada componente com teste de interação e memória. | REM-0005 §4 |
| ARCH-04 | M — Zustand para estado local e TanStack Query para estado remoto; não duplicar cache remoto como estado autoritativo. | REM-0005 §4 |
| ARCH-05 | M — Node.js + Fastify; Pino estruturado e Zod para validação; inicialização/encerramento controlados. | REM-0005 §4, §9 |
| ARCH-06 | M — npm workspaces, ESM e TypeScript strict; lockfile e scripts reproduzíveis. | REM-0005 §4, §9 |
| ARCH-07 | M — Vitest para unit/contract/integration apropriados; Playwright para E2E em plataforma/browser suportado. | REM-0005 §4, §10 |
| DB-01 | M — adapters independentes para PostgreSQL, MySQL, MariaDB e SQLite externo; capabilities declaradas e testadas por adapter. | REM-0005 §4 |
| DB-02 | M — SQLite interno isolado dos arquivos/bancos SQLite externos em namespaces, conexões, transações, permissões e APIs. | REM-0005 §4 |
| PERSIST-01 | M — SQLite interno guarda perfis, configurações, workspaces, histórico, jobs, checkpoints e catálogo. | REM-0005 §4 |
| PERSIST-02 | M — WAL, foreign keys e migrations versionadas; teste de rollback, recovery, concorrência e checkpoint. | REM-0005 §4 |
| PERSIST-03 | M — coordenador único de escrita; nenhuma escrita concorrente bypassa o coordenador. | REM-0005 §4 |
| PERSIST-04 | M — artefatos grandes ficam em filesystem protegido, com referência/metadata no DB e integridade por hash. | REM-0005 §4 |
| PERSIST-05 | M — nenhum comando SQL direto contra o DB interno por interfaces/adapters destinados a SGBDs externos. | REM-0005 §4 |
| SEC-01 | M — autoridade de permissões é o próprio SGBD; UI read-only é apenas UX. | REM-0005 §4 |
| SEC-02 | M — algoritmo Argon2id só pode ser ativado após homologação em cada plataforma alvo, com parâmetros registrados e teste de custo. | REM-0005 §4 |
| SEC-03 | M — cookies `HttpOnly`, `Secure`, `SameSite`; CSRF, validação Origin, DNS rebinding e rate limiting testados. | REM-0005 §4 |
| SEC-04 | M — bind loopback por padrão; LAN exige autenticação; acesso remoto exige HTTPS e autenticação. | REM-0005 §4 |
| SEC-05 | M — operação destrutiva requer confirmação vinculada ao fingerprint imutável do destino. | REM-0005 §4 |
| SEC-06 | M — autorização de operação usa ID, hash do plano, nonce único e expiração; replay e alteração de destino são recusados. | REM-0005 §4 |
| SEC-07 | M — cofre criptografado; contratos/logs armazenam referências a segredos, nunca valores em texto puro. | REM-0005 §4 |
| WORK-01 | M — supervisor, leases, heartbeat, checkpoints e IPC versionado; contratos testam versões incompatíveis. | REM-0005 §4 |
| WORK-02 | M — workers limitam CPU/memória/tempo e podem ser encerrados/reiniciados sem processo órfão. | REM-0005 §4 |
| WORK-03 | M — resultado de commit incerto torna estado `UNKNOWN`; sem retry automático potencialmente duplicador. | REM-0005 §4 |
| BACKUP-01 | M — PostgreSQL usa `pg_dump`/`pg_restore`; restauração verificada em destino descartável. | REM-0005 §4 |
| BACKUP-02 | M — MySQL/MariaDB usam `mysqldump`/`mariadb-dump` compatíveis; versão/ferramenta é registrada. | REM-0005 §4 |
| BACKUP-03 | M — SQLite usa Online Backup API, não cópia ingênua de DB ativo. | REM-0005 §4 |
| BACKUP-04 | M — estado de backup progride somente `CREATED` → `INTEGRITY_VALID` → `RESTORE_TESTED`, sem colapsar os estados. | REM-0005 §4 |
| DIST-01 | M — manifesto de release assinado; SHA-256 e SBOM verificáveis antes da instalação. | REM-0005 §4 |
| DIST-02 | M — atualização em staging, health validation e rollback testado. | REM-0005 §4 |
| DIST-03 | M — instaladores para Termux, Linux e Windows só são promovidos após homologação própria. | REM-0005 §4 |
| DIST-04 | C — Docker opcional; suporte exige decisão, imagem por digest, health/storage/migration tests. | REM-0005 §4 |
| API-01 | M — `packages/contracts/{common,api,adapters,workers,persistence,schemas}` é fonte compartilhada de contratos. | REM-0005 §4 |
| API-02 | M — UUID para IDs, instantes ISO UTC, duração em ms e armazenamento em bytes, JSON e SemVer. | REM-0005 §4 |
| API-03 | M — paginação por cursor, com cursor opaco, estável e validado. | REM-0005 §4 |
| API-04 | M — contratos representam somente referências a segredos. | REM-0005 §4 |
| QLT-01 | M — checkout limpo reproduz instalação/build/teste usando lockfile e versões registradas. | REM-0005 §9–10 |
| QLT-02 | M — gates só PASS com evidência reproduzível e artefato/commit rastreável. | REM-0005 §11 |
| PLAT-01 | M — Termux Android ARM64 é prioridade de desenvolvimento; toolchain presente não equivale a suporte homologado. | REM-0005 §7 |
| PLAT-02 | M — suporte Linux ARM64 glibc, Linux x64, Windows x64 e Docker recebe estados individuais de intenção, toolchain, build, testes e produção. | REM-0005 §7 |
| HIST-01 | M — preservar Campanhas 0001/0002 e REM-0001…0004 nos resultados originais. | REM-0005 §1, §12 |

Os riscos novos ARCH/SEC/WORK/DIST desta versão são requisitos derivados do pedido; não são equivalentes a AUD-01…AUD-16.
