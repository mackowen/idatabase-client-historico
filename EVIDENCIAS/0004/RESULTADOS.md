# Campanha 0004 — evidências de execução

Data: 2026-11-05 (UTC). Ambiente observado diretamente no Termux.

## Repositórios antes da alteração

Código: `main`, HEAD `f44a21bb9ed6d4d8e947901d5b5b4ba671daad85`, worktree limpo, `origin` oficial SSH. `git ls-remote` do repositório de código não retornou refs; nenhum push foi feito.

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
