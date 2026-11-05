# Decisões pendentes — IDB-FREEZE-AUTH-v5.6

Herdadas integralmente de DEC-01…DEC-08 em v5.5. REM-0006 não fornece evidência de resolução dessas decisões, portanto nenhuma é fechada nesta versão. Os mapeamentos de campanha ajustam o lugar de execução, não decidem opções de produto.

| ID | Decisão | Estado em v5.6 | Efeito / campanha de entrada | Critério para encerrar |
|---|---|---|---|---|
| DEC-01 | Faixas oficiais Node/npm e política LTS/current | PENDENTE | Distribuição, CI, suporte; gates iniciais 0006 e 0043 | Faixa mínima/máxima aprovada e engines verificados em todos runners/alvos. |
| DEC-02 | Alvos oficiais de plataforma | PENDENTE | 0006, 0044–0046, 0050–0055 | Matriz com SO/versões/ABI/browser/critério assinada; Termux prioritário não basta para homologação. |
| DEC-03 | Docker opcional ou alvo oficial | PENDENTE | 0047 | Aprovar suporte ou declarar N/A explicitamente antes de pacote/release. |
| DEC-04 | Exposição LAN/remota e autenticação | PENDENTE | 0008, 0016, 0021 e fluxos administrativos | Auth/session/onboarding/HTTPS/certificado e recuperação aprovados; loopback continua padrão. |
| DEC-05 | KDF e chave do cofre | PENDENTE | 0008, 0043 | Homologar Argon2id/bench por alvo, chave, recovery e backup antes de ativar cofre. |
| DEC-06 | Capabilities e versões dos quatro SGBDs | PENDENTE | 0007–0013 | Engines/versões mínimos e capabilities obrigatórias/opcionais aprovados com cobertura verificável. |
| DEC-07 | UX funcional e fluxos MVP | PENDENTE | 0005, 0015–0021, 0027, 0038, 0054 | Fluxos, browser, viewport e acessibilidade aprovados antes do compromisso de UX. |
| DEC-08 | Baseline v5.4/AUD/EXIT | PENDENTE | 0050 e governança histórica | Fornecer fonte com proveniência/hash ou decisão formal de substituição; v5.6 não declara recuperação byte a byte. |

## Trabalho técnico não decisório já alocado

Os nove advisories moderados de desenvolvimento observados na Campanha 0003, a CI/reprodutibilidade e cobertura pertencem ao escopo planejado de 0006; redaction e teste de logs pertencem a 0037, com revisão transversal em 0050/0054. Essa alocação não escolhe versões nem declara findings corrigidos. A Campanha 0004 permanece SQLite interno e não começa nesta execução.
