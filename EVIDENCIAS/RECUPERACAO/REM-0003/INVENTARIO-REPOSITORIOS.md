# REM-0003 — inventário atualizado dos repositórios

Data da verificação: 2026-11-04 UTC. Remotes e publicação foram consultados por SSH (`git ls-remote`) e API GitHub com cache bypass quando indicado.

## Repositório de código

| Campo | Estado atual |
|---|---|
| Diretório / raiz Git | `~/projetos/repos/idatabase-client`; `git rev-parse --show-toplevel` retorna essa raiz. |
| Branch / HEAD | `main` / `3a133887579c2a9392fab35469c355f6a09725b2`. Dois commits locais (`f8773ce…`, `3a13388…`). |
| Working tree | Limpo; zero untracked e zero ignored; `git status --short --branch --ignored` mostra `## main`. |
| Remotes / upstream | `origin` = `git@github.com:mackowen/idatabase-client.git`; `main` sem upstream. |
| GitHub | API repo HTTP 200, `size=0`, `default_branch=main`; `git ls-remote HEAD refs/heads/main` sem refs. Nenhum push. |
| Integridade | `git fsck --full` termina com código 0. |
| Árvore | 44 arquivos rastreados. README e documentação, `.gitkeep` em diretórios; sem código executável ou manifestos de produto. |

## Repositório histórico

| Campo | Estado atual |
|---|---|
| Diretório / raiz Git | `~/projetos/repos/idatabase-client-historico`; Git ativo diretamente nesta raiz. |
| Branch / HEAD | `main` / `fbb59237c82328d365d5192a01ae606bfa2d7240`; cinco commits na cadeia local e remota. |
| Working tree | Limpo; zero untracked e zero ignored; `main...origin/main`. |
| Remotes / upstream | `origin` = `git@github.com:mackowen/idatabase-client-historico.git`; upstream `origin/main`. |
| GitHub | `HEAD` e `refs/heads/main` apontam para `fbb59237c82328d365d5192a01ae606bfa2d7240`; API `/git/ref/heads/main` confirma o mesmo SHA. |
| REM-0002 | `REMEDIACOES/REM-0002.md` e `CAMPANHAS/0002.md` existem na branch `main`; API Contents retornou HTTP 200. |
| Árvore | 58 arquivos rastreados antes dos artefatos REM-0003; após publicação do REM-0002 não há alterações locais pendentes. |

## Mudanças desde a auditoria REM-0002

Nenhuma alteração de código ou de histórico foi observada: os HEADs locais permanecem `3a133887…` e `fbb59237…`, iguais aos registrados no encerramento da REM-0002. Os dois worktrees estão limpos. O remoto de código continua sem refs; o histórico continua publicado no SHA final da REM-0002. A alteração desta execução limita-se aos novos documentos REM-0003 no repositório de histórico.

## Inventários completos

`ARQUIVOS-RASTREADOS-CODIGO.txt` e `ARQUIVOS-RASTREADOS-HISTORICO.txt` contêm a saída atual de `git ls-files` para cada raiz. `find` e procura de configurações confirmaram ausência, no repositório de código, de `package.json`, lockfiles, `tsconfig`, fontes `.ts/.tsx/.js`, Dockerfile, configs de teste e workflow CI. Não existe matriz de gates da Campanha 0002 separada em `MATRIZES/`; os resultados estão no relatório `CAMPANHAS/0002.md` e evidências `EVIDENCIAS/0002/`.

Nenhuma leitura ou escrita foi dirigida a RotaMoto, CondoOS ou outros projetos. Nenhum comando de push foi executado no repositório de código.
