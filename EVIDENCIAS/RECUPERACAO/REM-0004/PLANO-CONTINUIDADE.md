# Plano mínimo de continuidade

Este handoff não inicia Campanha 0003 e não repete auditorias concluídas.

## Concluído

- REM-0001/0002/0003, campanhas e respectivas evidências foram lidas e preservadas.
- Refs, commits, reflogs, objetos soltos e conteúdo publicado atual foram reexaminados.
- Backups REM-0001 e REM-0002 identificados foram validados pelos manifests SHA-256; não contêm baseline adicional.
- Ambiente Termux ARM64 e Git dos dois repositórios foram revalidados.
- A-01 foi corrigido em `docs/README.md`, em commit local de código; código não foi publicado.
- Critérios de encerramento de Campanha 0002 estão em `GATES-CAMPANHA-0002.md`.

## Decisões/documentos necessários antes de implementação

1. Responsável fornece baseline v5.4 integral e verificável, com origem/versão, descrições/riscos/aceitação de AUD-01–16 e EXIT-01–12; ou aprova formalmente uma nova baseline. Nenhuma descrição pode ser derivada dos IDs.
2. Responsável aprova plataformas e versões suportadas: Termux/Android ARM64, Linux x64, Linux ARM64 glibc, Windows x64; define browsers e se Docker é alvo obrigatório/opcional.
3. Responsável confirma requisitos mínimos de produto/contratos/persistência que não estejam explicitados na baseline.

## Proposta de escopo preciso para futura Campanha 0003 (ainda não iniciada)

**Nome proposto:** Fundação executável e contratos mínimos.

**Pré-condições:** baseline aprovada e arquivada com SHA; alvos de suporte aprovados; escopo funcional mínimo explicitamente autorizado.

**Entregas no repositório de código:** package/workspace ESM com versões fixadas e lockfile; configuração TypeScript; scripts typecheck/build/test; pacote de contratos com schemas/tipos derivados de requisitos aprovados; testes unitários de contrato; CI para a plataforma de desenvolvimento disponível. Nenhum adapter DB, worker, autenticação ou UI entra no escopo salvo se a baseline e autorização detalharem isso.

**Critérios de aceite:** checkout limpo instala exatamente pelo lockfile; typecheck, testes mínimos e build passam; nenhum teste simulado; relatórios/versões/artefatos anexados ao histórico; nenhum push de código sem autorização expressa. A Campanha 0003 pode permanecer PARTIAL se os runners multiplataforma ainda não estiverem disponíveis.

**Não iniciar** até receber as decisões acima. Após a fundação, planejar campanhas focadas em persistência/segurança/runtime, UI e homologação externa, cada uma ligada aos achados da baseline recuperada.
