# Comandos reproduzíveis — Campanha 0003

Executados na raiz do repositório de código:

```sh
npm ci --fetch-retries=0 --fetch-timeout=120000
npm run build
npm run typecheck
npm run lint
npm test
npm run verify
npm audit --omit=dev
npm audit
```

Resultados/códigos estão em `TESTES.md`. `npm run verify` inclui build/typecheck/lint/tests. `npm ci` consulta o lockfile e instala localmente; nenhum comando global foi executado.

Comandos de estado/segurança: `git status --short --branch`, `git rev-parse HEAD`, `git remote -v`, `git ls-remote origin`, `git diff --cached --check`, `git fsck --full`. O push de código não foi executado.
