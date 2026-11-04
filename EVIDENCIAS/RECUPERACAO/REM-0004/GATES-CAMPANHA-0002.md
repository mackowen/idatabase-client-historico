# Reavaliação atual dos gates da Campanha 0002

O resultado original **PARTIAL / BLOCKED** permanece intacto em `CAMPANHAS/0002.md`. Os estados abaixo refletem evidência atual após REM-0002/0003/0004; “N/A” não equivale a PASS.

| Gate | Resultado original/final anterior | Estado atual | Evidência | Pendência e critério objetivo | Comando/teste de fechamento | Classe |
|---|---|---|---|---|---|---|
| G1 — Build/toolchain | PARTIAL | PARTIAL | Node/npm/Clang/SQLite disponíveis no Termux; 44 arquivos no código, sem manifestos, lockfiles, fontes ou scripts. | Só avaliar build quando existir implementação e configuração reproduzível; checkout limpo deve instalar por lockfile e gerar build determinístico no alvo acordado. | `npm ci` e script build/typecheck futuro em checkout limpo; guardar versões e artefatos. | Implementação |
| G2 — Contratos | PARTIAL | PARTIAL | `packages/contracts` sem conteúdo além de `.gitkeep`; sem schema/tipos. | Contratos tipados e validação runtime devem estar definidos e compatíveis entre consumidores. | Typecheck + testes de contrato/serialização após implementação. | Implementação e baseline |
| G3 — Testes | PARTIAL | PARTIAL | Sem fontes, scripts ou testes executáveis; Vitest/Playwright ausentes. Nenhum teste foi simulado. | Suítes unitária, contrato, integração e recovery selecionadas passam em CI. | Scripts de teste futuros; guardar relatórios e logs. | Implementação |
| G4 — Segurança | PARTIAL | PARTIAL | Não há app/dependências para threat review ou auditoria de dependências. | Threat model, authn/authz, secrets/logging e dependências revisados; nenhum bloqueador aberto. | Scanners e testes negativos definidos após arquitetura/deps; relatório triado. | Implementação e decisão |
| G5 — Persistência | PARTIAL | PARTIAL | SQLite/libpq presentes no sistema; sem adapters, schema ou migrations do produto. | Migrations, rollback, crash/recovery, WAL/checkpoint, concorrência e isolamento interno/externo comprovados. | Suíte de persistência com DB temporário e evidência de estado/recovery; nenhum DB real. | Implementação |
| G6 — E2E | N/A | N/A | Sem aplicação/servidor UI ou navegador Playwright no repo/ambiente. | Só aplicável após fluxo executável; fluxo crítico passa em navegador/SO oficialmente suportado. | E2E Playwright em runner alvo, relatório e traces sanitizados. | Implementação e infraestrutura |
| G7 — UX | N/A | N/A | Sem UI ou componentes; UX não observável. | Só aplicável quando UI existir; acessibilidade, touch/teclado, viewports e desempenho aprovados. | Testes de acessibilidade e avaliação manual em dispositivo definido. | Implementação e decisão |
| G8 — Plataformas | PARTIAL | PARTIAL | Ambiente Termux Android ARM64 observado; nenhum build de produto. Linux ARM64 glibc/x64, Windows e Docker não homologados. | Decidir os alvos; cada alvo declarado precisa de build e testes próprios reproduzíveis. | Jobs/hosts reais por SO/arquitetura, com versões e artefatos. | Implementação, decisão e infraestrutura |
| G9 — Git/histórico | BLOCKED inicialmente; PASS após REM-0002 | PASS | Código válido/limpo em `main`, origin correto, sem push; histórico `main` limpo e publicado em `fc072fce…`, confirmado por ls-remote/API. | Manter raízes/remotes corretos, histórico preservado e publicação histórica verificável. | `git status --short --branch`, `git fsck --full`, `git ls-remote`; verificação API após publicação. | Resolvido; verificação recorrente |
| G10 — Promoção | BLOCKED inicialmente; PARTIAL após REM-0002/0003 | PARTIAL | G9 foi resolvido; G1–G5/G8 continuam pendentes e G6/G7 não aplicáveis sem app/UI. | Aprovar alvos e critérios, fechar todos os gates aplicáveis e registrar decisão de promoção; preservar resultado original PARTIAL. | Revisão final da matriz e artefatos de campanha após validações. | Gates anteriores e decisão do responsável |

## Separação de preparação e fechamento técnico

- **Preparação comprovada agora:** toolchain local inventariada; Git e histórico íntegros; correção do caminho documental registrada em commit local.
- **Sem implementação:** G1–G5 e UI/contratos permanecem pendentes porque falta código; isso não demonstra falha do Node, npm, SQLite ou Clang.
- **Infraestrutura externa:** G8 exige runners/hosts Linux x64, Linux ARM64 glibc e Windows x64 se escolhidos; Docker somente se escolhido como alvo.
- **Decisão do produto:** definir alvos oficiais, versões mínimas, browsers e opcionalidade de Docker.
- **Bloqueio documental:** critérios individuais AUD/EXIT dependem da baseline v5.4 ou decisão formal substituta.

## Critério de encerramento da Campanha 0002

Manter o resultado histórico PARTIAL; o encerramento só poderá ser registrado em atualização futura quando cada gate aplicável tiver evidência objetiva aprovada, G6/G7 tiverem sido reavaliados após existir app/UI, plataformas obrigatórias estiverem homologadas, AUD/EXIT tiverem origem e critérios rastreáveis, G9 continuar íntegro e uma decisão de promoção estiver documentada. Gates N/A devem ter justificativa e não se convertem em PASS.
