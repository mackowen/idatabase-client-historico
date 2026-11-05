# Comandos e resultados — REM-0006

Comandos de leitura/estado executados antes da edição:

```text
cat docs/GOVERNANCA-GIT.md
cat docs/CHECKLIST-FECHAMENTO-CAMPANHAS.md
cat AGENTS.md README.md POLITICA-GIT.md
git status --short --branch
git rev-parse HEAD
git branch -vv
git remote -v
git ls-remote https://github.com/mackowen/idatabase-client.git refs/heads/main
git ls-remote https://github.com/mackowen/idatabase-client-historico.git refs/heads/main refs/tags/IDB-FREEZE-AUTH-v5.5 refs/tags/IDB-FREEZE-AUTH-v5.5^{}
find BASELINES/IDB-FREEZE-AUTH-v5.5 REMEDIACOES CHECKPOINTS CAMPANHAS REGISTROS MATRIZES -maxdepth 3 -type f | sort
```

Resultados de preflight: código `main`/`f44a21bb9ed6d4d8e947901d5b5b4ba671daad85`, limpo, origin oficial, sem branch remota; histórico `main`/`4f39ebfa7f49fd0883896a6c593fdc94b5f2f024`, limpo/alinhado; tag v5.5 objeto `892b75c06fb633e09baac012b1cdf8c5fb02cda9`, peeled commit `bdd1592990652bfdb79ed0e1809e76b042cdfd53`. Tag v5.6 não existia antes do trabalho.

Verificações documentais de saída: contar 55 IDs sequenciais e as oito faixas de fase; revisar cada título contra a lista REM-0006; validar hashes via `sha256sum -c`; `git diff --check`; confirmar tag anotada, branch/SHA publicados usando `git ls-remote` HTTPS e API REST GitHub; comparar SHA blob remoto/local para matriz e manifesto. Resultados finais são anexados após execução/publicação.

Após o commit/tag, foram executados:

```text
sha256sum -c BASELINES/IDB-FREEZE-AUTH-v5.6/MANIFEST-SHA256SUMS
git rev-parse HEAD refs/tags/IDB-FREEZE-AUTH-v5.6 refs/tags/IDB-FREEZE-AUTH-v5.6^{}
git ls-remote https://github.com/mackowen/idatabase-client-historico.git refs/heads/main refs/tags/IDB-FREEZE-AUTH-v5.6 refs/tags/IDB-FREEZE-AUTH-v5.6^{}
GET https://api.github.com/repos/mackowen/idatabase-client-historico/commits/main
GET https://api.github.com/repos/mackowen/idatabase-client-historico/git/tags/323d76e0cf8d8858359830d799f4a276f8a25909
GET /contents/<matriz-v5.6>?ref=IDB-FREEZE-AUTH-v5.6
GET /contents/<manifest-v5.6>?ref=IDB-FREEZE-AUTH-v5.6
```

Resultados: manifesto passou; tag object `323d76e0cf8d8858359830d799f4a276f8a25909` tem target `557d5500a4dbfb3083a93276798cfd43eba19d2b`; `main` remoto concordou com o freeze quando consultado; API Contents retornou blob local idêntico para matriz (`c7500461d9a78f535e338a20085eb2c5e39b0ff6`) e manifesto (`53bdc8d33e0fd7ec9ef0fcb1e000fea014db60d9`). O SHA do HEAD final após o commit de publicação de evidências será anexado depois da última consulta.

Publicação dos registros foi então conferida: commit/branch `main` `5e835963f9027a25b845ab47fa7c77b79fa68939` confirmado pelo `git ls-remote` e API `/commits/main`; API Contents confirmou blobs de REM-0006, matriz e manifesto iguais aos locais. Tag v5.5 permaneceu no objeto/target anterior. O SHA final do commit que fecha este adendo será confirmado novamente após o push.

Nenhum build, teste de aplicação, instalação, alteração de banco ou comando SQL foi executado nesta remediação documental.
