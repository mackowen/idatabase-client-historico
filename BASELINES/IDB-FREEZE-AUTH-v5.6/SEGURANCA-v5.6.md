# Segurança IDB-FREEZE-AUTH-v5.6

## Autoridade e autenticação

- Privilégios nativos dos SGBDs são a autoridade real. A aplicação não pode prometer read-only mais forte do que o usuário/role do banco.
- Bind padrão em loopback. Exposição LAN exige autenticação. Acesso remoto exige HTTPS e autenticação; não abrir listener remoto sem ambas.
- Cookies de sessão usam `HttpOnly`, `Secure` e `SameSite` adequado ao fluxo. Proteger CSRF, validar `Origin`, impedir DNS rebinding e aplicar rate limiting nos endpoints sensíveis.
- Autorização destrutiva identifica o destino pelo fingerprint (driver/endpoint/database/identity observável), apresenta o plano e exige confirmação ligada à mesma identidade.
- Token de operação inclui ID, hash canônico do plano, nonce de uso único e expiração curta; validade do token é reavaliada no momento de executar. Replay, alteração de plano/destino e nonce repetido são negados.

## Segredos e criptografia

- Credenciais nunca ficam em texto puro em documentos, API persistida, logs, URLs ou resultados de teste. Contratos guardam referências opacas.
- Cofre local criptografado e política de chave/recuperação precisam ser definidos antes da campanha de secrets. KDF e parâmetros não podem ser ativados por presunção.
- Argon2id é obrigatório somente após homologação de implementação, parâmetros e custo em cada plataforma suportada; falha ou incompatibilidade impede promoção daquele alvo.
- Logs Pino devem redigir passwords, tokens, DSNs, chaves, query parameters sensíveis e corpos de requests potencialmente confidenciais.

## SQL, workers e operações

- Toda query externa é enviada pelo adapter autorizado; parâmetros vinculados e privilégios do banco são preservados.
- SQL da aplicação não pode executar diretamente contra persistência interna.
- Workers têm limites, leases e identidade do job. IPC valida versão/schema. Estado de commit desconhecido é `UNKNOWN`; retry exige reconciliação explícita/idempotência provada.
- Operações destrutivas têm confirmação por fingerprint e auditoria de quem/quando/plano, sem gravar segredo.

## Supply chain, release e evidência

- Lockfile, SBOM e manifesto de release assinado são parte do artefato; SHA-256 é verificado antes da instalação.
- Atualização acontece em staging; health check e rollback são exercitados antes de declarar release.
- Testes de segurança usam banco descartável e dados sintéticos; nenhuma campanha executa SQL destrutivo em banco real.
- Finding novo usa identificador próprio, descrição, impacto, evidência, mitigação e aceite. AUD legado sem origem permanece `LEGACY_DESCRIPTION_UNRECOVERED`.
