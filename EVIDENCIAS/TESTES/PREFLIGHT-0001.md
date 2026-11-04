# Evidências PRE-01–PRE-12

Resultados sanitizados do preflight somente leitura.

| ID | Verificação | Resultado | Evidência |
|---|---|---|---|
| PRE-01 | pwd/id/uname | PASS | CWD `~/projetos/repos`; UID/GID 10436; Android Linux aarch64 |
| PRE-02 | Termux/Git/Node/npm | BLOCKED | termux-tools 1.46.0+really1.45.0-1; Git 2.56.0; Node v26.4.0; npm 11.21.1; termux-info sem saída |
| PRE-03 | Alvos e pais | PASS | Dois alvos ausentes; pais existentes e legíveis/graváveis |
| PRE-04 | Espaço/permissões | PASS | ~120 GB disponíveis; diretórios-pai graváveis pelo usuário |
| PRE-05 | Git nos projetos existentes | PASS | RotaMoto limpo em `3bcd9cb`; CondoOS em `a868f84` com uma modificação preexistente |
| PRE-06 | Remotos | PASS | Remotos existentes verificados; URLs omitidas/sanitizadas; nenhum remoto nos destinos novos |
| PRE-07 | Serviços | PASS limitado | Nenhum processo listado nem socket TCP de escuta observado |
| PRE-08 | Persistência PostgreSQL | BLOCKED | Cliente presente, nenhum servidor local observável; estado interno não consultado |
| PRE-09 | Colisões | PASS | Sem diretório/nome `idatabase` existente; projetos adjacentes com nomes distintos |
| PRE-10 | Baseline | PASS | v5.4 — FROZEN fornecida no pedido |
| PRE-11 | Política Git | PASS | Regras de Git fornecidas no pedido; identidade configurada, sem revelar valores |
| PRE-12 | Gate de não interferência | PASS limitado | Destinos novos isolados; limitação de DB e modificação CondoOS anotadas |
