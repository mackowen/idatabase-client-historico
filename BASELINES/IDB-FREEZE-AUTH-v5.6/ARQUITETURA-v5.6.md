# Arquitetura IDB-FREEZE-AUTH-v5.6

## Componentes

- **`apps/web`:** React/TypeScript/Vite; Tailwind e UI acessível; editor SQL Monaco; resultados AG Grid Community; modelagem React Flow/XYFlow; Zustand para estado efêmero local; TanStack Query para estado obtido do backend.
- **`apps/server`:** Node.js/ESM/Fastify; validação Zod; Pino com serializers/redaction; inicialização sem efeitos destrutivos e encerramento graceful.
- **`packages/contracts`:** `common`, `api`, `adapters`, `workers`, `persistence`, `schemas`. Tipos e schemas runtime versionados, independentes de UI e drivers.
- **`packages/adapters/*`:** adapter distinto por PostgreSQL, MySQL, MariaDB e SQLite externo; cada um anuncia capabilities e limitações reais.
- **`packages/persistence`:** SQLite interno e migrations; coordenador único de escrita. Não reutiliza adapter de SQLite externo.
- **`packages/workers`:** protocolo IPC versionado, supervisor e estados duráveis.
- **`packages/secrets`, `backup-engine`, `migration-engine`, UI e tooling:** implementados em campanhas posteriores conforme roadmap, nunca antecipados na Campanha 0003.

## Fronteiras de confiança e dados

1. Browser conversa apenas com API autenticada conforme modo de bind; não conecta direto a banco externo nem ao SQLite interno.
2. Fastify valida requests/responses via Zod e contratos compartilhados.
3. Coordenador interno registra jobs/metadata em SQLite interno. Escritas duráveis têm um coordenador autoritativo; artefatos grandes residem fora do DB em filesystem protegido.
4. Worker recebe job/lease por IPC versionado. O worker acessa somente o adapter e credenciais referenciados; emits checkpoints/heartbeat. Commit desconhecido gera `UNKNOWN`, sem retry silencioso.
5. Adapter de SGBD externo não pode receber handle/conexão do SQLite interno. SQLite externo usa caminho/conexão/namespace independentes.
6. Logs Pino têm correlation/job IDs e redaction de credenciais, parâmetros sensíveis e payloads.

## Monorepo e build

npm workspaces com ESM; TypeScript `strict`; lockfile único; scripts nomeados no root e por workspace para lint, typecheck, build e Vitest. Pacote comum de contrato é dependência dos demais; ciclos entre apps/pacotes são proibidos. Artefatos de build não são fontes editáveis.

## Persistência e consistência

SQLite interno aplica migrations transacionais, foreign keys e WAL; recovery e checkpoint são testados. Um writer/coordinator serializa transições duráveis. External adapters anunciam transações, cancelamento, introspection, backup e limitações por capability. Não se presume capability comum entre os quatro SGBDs.

## Integração de plataforma

Bindings nativos só entram após comprovar suporte de ABI/OS, plano de fallback de compilação e testes em cada alvo declarado. Android Termux usa Bionic e não deve ser inferido compatível a partir de Linux ARM64/glibc. Playwright browser E2E roda somente em plataforma/browser homologado. Docker permanece opcional.
