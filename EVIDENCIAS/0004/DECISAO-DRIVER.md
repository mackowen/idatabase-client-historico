# Decisão de driver SQLite — Campanha 0004 (Fase A)

- Data da avaliação: 2026-11-05 UTC.
- Alvo observado: Termux Android 13, ABI `arm64-v8a`, Node.js `v26.4.0` (`process.platform=android`, `process.arch=arm64`), npm `11.21.1`.
- Estado dos repositórios antes da prova: código `main`/`f44a21bb9ed6d4d8e947901d5b5b4ba671daad85`, limpo; histórico `main`/`b5485fb7f35342e7e314d575f62984c78c53b191`, limpo e alinhado ao GitHub.
- Decisão registrada antes da alteração de código: usar `node:sqlite` (`DatabaseSync`) embutido no Node; nenhuma dependência de driver SQLite de terceiros será adicionada nesta campanha.

## Matriz de opções

| Opção | Instalação/compatibilidade Android ARM64 | Requisitos da campanha | Estabilidade/manutenção | Decisão |
|---|---|---|---|---|
| `node:sqlite` | Módulo built-in do Node; import e database file testados neste Termux/Node 26.4; SQLite embutido no runtime v3.53.4. Sem npm install, binary download, addon externo ou compilação nativa do app. | A prova real verificou WAL, foreign keys, `synchronous=FULL`, busy timeout, transação/rollback, `integrity_check`, reopen e permissões. Implementação usa prepared statements, migrações e API de domínio sem SQL público. | Documentação oficial Node 26 classifica SQLite como Stability 1.2 Release Candidate. As APIs `DatabaseSync` são síncronas; chamadas longas/busy timeout bloqueiam o event loop. Isolar atrás do pacote e manter operações curtas, sem callback assíncrono em transação; compatibilidade não presumida fora dos runtimes testados. | **Selecionado com risco explícito.** Compatibilidade funcional do alvo observado está comprovada; G2 fica PARTIAL até decisão de aceitar API Release Candidate e avaliação do risco síncrono para produção. |
| `better-sqlite3` upstream | Addon C++; release README diz prebuilds para plataformas principais, mas não lista Android/Bionic. Sem prebuild apropriado, instalação exige compilação e toolchain nativa; nenhuma tentativa/instalação foi feita. | Tem API síncrona e suporte transacional, mas compatibilidade Termux não foi demonstrada nesta campanha. | Projeto upstream ativo, porém estabilidade não compensa binário/build Android sem prova. | **Não selecionado.** Não introduzir addon externo cuja instalação/execução no alvo prioritário não foi comprovada. |
| `sqlite3` (`TryGhost/node-sqlite3`) | Addon Node-API com prebuilds upstream listados para Linux ARM64, Linux x64, musl e Windows, não Android/Bionic; instalação cai para node-gyp quando alvo não coberto. Não testado/instalado. | Suporta SQL, mas requer native install/build no alvo. | Repositório oficial aparece arquivado e read-only (desde 2026-07 na consulta). | **Não selecionado.** Ausência de prebuild Android e status arquivado. |
| CLI `sqlite3` | Instalado no Termux, versão `3.54.1`; executável externo ao processo Node. | Não oferece conexão/transactions com lifecycle no processo da aplicação; a campanha explicitamente não aceita CLI como substituto da camada Node. | SQLite CLI válido como ferramenta operacional, não como driver interno. | **Não selecionado como driver.** Não foi usado pela implementação. |

## Prova executada antes da implementação

O script reproduzível desta pasta cria um diretório e database temporários, usa apenas `node:sqlite`, limpa o diretório temporário após sucesso e confirma:

- Node `v26.4.0`, plataforma `android/arm64`; SQLite embutido `3.53.4` (não confundir com CLI `3.54.1`).
- `PRAGMA journal_mode=WAL` retorna `wal`.
- Foreign key inválida é rejeitada; `foreign_key_check` retorna zero violações.
- `BEGIN IMMEDIATE` seguido de rollback não deixa a linha gravada.
- `PRAGMA synchronous=FULL` é aplicado; `integrity_check` retorna `ok`.
- Dados permanecem após fechar/reabrir; diretório é `0700`, arquivo DB `0600` após chmod.

Resultado da prova: exit 0. O teste confirma as capacidades do runtime concreto, não homologação de todas as versões de Node nem comportamento de production release.

## Limitações e guardrails

1. Node SQLite é Release Candidate, não API Stability 2. Pinning do comportamento será feito por testes/versões; updates do Node exigem reexecutar a suíte antes de promoção.
2. `DatabaseSync` bloqueia o event loop enquanto executa. API de transação aceitará callbacks síncronos apenas; fila serializa mutações e limite de operação/busy timeout será finito. Nenhuma query longa ou backup de DB externo entra nesta campanha.
3. `node:sqlite` existe sem experimental flag desde Node 22.13; o requisito de engine mínimo do projeto será ajustado tecnicamente de 22.12 para 22.13, preservando ramos 24 e 26+. Isso não decide política LTS/suporte de produção DEC-01.
4. SQLite embutido no Node será a fonte de runtime da persistência interna. CLI SQLite do Termux pode ter patchlevel diferente; não se usa para abrir/alterar o DB do aplicativo.
5. A prova usa banco temporário e dados sintéticos; nenhum dado de projeto ou banco existente foi aberto.

## Fontes técnicas consultadas (primárias)

- Node.js SQLite API v26: https://nodejs.org/download/release/v26.3.0/docs/api/sqlite.html — adição v22.5, sem flag desde v22.13, Release Candidate desde v25.7, API `DatabaseSync` síncrona, opção/PRAGMA foreign keys e timeout.
- Upstream better-sqlite3: https://github.com/WiseLibs/better-sqlite3 — prebuilds para major platforms e uso síncrono/transactions; README não lista Android.
- Upstream node-sqlite3: https://github.com/TryGhost/node-sqlite3 — alvos de prebuild documentados, fallback node-gyp; repositório consultado aparece archived/read-only.
- SQLite WAL: https://sqlite.org/wal.html.
- SQLite foreign keys: https://sqlite.org/foreignkeys.html.

Esta decisão não instala ferramentas/dependências e antecede toda alteração de código da Campanha 0004.
