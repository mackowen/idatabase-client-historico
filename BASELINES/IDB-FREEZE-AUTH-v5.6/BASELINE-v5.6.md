# IDB-FREEZE-AUTH-v5.6 — baseline técnica reconciliada

- **Identificador:** `IDB-FREEZE-AUTH-v5.6`.
- **Natureza:** baseline normativa versionada, derivada da v5.5; não recupera byte a byte a v5.4 nem altera o conteúdo congelado da v5.5.
- **Escopo desta revisão:** reconciliação documental da sequência e dependências de 55 campanhas conforme REM-0006.
- **Estado:** congelada pelo commit/tag anotado indicado em `CHECKPOINTS/v5.6.md` após publicação e verificação.
- **Campanhas históricas:** 0001 PARTIAL, 0002 PARTIAL/BLOCKED e 0003 PARTIAL permanecem com seus resultados originais.

## 1. Hierarquia e fontes

1. Os requisitos técnicos válidos são herdados de `REQUISITOS-v5.5.md`, arquitetura e segurança da v5.5, sem relaxar limites.
2. A sequência normativa de IDs, títulos e fases para esta correção vem da instrução REM-0006 do responsável.
3. A matriz de campanha detalha entregáveis, dependências, riscos, testes e critérios de entrada/saída a partir dessa sequência e dos requisitos v5.5. Onde uma escolha de produto não está documentada, a decisão permanece aberta em `DECISOES-PENDENTES-v5.6.md`.
4. Evidência histórica de execução vem de Campanhas 0001–0003, REM-0001…0005, checkpoints e registros; não se revisam resultados anteriores.

## 2. Documentos que compõem a baseline

- `REQUISITOS-v5.6.md` — requisitos herdados da v5.5.
- `ARQUITETURA-v5.6.md` e `SEGURANCA-v5.6.md` — conteúdo técnico herdado, sem relaxamentos.
- `MATRIZ-CAMPANHAS-v5.6.md` — 55 campanhas individualizadas nas oito fases, com objetivo, entregáveis, dependências, requisitos/riscos, testes, entrada, saída e gates.
- `MATRIZ-RASTREABILIDADE-v5.6.md` — requisitos → campanhas → riscos → testes/evidências → gates, alinhada à nova sequência.
- `MATRIZ-AUDITORIA-v5.6.md` — 16 IDs legados e riscos novos separados.
- `MATRIZ-PLATAFORMAS-v5.6.md` — intenção, toolchain, build, testes e homologação separados por plataforma.
- `DECISOES-PENDENTES-v5.6.md` — DEC-01…DEC-08 permanecem abertas.
- `MANIFEST-SHA256SUMS` — SHA-256 de todos os documentos congelados nesta pasta, exceto o próprio manifesto.
- `CHECKPOINTS/v5.6.md` no histórico — checkpoint Git, tag e hashes.

## 3. Delta normativo da v5.5

A v5.5 preservou os intervalos 0001–0055 e F1–F8, mas seu conteúdo deslocou objetos entre IDs (por exemplo, atribuiu CI a 0004 e PostgreSQL a 0008, enquanto alocava backups/migrations de forma diferente da sequência de planejamento). A v5.6 mantém imutável a árvore/tag v5.5 e substitui a matriz ativa por uma reconciliação explícita:

- F1: 0001 Git; 0002 toolchain; 0003 shell React/Fastify; 0004 SQLite interno; 0005 design system responsivo; 0006 qualidade/testes.
- F2: 0007 contratos; 0008 perfis/cofre; 0009–0012 PostgreSQL, MySQL, MariaDB e SQLite externo; 0013 sessões/pools/reconexão/cancelamento.
- F3: 0014 explorer; 0015 Monaco; 0016 execução/streaming; 0017 transações; 0018 AG Grid; 0019 CRUD seguro; 0020 histórico/favoritos; 0021 Browser E2E.
- F4: 0022 administração; 0023 tabelas/colunas; 0024 índices/constraints; 0025 views/funções/triggers; 0026 roles; 0027 ER; 0028 diff read-only.
- F5: 0029 supervisão/IPC; 0030 fila/checkpoints; 0031 backup; 0032 restauração; 0033 diff avançado; 0034 sincronização; 0035 migração entre SGBDs; 0036 validação de recovery.
- F6: 0037 collectors/logging/redaction; 0038 dashboard; 0039 sessões/locks; 0040 scheduler; 0041 automação; 0042 alertas.
- F7: 0043 núcleo installer; 0044 Termux; 0045 Linux; 0046 Windows; 0047 Docker opcional; 0048 update/repair; 0049 migração de máquina/desinstalação.
- F8: 0050 auditoria arquitetural; 0051 E2E multiplataforma; 0052 performance/concorrência; 0053 recovery/DR; 0054 UX/acessibilidade; 0055 RC/Stable.

CI/reprodutibilidade, qualidade e triagem dos nove advisories moderados de desenvolvimento observados na Campanha 0003 são trabalho de 0006. Logging/redaction é entregue e testado em 0037 e reavaliado em 0050/0054. Essa alocação não inicia trabalho técnico agora, não aplica atualização de dependências e não move campanhas.

## 4. Campanhas 0001–0003 e entrada da continuidade

Campanhas 0001 e 0002 preservam seus registros. A campanha 0003 entregou workspaces, ESM, TypeScript strict, contratos Zod mínimos, teste Vitest, shell Fastify/Pino com shutdown, shell React/Vite e validações em Termux. Isso corresponde ao shell e à fundação executável da F1, mas não implementou persistência SQLite, UI funcional, segurança completa ou homologação de produção. Seu resultado continua PARTIAL; os nove advisories dev e a homologação de plataforma permanecem limitações. A Campanha 0004 desta baseline é exclusivamente a persistência interna SQLite e só começa após revisão/aprovação da v5.6.

## 5. Segurança e auditoria

Requisitos, fronteiras e regras de segurança foram herdados. AUD-01…AUD-16 seguem `LEGACY_DESCRIPTION_UNRECOVERED`, pois a fonte original não foi recuperada. Riscos novos têm IDs próprios e não substituem os AUDs. DEC-01…DEC-08 continuam pendentes. Termux é prioridade de desenvolvimento; nenhuma plataforma está homologada para produção por esta baseline.

## 6. Imutabilidade

Não editar a pasta/tag v5.5. Esta versão tem diretório, manifesto, checkpoint e tag anotada próprios. Futuras mudanças exigem nova versão e atualização de rastreabilidade; commits/tag anteriores permanecem ancestrais preservados.
