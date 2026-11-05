# Gates da REM-0006 — evidência e estado

| Gate | Estado | Base verificável |
|---|---|---|
| G1 — Recuperação do planejamento | PARTIAL | A sequência e os títulos foram reafirmados explicitamente; matriz detalha 55 entradas. Dependências/saídas derivadas de requisitos v5.5 são marcadas como planejamento, não como texto histórico recuperado; DEC continuam pendentes. |
| G2 — Integridade da sequência 0001–0055 | PASS | Validador documental encontrou IDs sequenciais exatos 0001…0055; oito cabeçalhos cobrem F1 0001–0006, F2 0007–0013, F3 0014–0021, F4 0022–0028, F5 0029–0036, F6 0037–0042, F7 0043–0049 e F8 0050–0055. |
| G3 — Rastreabilidade | PASS | `MATRIZ-RASTREABILIDADE-v5.6.md` relaciona cada família de requisitos com campanhas corrigidas, riscos, testes e gates; detalhamento campanha-a-campanha inclui os mesmos campos. |
| G4 — Preservação da v5.5 | PASS | Manifesto v5.5 validado com `sha256sum -c`; tag `IDB-FREEZE-AUTH-v5.5` remota permaneceu no commit anterior. Nova baseline vive em novo diretório/tag. |
| G5 — Integridade da Campanha 0003 | PASS | Registro original lido; avaliação de correspondência em `CAMPANHA-0003-AVALIACAO.md`; resultado PARTIAL e limitações intocados. |
| G6 — Integridade dos AUD legados | PASS | v5.6 contém exatamente AUD-01…AUD-16, cada qual `LEGACY_DESCRIPTION_UNRECOVERED`; nenhum foi descrito ou fechado por inferência. Riscos novos com IDs próprios. |
| G7 — Checkpoint e manifesto | PASS | Manifesto SHA-256 v5.6 cobre os nove documentos normativos, sem self-hash; validado antes e após commit/tag. Checkpoint e refs conferidos. |
| G8 — Git e publicação | PASS | Histórico atualizado por commits normais/fast-forward. Branch, commit, tag e arquivos matriz/manifesto verificados por `git ls-remote` HTTPS e API GitHub. Código sem alterações/push. |
| G9 — Isolamento dos demais projetos | PASS | Paths usados se limitaram aos dois repositórios oficiais. Nenhum outro projeto, banco, serviço ou ferramenta foi alterado. |
| G10 — Congelamento v5.6 | PASS | Tag anotada aponta ao commit exato do diretório congelado, manifesto SHA conferido; checkpoint publicado. |

Resultado consolidado: PARTIAL pelo G1. A sequência 0001–0055 está normalizada; a limitação restante é a ausência de uma fonte histórica que autentique como originais todos os detalhes de aceite planejados, não uma lacuna na lista explícita desta remediação.
