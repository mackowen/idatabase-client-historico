# IDB-FREEZE-AUTH-v5.5 — baseline técnica reconstruída

- **Identificador:** `IDB-FREEZE-AUTH-v5.5`
- **Estado:** FROZEN para orientar o escopo, requisitos e gates do projeto; decisões explicitamente abertas permanecem como gates de decisão.
- **Data de consolidação:** 2026-11-04 UTC.
- **Natureza:** reconstrução normativa versionada, não recuperação byte a byte da v5.4.
- **Fonte principal desta versão:** requisitos explícitos do pedido REM-0005/Campanha 0003, reconciliados com os documentos históricos listados abaixo.
- **Selo Git:** commit e tag `IDB-FREEZE-AUTH-v5.5` registrados em `CHECKPOINTS/v5.5.md` após o commit de congelamento.

## 1. Por que existe uma v5.5

As buscas REM-0004 nos repositórios, backups preservados, refs, reflogs, blobs e conteúdo publicado não recuperaram o artefato normativo v5.4 nem as descrições AUD-01–AUD-16. Os documentos históricos provam que a v5.4 foi declarada congelada, mas não contêm o seu texto completo. Portanto, esta versão não finge restaurar uma fonte perdida. Ela registra os requisitos consolidados agora, mantendo a lacuna histórica visível.

## 2. Hierarquia e proveniência

1. Requisitos normativos desta v5.5 vêm do pedido REM-0005/Campanha 0003 fornecido pelo responsável em 2026-11-04.
2. Continuidade histórica e resultados imutáveis vêm de `CAMPANHAS/0001.md`, `CAMPANHAS/0002.md`, registros, matrizes, evidências e REM-0001…REM-0004.
3. A estrutura e as decisões de fundação vêm do repositório de código (`README.md`, governança, checklist e diretórios já commitados).
4. Qualquer informação que não esteja comprovada acima deve constar em `DECISOES-PENDENTES-v5.5.md`; não se infere uma decisão de produto.

## 3. Documentos que compõem a baseline

- `REQUISITOS-v5.5.md` — requisitos identificados e critérios verificáveis.
- `ARQUITETURA-v5.5.md` — componentes, limites e fluxos.
- `SEGURANCA-v5.5.md` — regras de segurança e operação.
- `MATRIZ-CAMPANHAS-v5.5.md` — plano preservado para 0001–0055 nas oito fases.
- `MATRIZ-AUDITORIA-v5.5.md` — IDs AUD legados e novos riscos sem falsa equivalência.
- `MATRIZ-PLATAFORMAS-v5.5.md` — estados distintos de intenção, toolchain, build, testes e homologação.
- `MATRIZ-RASTREABILIDADE-v5.5.md` — requisitos → riscos → campanhas → testes → gates.
- `DECISOES-PENDENTES-v5.5.md` — decisões explícitas, responsáveis e gates de entrada.
- `CHECKPOINTS/v5.5.md` — hashes, commit e tag do congelamento.
- `MANIFEST-SHA256SUMS` — hashes dos documentos normativos; o manifesto exclui a si próprio.

## 4. Arquitetura normativa

Frontend React + TypeScript + Vite; Tailwind e componentes acessíveis; Monaco SQL Editor; AG Grid Community; React Flow/XYFlow; Zustand e TanStack Query. Backend Node.js + Fastify, Pino e Zod. Monorepo npm workspaces, ESM, TypeScript strict, Vitest e Playwright. Os contratos compartilhados devem contemplar `common`, `api`, `adapters`, `workers`, `persistence` e `schemas`.

PostgreSQL, MySQL, MariaDB e SQLite são destinos externos com adapters independentes e capabilities explícitas. O SQLite interno da aplicação é um subsistema separado dos bancos SQLite externos.

## 5. Regras imutáveis desta baseline

- Não executar SQL contra a base interna por caminho de usuário ou adapter externo.
- Não tratar UI read-only como fronteira de privilégio; privilégios efetivos são os do SGBD.
- Não repetir automaticamente operação com commit desconhecido; reportar `UNKNOWN`.
- Não armazenar segredo em texto puro, logs, contratos ou payloads; usar referências opacas.
- Operação destrutiva exige confirmação associada ao fingerprint do destino e a token de operação com ID, hash do plano, nonce e expiração.
- Persistência interna usa coordenador único/autoritativo de escrita, WAL, foreign keys e migrations; arquivos grandes ficam em filesystem protegido.
- Estados de backup permanecem separados: `CREATED`, `INTEGRITY_VALID`, `RESTORE_TESTED`.
- Nenhuma plataforma está homologada por esta baseline. Termux Android ARM64 é prioridade de desenvolvimento; suporte oficial depende de decisão e evidência em matriz própria.
- A Campanha 0001 continua PARTIAL; a Campanha 0002 continua PARTIAL/BLOCKED. Nenhuma atualização desta versão reescreve os resultados históricos.

## 6. Relação com v5.4

Não foi possível fazer diff semântico ou byte a byte: a fonte v5.4 não está disponível. A v5.5 incorpora os requisitos explicitamente enumerados no pedido atual e o estado documental existente. Os AUD-01…AUD-16 continuam `LEGACY_DESCRIPTION_UNRECOVERED`; nenhuma descrição foi retroativamente atribuída. Esta reconstrução é uma nova fonte normativa a partir do seu selo, não prova do conteúdo original v5.4.

## 7. Congelamento e alteração futura

Esta baseline é imutável no commit/tag indicado no checkpoint. Correções futuras devem criar nova versão (v5.6 ou sucessora), com decisão, motivação, impacto de rastreabilidade, hashes e aprovação; não editar silenciosamente a cópia congelada. Decisões pendentes podem limitar suporte sem invalidar os requisitos já consolidados.
