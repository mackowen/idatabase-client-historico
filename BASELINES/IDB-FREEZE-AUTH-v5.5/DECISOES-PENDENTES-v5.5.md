# Decisões pendentes — IDB-FREEZE-AUTH-v5.5

Essas decisões não impedem consolidar os requisitos explícitos ou iniciar a fundação limitada; impedem declarar suporte, fechar arquitetura operacional dependente ou promover release.

| ID | Decisão | Opções/proposta | Impacto | Dono/critério de encerramento |
|---|---|---|---|---|
| DEC-01 | Faixas oficiais de Node/npm e política LTS/current | Selecionar faixa fixa para desenvolvimento e matriz de CI; Node 26 funciona no Termux observado, mas versão mínima de produção não foi declarada. | Instalação, Vite/Vitest, distribuição e suporte. | Responsável do produto aprova faixa; validar engines em todos os runners. |
| DEC-02 | Alvos oficiais de plataforma | Termux Android ARM64 prioritário; decidir se Linux ARM64 glibc, Linux x64 e Windows x64 são suporte obrigatório ou objetivo de compatibilidade. | Gates G8, addons, release e CI. | Matriz com versões mínimas, libc/API, browser e critério de suporte assinada pelo responsável. |
| DEC-03 | Docker | Mantê-lo opcional ou promovê-lo a alvo oficial; não presumir como necessário. | Packaging, health/storage/migration e suporte. | Decisão formal, ou marcar explicitamente fora de suporte. |
| DEC-04 | Exposição LAN/remota | Requisitos dizem auth obrigatória; faltam método de autenticação, gestão de sessão, onboarding e certificado HTTPS no Termux. | Threat model e UX de operação. | Fluxos e recuperação aprovados antes das campanhas de auth/release. |
| DEC-05 | KDF/segredo local | Argon2id depende de benchmark/homologação; política de chave de cofre, recuperação e backup de chaves ainda não definida. | Secrets vault e portability. | Escolha condicionada a bench por plataforma e modelo de recuperação aprovado. |
| DEC-06 | Matriz de capabilities dos quatro SGBDs | Capacidades exatas e fallback por versão/driver não especificados. | Contratos e adapters. | Aprovar capabilities obrigatórias/opcionais após decidir versões mínimas de SGBD. |
| DEC-07 | UX funcional e fluxos MVP | Monaco/AG Grid/XYFlow definidos como componentes; fluxos operacionais, browser e acessibilidade alvo não foram detalhados. | Escopo de UI/E2E e campanha posterior. | Fluxos e critérios UX aprovados antes de campanhas de UI. |
| DEC-08 | Baseline v5.4/AUD/EXIT | Artefato físico não encontrado em REM-0004; disponibilizar fonte original ou decidir formalmente que v5.5 substitui critérios v5.4. | Remediação histórica dos AUD/EXIT. | Fonte com provenance/hash ou ata de substituição; nunca declarar recuperação byte a byte. |

**Entrada Campanha 0003:** versão de Node/npm é fixada no lockfile/engines do commit; DEC-02 não precisa declarar suporte de produção para executar somente no Termux, mas todo suporte permanece NÃO HOMOLOGADO. DEC-06 pode limitar contratos a capacidades comuns mínimas no escopo de fundação; nenhum adapter real será implementado.
