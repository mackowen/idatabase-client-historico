# Reavaliação dos gates da Campanha 0002

O resultado histórico global da Campanha 0002 permanece **PARTIAL / BLOCKED** no registro original. A tabela abaixo é uma reavaliação atual, sem editar documentos anteriores.

| Gate | Resultado anterior | Estado atual | Evidência / pendência | Dependência, critério e comando futuro | Classificação |
|---|---|---|---|---|---|
| G1 — Build | PARTIAL | PARTIAL | 44 arquivos rastreados, mas sem manifest, lockfile, fontes ou scripts de build. | Criar implementação e lockfile; critério: build reproduzível de checkout limpo. Futuro: `npm ci` e script de build definido no package. | Dependente de implementação. |
| G2 — Contratos | PARTIAL | PARTIAL | Diretório `packages/contracts` só contém `.gitkeep`; sem tipos/esquemas runtime. | Implementar contratos compartilhados e validação runtime; critério: `typecheck` e testes de compatibilidade/serialização passam. | Dependente de implementação. |
| G3 — Testes | PARTIAL | PARTIAL | Diretórios de teste vazios; Vitest/Playwright ausentes e sem scripts/config. | Implementar testes unitários, contrato, integração e recuperação; critério: todos os testes selecionados passam em CI reproduzível. | Dependente de implementação. |
| G4 — Segurança | PARTIAL | PARTIAL | Sem código ou dependências do produto; não há superfície para threat review ou auditoria de dependências. | Depois dos manifests: revisar secrets/auth/authorization, dependências e políticas; critérios e evidências de auditoria sem achados críticos abertos. | Dependente de implementação. |
| G5 — Persistência | PARTIAL | PARTIAL | SQLite 3.54.1, headers e libpq disponíveis; nenhum adapter, schema ou migração existe. | Implementar adapter/migrations; executar rollback, falha/crash, concorrência, WAL/checkpoint e isolamento interno/externo. Critério: suíte de persistência passa e recupera o estado esperado. | Dependente de implementação. |
| G6 — E2E | N/A | N/A | Nenhum app/servidor executável, Playwright ou navegador de teste instalado. | Após app e ambiente suportado: iniciar serviço, executar E2E Playwright e guardar relatório/traces sanitizados. Critério: fluxo essencial passa em browser listado como suportado. | Dependente de implementação e infraestrutura. |
| G7 — UX | N/A | N/A | Sem componentes UI; Monaco, AG Grid e XYFlow não estão instalados/declarados. | Implementar UI; testar viewport móvel, teclado/touch, acessibilidade e desempenho nos fluxos definidos. | Dependente de implementação. |
| G8 — Plataformas | PARTIAL | PARTIAL | Termux Android ARM64 foi observado; nenhum build do produto. Linux x64/ARM64 glibc, Windows x64 e Docker ausentes. | Executar matriz por SO/arquitetura com lockfile, build, unit/integration/E2E e evidências por runner; só promover alvos testados. | Dependente de implementação e infraestrutura externa. |
| G9 — Git e histórico | BLOCKED (registro inicial) | PASS | REM-0002 ativou Git nas duas raízes; ambos limpos. Histórico `main` HEAD `fbb59237…`, publicado e verificado; código `main` HEAD `3a133887…`, remoto sem refs e sem push. | Manter origin/HEAD e worktree verificáveis; `git status --short --branch`, `git rev-parse HEAD`, `git ls-remote`. Critério atual satisfeito. | Resolvido agora; continuar verificando. |
| G10 — Promoção | BLOCKED (registro inicial) | PARTIAL | G9 foi resolvido, mas G1–G5/G8 seguem pendentes e G6/G7 ainda não aplicáveis. | Critério: requisitos técnicos e de plataforma acordados aprovados, matriz de gates com evidência e decisão de promoção registrada. | Dependente dos gates anteriores e de decisão de produto. |

## Evidências e cautelas

- Os estados anteriores foram lidos de `CAMPANHAS/0002.md`, sem alterar o resultado original.
- `G9 PASS` refere-se à ativação/publicação Git verificada pela REM-0002; não implica publicação do código nem suporte técnico do produto.
- `N/A` em G6/G7 significa que atualmente não há app/interface testável; não representa aprovação futura.
- `G10` não pode ser PASS enquanto os gates técnicos e o escopo oficial de plataformas permanecerem abertos.
