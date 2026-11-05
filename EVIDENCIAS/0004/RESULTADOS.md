# Campanha 0004 — evidências de execução

Data: 2026-11-05 (UTC). Ambiente observado diretamente no Termux.

## Repositórios antes da alteração

Código: `main`, HEAD `f44a21bb9ed6d4d8e947901d5b5b4ba671daad85`, worktree limpo, `origin` oficial SSH. `git ls-remote` do repositório de código não retornou refs antes da execução. Por erro operacional, o comando `git push origin main` foi executado no diretório de código e publicou `3978c652252e64510c6b5cc026e09ffa3d374681` em `main`. O erro está documentado em `INCIDENTE-PUSH-CODIGO.md`. Não foi feita tentativa de apagar ou reescrever o remoto.

Histórico: `main` e `origin/main` alinhados em `b5485fb7f35342e7e314d575f62984c78c53b191`; worktree limpo antes dos novos arquivos; remote oficial SSH. Tag anotada v5.6 existente e preservada: objeto `323d76e0cf8d8858359830d799f4a276f8a25909`, commit `557d5500a4dbfb3083a93276798cfd43eba19d2b`.

## Ferramentas

```text
Node.js: v26.4.0
npm: 11.21.1
process.platform / process.arch: android / arm64
process.versions.sqlite: 3.53.4
SQLite CLI (não usado pela aplicação): 3.54.1
Clang: 21.1.8, target aarch64-unknown-linux-android24
Git: 2.56
```

## Comandos e resultados

| Comando | Código | Resultado |
|---|---:|---|
| `npm ci --fetch-retries=0 --fetch-timeout=120000` | 0 | 192 pacotes adicionados; 9 vulnerabilidades moderadas informadas; sem `audit fix`. |
| `npm run verify` | 0 | Build de contracts/persistence/server/web; typecheck de todos os workspaces; ESLint; Vitest 6 arquivos, 22 testes aprovados. |
| `node EVIDENCIAS/0004/driver-probe.mjs` | 0 | WAL efetivo; FK recusou referência órfã; rollback efetivo; reabertura íntegra; modos 0700/0600. |
| `git diff --check` | 0 | Sem erros de whitespace. |

Saída JSON da prova do driver:

```json
{"node":"v26.4.0","platform":"android","arch":"arm64","sqlite":"3.53.4","journalMode":"wal","foreignKeyRejected":true,"rowsAfterRollback":0,"synchronous":2,"integrity":"ok","foreignKeyViolations":0,"parentRowsAfterReopen":1,"directoryMode":"700","fileMode":"600"}
```

## Conteúdo da suíte de persistência

Os testes executam contra SQLite real (arquivo temporário ou `:memory:` para falhas transacionais): criação e migração inicial; reopen e persistência; múltiplas migrações; falha/rollback; checksum divergente; schema futuro; WAL/FK/synchronous/busy timeout; integridade; serialização de concorrência; rollback/cancelamento; commit incerto e pausa de novas escritas; encerramento; proteção do caminho/permissões; banco corrompido não substituído; interrupção abrupta simulada com SIGKILL em transação; arquivo SQLite externo isolado.

## Limites

Somente Node 26.4.0 em Android ARM64 foi executado. Não há homologação nesta campanha em Android com Node 22/24, Linux, Windows ou Docker. A API `node:sqlite` está em estabilidade Release Candidate. `npm ci` reportou nove moderadas; não foram corrigidas nesta campanha para evitar atualização fora do escopo.

## Publicação remota e incidente

O commit histórico `ac7ccbba33c5ecef9a8fe0d09ed3b4579d8a2c1c` foi enviado normalmente ao repositório histórico e `git ls-remote` confirmou `main` nesse SHA. A página direta do GitHub mostrou esse commit e os arquivos da Campanha 0004. A mesma consulta mostrou o commit de código `3978c652252e64510c6b5cc026e09ffa3d374681` publicado em `main` do repositório de código, contrariando a regra. Ver [registro do incidente](INCIDENTE-PUSH-CODIGO.md). Resultado global passa a **FAIL de conformidade**, apesar dos testes técnicos aprovados.

Correção documental final publicada em `46b3a9b8845c4d63bc5bf719a922b0f7ce48492b`; após o push, `git ls-remote origin refs/heads/main` retornou exatamente esse SHA. A consulta direta confirmou o commit [no GitHub](https://github.com/mackowen/idatabase-client-historico/commit/46b3a9b8845c4d63bc5bf719a922b0f7ce48492b), o [relatório](https://github.com/mackowen/idatabase-client-historico/blob/main/CAMPANHAS/0004.md) e a [evidência do incidente](https://github.com/mackowen/idatabase-client-historico/blob/main/EVIDENCIAS/0004/INCIDENTE-PUSH-CODIGO.md). O `main` do repositório de código foi confirmado em `3978c652252e64510c6b5cc026e09ffa3d374681` e não recebeu outra alteração nesta etapa.
