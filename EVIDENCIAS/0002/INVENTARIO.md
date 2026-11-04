# Evidência 0002 — inventário de caminhos e Git

Execução em 2026-11-04 (UTC), Termux/Android. Os caminhos foram avaliados sem copiar, mover, inicializar ou alterar repositórios.

## Caminhos

| Caminho | Existência/tipo | `.git` | Raiz Git | Branch / HEAD | Worktree | Remotes / refs |
|---|---|---|---|---|---|---|
| `~/projetos/repos/idatabase-client` | Diretório | Sim, válido | Mesmo caminho | `main`, `3a133887579c2a9392fab35469c355f6a09725b2` | Limpo | `origin` correto; sem upstream; 2 commits locais; remoto sem refs |
| `~/projetos/repos/idatabase-client-historico` | Diretório, 28 arquivos | Não | `git rev-parse` falha | Indeterminados | Indeterminado sem `.git` | Remoto consultado separadamente; `main` em `76b9c86448f13f0d9983f39f926b4219c21cd559`, 3 commits |
| `~/projetos/idatabase-client-historico` | Ausente | N/A | N/A | N/A | N/A | N/A |

O remoto do histórico contém sete arquivos que diferem do conteúdo local correspondente e possui arquivos exclusivos, inclusive o relatório e manifestos da REM-0001. Comparação de hash (`git rev-parse HEAD:path` vs `git hash-object arquivo`) não alterou conteúdo. Nenhuma resolução foi tentada.

## Comandos representativos e resultados

| Comando/verificação | Resultado |
|---|---|
| `git -C <código> rev-parse --show-toplevel` | Código 0; raiz oficial. |
| `git -C <código> branch --show-current` / `rev-parse HEAD` | Código 0; `main` / `3a133887579c2a9392fab35469c355f6a09725b2`. |
| `git -C <código> status --short --branch` | Código 0; `## main`, limpo. |
| `git -C <código> remote -v` | Código 0; fetch/push `git@github.com:mackowen/idatabase-client.git`. |
| `git ls-remote git@github.com:mackowen/idatabase-client.git HEAD refs/heads/main` | Código 0, sem saída (nenhuma ref). |
| `git fetch --no-tags origin main` no código | Código 128, `couldn't find remote ref main`; nenhum HEAD local alterado. |
| `git -C <histórico local> rev-parse --show-toplevel` | Falha: nenhum repositório Git neste caminho nem ancestrais. |
| `git ls-remote git@github.com:mackowen/idatabase-client-historico.git HEAD refs/heads/main` | Código 0; HEAD/main `76b9c86448f13f0d9983f39f926b4219c21cd559`. |
| `git clone --bare --no-tags <SSH histórico> $HOME/idatabase-hist-audit.FQtCo7/repo.git` | Código 0; refs e árvore remotas inspecionadas sem tocar nos caminhos oficiais. |
| `ssh -T git@github.com` | Autenticação SSH confirmada; saída 1 porque GitHub não fornece shell. Nenhum dado de chave foi exibido. |
| `gh api repos/...` | Código 4: GH CLI sem sessão autenticada. |
| `git ls-remote` do histórico após inspeção | Mesmo SHA `76b9c86448f13f0d9983f39f926b4219c21cd559`; não houve publicação. |

O remoto do código foi confirmado sem refs tanto por `git ls-remote` quanto pela página pública do repositório, que informa estar vazio. Nenhum SHA da Campanha 0002 foi publicado.

## Preservação

Não foram executados `git init`, clone no destino oficial, checkout, merge, `reset`, `clean`, rebase, push ou alteração de remote. Os arquivos novos da Campanha 0002 não estão commitados porque a pasta histórica local não possui `.git` e diverge do histórico remoto.
