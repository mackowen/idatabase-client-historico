# Plano de campanhas 0001–0055 — IDB-FREEZE-AUTH-v5.5

A sequência e os oito intervalos de fase foram preservados como solicitado. Campanhas 0001/0002 são históricas e seus estados não são alterados. 0003 está em execução nesta sessão. As demais descrições, dependências e critérios abaixo são planejamento reconstruído a partir da arquitetura v5.5; não alegam recuperar um plano v5.4 inexistente. Uma mudança de ordem requer justificativa técnica e aprovação explícita.

| Campanha | Fase | Objetivo/entrega | Dependências | Critério de aceite principal |
|---|---|---|---|---|
| 0001 | F1 — Fundação | Fundar repositórios, estrutura e governança (histórico PARTIAL preservado). | Nenhuma | Registro original preservado; sem promoção retroativa. |
| 0002 | F1 — Fundação | Auditar toolchain/Termux e ativar Git (resultado PARTIAL/BLOCKED preservado). | 0001 | Registro original e REM-0002…0004 preservados; G9 Git atual íntegro. |
| 0003 | F1 — Fundação | Workspace executável, ESM, TS strict, contratos comuns Zod, Vitest e Fastify lifecycle smoke. | Baseline v5.5 congelada; escopo explícito | Instalação limpa/build/typecheck/lint/unit/contract/smoke passam; nenhuma persistência/adapters/SQL/UI funcional. |
| 0004 | F1 — Fundação | CI reproduzível, cobertura mínima, logging/redaction e política de dependências. | 0003 | CI Termux-compatible + runner Linux escolhido; artefatos e lockfile validados. |
| 0005 | F1 — Fundação | API shell, health/lifecycle, configuração e erro comum sem negócio. | 0003–0004 | Smoke, validação Zod e graceful shutdown testados; loopback por padrão. |
| 0006 | F1 — Fundação | Refinar contratos comuns, versionamento e convenções de contribuição. | 0003–0005 | Contract compatibility, SemVer/cursor/time/UUID fixtures e docs aprovados. |
| 0007 | F2 — Conectividade e adaptadores | Capability model e interface de adapter externa. | 0003,0006, DEC-06 | Conformance contract sem driver real; capabilities opcionais explícitas. |
| 0008 | F2 — Conectividade e adaptadores | Adapter PostgreSQL: conexão, introspection e erros. | 0007, DEC-06 | Suite em PostgreSQL descartável, role/timeout/cancel testados. |
| 0009 | F2 — Conectividade e adaptadores | Adapter MySQL. | 0007, DEC-06 | Suite independente no MySQL versão acordada. |
| 0010 | F2 — Conectividade e adaptadores | Adapter MariaDB. | 0007, DEC-06 | Suite independente em MariaDB; sem presumir paridade MySQL. |
| 0011 | F2 — Conectividade e adaptadores | Adapter para SQLite externo e boundary do SQLite interno. | 0007,0003 | Arquivos externos isolados; teste não acessa storage interno. |
| 0012 | F2 — Conectividade e adaptadores | Profile/conexão, pooling, cancelamento e reconexão segura. | 0008–0011, SEC-01 | Secrets por reference; resource limits e role permissions verificadas. |
| 0013 | F2 — Conectividade e adaptadores | Matriz de compatibilidade drivers × versões × capabilities. | 0008–0012, DEC-02/06 | CI de cada DB acordado publica capabilities comprovadas. |
| 0014 | F3 — SQL e dados | SQL execution contract com parâmetros, timeout e erro sanitizado. | 0007–0013, SEC | Unit/integration tests em DB descartáveis; nenhum segredo em erro/log. |
| 0015 | F3 — SQL e dados | Cancelamento, limite de linhas/bytes e streaming. | 0014 | Load/abort tests sem recurso não liberado. |
| 0016 | F3 — SQL e dados | Paginação cursor e ordenação estável de resultados. | 0006,0014 | Cursor inválido/replay recusado; ordem consistente testada. |
| 0017 | F3 — SQL e dados | Editor SQL e histórico local/remoto conforme autorização. | 0014, UI decision | Autosave/history semantics e access control aprovados. |
| 0018 | F3 — SQL e dados | Exibição/exportação de resultados e tipos binários/temporais. | 0014–0016 | Fixtures de tipos por SGBD; export não vaza metadata sensível. |
| 0019 | F3 — SQL e dados | Transações, commit/rollback e estado `UNKNOWN`. | WORK-03,0014 | Fault injection prova não repetir commit desconhecido. |
| 0020 | F3 — SQL e dados | Explain/query plans e profiling read-only. | 0014, DEC-06 | Privilege-aware; operação read-only não confia só na UI. |
| 0021 | F3 — SQL e dados | Compatibilidade, segurança e performance de execução SQL. | 0014–0020 | Gate SQL aprovado por DB/version matrix, sem regressão bloqueante. |
| 0022 | F4 — Administração e modelagem | Introspection de schema por capabilities. | 0008–0013 | Fixture conformance e limites de privilégio documentados. |
| 0023 | F4 — Administração e modelagem | Modelos de tabelas/colunas/constraints comuns. | 0022 | Contrato sem perda de informação, adapters anunciam gaps. |
| 0024 | F4 — Administração e modelagem | Diagramas ER e sincronização visual de seleção. | 0023, DEC-07 | Navegação/teclado/touch e large graph testados. |
| 0025 | F4 — Administração e modelagem | Schema diff e plano de alteração não destrutivo. | 0022–0023 | Diff determinístico, hash de plano e fingerprint de destino. |
| 0026 | F4 — Administração e modelagem | Preview/aprovação de DDL e confirmação destrutiva. | 0025, SEC-05/06 | Nonce/TTL/replay/target-change e role DB testados. |
| 0027 | F4 — Administração e modelagem | Administração de objetos e catálogo por DB capabilities. | 0022–0026 | Operações disponíveis/restritas coerentes com privilégio real. |
| 0028 | F4 — Administração e modelagem | E2E e acessibilidade dos fluxos de modelagem. | 0024–0027, DEC-02/07 | Browser homologado; teclado, touch, axe e traces sanitizados. |
| 0029 | F5 — Workers, backup e migração | Protocolo IPC versionado e schemas dos workers. | 0003,0006 | Compatibility tests de protocolo e mensagens inválidas. |
| 0030 | F5 — Workers, backup e migração | Supervisor, limites e lifecycle de processos. | 0029, PLAT | Timeout/kill/restart sem órfãos por plataforma. |
| 0031 | F5 — Workers, backup e migração | Leases, heartbeat e checkpoints duráveis. | 0030, persistence | Crash/reclaim e duplicidade controlada sob fault injection. |
| 0032 | F5 — Workers, backup e migração | Job state machine e UNKNOWN commit reconciliation. | 0019,0031 | Incerteza persiste como UNKNOWN sem retry automático. |
| 0033 | F5 — Workers, backup e migração | Backup PostgreSQL via pg_dump/pg_restore. | 0008,0031 | Backup + integrity + restore em DB isolado; estados separados. |
| 0034 | F5 — Workers, backup e migração | Backup MySQL/MariaDB com ferramenta adequada. | 0009–0010,0031 | Restore real em targets descartáveis de versão acordada. |
| 0035 | F5 — Workers, backup e migração | Backup SQLite via Online Backup API. | 0011,0031 | Backup de DB ativo consistente; integrity/restore testados. |
| 0036 | F5 — Workers, backup e migração | Orquestração, retenção, restore e migrations de dados externos. | 0033–0035 | Restore-tested não é inferido de checksum; rollback testado. |
| 0037 | F6 — Monitoramento e automação | Logs Pino estruturados, correlation e redaction. | 0003, SEC | Golden tests e secret scans sem segredo em logs. |
| 0038 | F6 — Monitoramento e automação | Métricas de API/adapters/workers e health. | 0005,0030 | Métricas limitadas, sem labels de alta cardinalidade/sensíveis. |
| 0039 | F6 — Monitoramento e automação | Audit trail para operações sensíveis. | 0026,0037 | Registros íntegros, minimizados e correlacionados ao plano/fingerprint. |
| 0040 | F6 — Monitoramento e automação | Alertas de jobs/falhas e estados UNKNOWN. | 0032,0038 | Falha reproduzível gera sinal sem retry perigoso. |
| 0041 | F6 — Monitoramento e automação | Automação agendada com quotas e cancelamento. | 0031–0040 | Overlap, restart, schedule drift e permission tests. |
| 0042 | F6 — Monitoramento e automação | Hardening e load observability. | 0037–0041 | Stress/soak e resource bounds documentados por alvo. |
| 0043 | F7 — Distribuição e instalação | Cofre criptografado, key lifecycle e Argon2id homologado. | DEC-05, SEC | Crypto review, recovery tests e benchmarks por alvo. |
| 0044 | F7 — Distribuição e instalação | Instalador/launcher Termux. | 0003,0043, PLAT-01 | Instalação upgrade/rollback em dispositivo de teste, sem dados reais. |
| 0045 | F7 — Distribuição e instalação | Pacote Linux (arquiteturas aprovadas). | DEC-02 | Install/uninstall/upgrade e filesystem permissions por distro. |
| 0046 | F7 — Distribuição e instalação | Instalador Windows x64 (se aprovado). | DEC-02 | Runner Windows, assinatura e upgrade/rollback. |
| 0047 | F7 — Distribuição e instalação | Container Docker opcional. | DEC-03 | Build por digest/arch, health/storage/non-root e migration tests. |
| 0048 | F7 — Distribuição e instalação | Release manifest assinado, SHA-256 e SBOM. | 0044–0047 | Assinatura inválida/artefato alterado são rejeitados. |
| 0049 | F7 — Distribuição e instalação | Update staging, health gate e rollback. | 0048 | Interrupção em cada fase restaura versão funcional. |
| 0050 | F8 — Homologação e release | Homologar Termux Android ARM64. | 0044, runtime/db/UI prontos | Instalação/build/teste/recovery repetíveis em device matrix aprovada. |
| 0051 | F8 — Homologação e release | Homologar Linux ARM64 glibc e Linux x64 aprovados. | 0045, decisões | Runner por arquitetura/distro; full suite e artefatos. |
| 0052 | F8 — Homologação e release | Homologar Windows e browsers E2E aprovados. | 0046, UI/auth | CI Windows/E2E e security tests verde. |
| 0053 | F8 — Homologação e release | Disaster recovery, backup restore e migrations end-to-end. | 0036, plataformas | Restore real repetido; RPO/RTO definidos e atingidos. |
| 0054 | F8 — Homologação e release | Auditoria de segurança, supply chain e release candidate. | 0048–0053 | Findings triados, SBOM/assinatura validada, sem blocker aberto. |
| 0055 | F8 — Homologação e release | Release readiness e aprovação de suporte/produção. | 0050–0054, DEC-01–08 | Gates aplicáveis PASS; N/A justificados; decisão assinada e evidências publicadas. |

## Integridade do plano

As campanhas existentes mantêm ordem 0001…0055 e os estados históricos. Títulos/objetivos 0003–0055 são reconstrução de planejamento v5.5 baseada no escopo descrito acima; responsáveis devem aprovar decisões pendentes antes de comprometer suporte de produto.
