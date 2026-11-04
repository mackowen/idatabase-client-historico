# Política Git permanente — iDataBase Client Avançado

## Destinos oficiais

- Código: `https://github.com/mackowen/idatabase-client.git` — commits locais; push proibido sem autorização expressa específica do usuário.
- Histórico: `https://github.com/mackowen/idatabase-client-historico.git` — registrar campanhas e remediações, inclusive PARTIAL, FAIL e BLOCKED; commit e push ao fechar quando os registros estiverem íntegros e sanitizados.

## Publicação

Antes de publicar, revisar branch, HEAD, worktree, remotes e estado remoto; confirmar identidade do repositório; revisar diff por segredos, dados pessoais e evidências sensíveis. Integrar sem descartar commits. Fazer push normal apenas do histórico e conferir diretamente no GitHub que a branch e o SHA publicados correspondem ao esperado. Registrar URL do commit no relatório.

Nunca usar `--force`/`--force-with-lease`, reescrever ou descartar histórico. Divergência, conflito, remoto inesperado, falha de autenticação ou incerteza: interromper, preservar os estados e reportar BLOCKED/PARTIAL. Nunca declarar publicação apenas com base no resultado do comando `push`.
