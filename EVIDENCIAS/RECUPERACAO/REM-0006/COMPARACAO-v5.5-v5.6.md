# Comparação documental v5.5 × v5.6 — REM-0006

## Método e preservação

Comparadas a matriz `BASELINES/IDB-FREEZE-AUTH-v5.5/MATRIZ-CAMPANHAS-v5.5.md`, a matriz histórica `MATRIZES/ROADMAP-0001-0055.md`, registros/checkpoints de Campanhas 0001–0003, REM-0001…0005, requisitos/arquitetura/segurança/rastreabilidade/AUD/decisões v5.5 e a sequência especificada pelo responsável na REM-0006. Repositórios foram verificados antes da edição. A tag/diretório/conteúdo v5.5 não foi alterado; não foi escrito no repositório de código.

## Divergência estrutural

A v5.5 havia retido os IDs e faixas de fase, mas associou vários objetivos diferentes à sequência detalhada de planejamento. Isso deslocava dependências, requisitos, riscos, testes e gates. Exemplo: 0004 era CI em v5.5, mas a sequência reafirmada define 0004 como persistência SQLite e 0006 como qualidade/testes. Similarmente, 0008 era PostgreSQL em v5.5, mas agora é perfis/cofre; PostgreSQL passa a 0009. A matriz v5.6 reconcilia o plano completo sem reescrever a cópia congelada antiga.

## Comparação por fases

| Faixa | Alocação na matriz v5.5 | Alocação normativa v5.6 | Ajuste e impacto |
|---|---|---|---|
| F1 0001–0006 | 0001/0002 históricos e 0003 base; 0004 CI; 0005 API shell; 0006 refinamento de contratos | Git; toolchain; shell React/Fastify; persistência SQLite interna; design system responsivo; qualidade/testes | Corrige 0004 para SQLite; o trabalho CI/advisories migra para 0006; 0005/0006 agora atendem a sequência explícita. |
| F2 0007–0013 | 0007 capability model; 0008 PostgreSQL; 0009 MySQL; 0010 MariaDB; 0011 SQLite; 0012 perfis/pooling; 0013 matriz drivers | contratos; perfis/cofre; PostgreSQL; MySQL; MariaDB; SQLite externo; sessões/pools/reconexão/cancelamento | PostgreSQL muda 0008→0009, MySQL 0009→0010, MariaDB 0010→0011, SQLite 0011→0012; capabilities passam a contratos 0007; lifecycle 0013. |
| F3 0014–0021 | Execução/streaming, paginação, editor, resultados, transações, explain/profiling, SQL quality | explorer; Monaco; execução/streaming; transações; AG Grid; CRUD seguro; histórico/favoritos; Browser E2E | Substitui objetivos deslocados; separa UI/editor, execução, dados e E2E conforme sequência do responsável. Explain/profiling deixa de ser campanha independente e decisões permanecem pendentes/escopadas. |
| F4 0022–0028 | Introspection/modelos, ER/diff/DDL, preview/apply, admin objects, E2E/accessibility | administração DB/schema; DDL tabelas/colunas; índices/constraints; views/funções/triggers; roles; ER; diff read-only | Reatribui as sete campanhas a administração/modelagem; preview destrutivo liga-se a SEC-05/06 e é testado com DB descartável. |
| F5 0029–0036 | IPC/supervisor/leases/jobs; backup por engine; orquestração | supervisão/IPC; fila/checkpoints; backup nativo; restauração; diff avançado; sincronização; migração SGBDs; validação recovery | Separa fila durable e restauração; inclui diff/sync/migração entre DBs e recovery validation no final da fase. |
| F6 0037–0042 | Logs/métricas/audit/alertas/agendamento/observability | collectors; dashboard; sessões/locks; scheduler; automação admin; alertas | CI não reside aqui; recomendação de redaction foi alocada a 0037 e re-auditoria 0050/0054. |
| F7 0043–0049 | Vault/KDF, instaladores, container, assinatura/update | núcleo de instalação; Termux; Linux; Windows; Docker opcional; update/repair; migração máquina/uninstall | Criptografia continua requisito de vault 0008, com core release em 0043; plataformas e manutenção se alinham à sequência explicitada. Docker permanece decisão. |
| F8 0050–0055 | Homologação separada por OS, DR, auditoria, RC | auditoria arquitetural; E2E multiplataforma; performance/concorrência; recovery/DR; UX/a11y; RC/Stable | Reordena homologação para auditar arquitetura, testar browser/plataformas, performance, DR, UX e então release. |

## Campanhas 0001–0003: status e correspondência

| ID | Sequência v5.6 | Evidência realizada | Estado preservado/observação |
|---|---|---|---|
| 0001 | Git, repositórios e histórico | Campanha 0001 e REM-0001/0002; estrutura histórica depois regularizada | PARTIAL histórico preservado; nenhuma promoção retroativa. |
| 0002 | Toolchain e Termux | Relatórios, inventários, REM-0002…0004 | PARTIAL/BLOCKED preservado; v5.6 não reescreve a campanha. |
| 0003 | Shell React + Fastify | Commit código `f44a21bb9ed6d4d8e947901d5b5b4ba671daad85`; workspace, shell React/Vite + Fastify, contratos/testes | PARTIAL; corresponde à fundação shell, com escopo executável adicional autorizado pela REM-0005. Não entrega persistência nem shell funcional de produto. |
| 0004 | Persistência interna SQLite | Não executada nesta remediação | PLANNED; próxima etapa apenas após revisão da v5.6; requer isolamento, migrations, WAL/FK, writer único e testes de crash/recovery. |

## Ajustes de rastreabilidade e trabalho pendente

`MATRIZ-RASTREABILIDADE-v5.6.md` remapeia ARCH/API/DB/PERSIST/SEC/WORK/BACKUP/DIST/PLAT/QLT/HIST para as campanhas corretas. Mantém riscos novos separados dos 16 AUDs legados. CI, instalação reprodutível, cobertura e triagem dos 9 advisories moderados ficam em 0006; logging/redaction em 0037 com auditoria 0050/0054. Nenhuma correção de dependência, execução de CI, persistência, código ou Campanha 0004 ocorreu na REM-0006.

Baseline v5.5, Campanhas 0001–0003 e REM-0001…0005 preservadas. DEC-01…08 continuam pendentes. Fonte v5.4/AUD original continua não recuperada e não foi inventada.
