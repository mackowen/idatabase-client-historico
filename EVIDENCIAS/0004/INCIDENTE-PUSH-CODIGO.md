# Incidente — publicação acidental no repositório de código

Data: 2026-11-05 UTC.

## Fato observado

Durante a etapa de publicação, o comando `git push origin main` foi executado sem prefixar o diretório do histórico. O shell manteve como diretório corrente a raiz do repositório de código. O push foi aceito por `git@github.com:mackowen/idatabase-client.git` e criou/publicou `main` no SHA completo `3978c652252e64510c6b5cc026e09ffa3d374681`.

## Verificação

- Antes do push, `git ls-remote origin refs/heads/main` no repositório de código não retornava referência.
- Após o push, a mesma consulta retornou `3978c652252e64510c6b5cc026e09ffa3d374681 refs/heads/main`.
- A página pública direta do commit no GitHub identifica o repositório `mackowen/idatabase-client`, a mensagem `feat(persistence): add isolated internal SQLite store`, pai `f44a21bb9ed6d4d8e947901d5b5b4ba671daad85` e 23 arquivos alterados: https://github.com/mackowen/idatabase-client/commit/3978c652252e64510c6b5cc026e09ffa3d374681
- O histórico autorizado foi publicado separadamente em `mackowen/idatabase-client-historico`, commit `ac7ccbba33c5ecef9a8fe0d09ed3b4579d8a2c1c`, pai `b5485fb7f35342e7e314d575f62984c78c53b191`: https://github.com/mackowen/idatabase-client-historico/commit/ac7ccbba33c5ecef9a8fe0d09ed3b4579d8a2c1c

## Tratamento

O erro viola a regra da Campanha 0004 que proíbe push do repositório de código. Não foi executada tentativa de excluir branch, reescrever histórico ou efetuar outro push ao repositório de código. A branch remota publicada foi preservada e a execução recebeu resultado global **FAIL de conformidade**. O commit local de código é o mesmo SHA publicado; o repositório local está alinhado com esse remote.

Essa evidência não afirma que a publicação estava autorizada. Qualquer decisão sobre o estado remoto de código deve ser tomada pelo responsável do projeto.
