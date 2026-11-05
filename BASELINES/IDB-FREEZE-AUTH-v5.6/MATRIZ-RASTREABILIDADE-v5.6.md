# Matriz de rastreabilidade — IDB-FREEZE-AUTH-v5.6

Esta matriz corrige a associação campanha→requisito da v5.5 junto com `MATRIZ-CAMPANHAS-v5.6.md`. Os IDs ARCH/DB/PERSIST/SEC/WORK/BACKUP/DIST/API/QLT/PLAT/HIST são herdados sem mudança de definição da v5.5. Riscos `ARCH-001` etc. são riscos novos da v5.5 e nunca substituem AUD-01…16.

| Requisitos | Campanhas v5.6 | Riscos novos associados | Evidência/testes de aceite | Gates |
|---|---|---|---|---|
| HIST-01, QLT-02 | 0001–0003; contínuo até 0055 | risco de perda/divergência histórica | refs, commits, status, manifests SHA e publicação verificada; nenhuma campanha passada reclassificada | G9, G10 |
| ARCH-01, ARCH-05, ARCH-06, ARCH-07, QLT-01 | 0003–0006, 0050–0055 | ARCH-001 | checkout limpo; npm ci/build/typecheck/lint/test; CI nos runners aprovados; start/stop smoke | G1, G3, G8, G10 |
| ARCH-02 | 0005, 0015, 0018, 0027, 0038, 0054 | risco UX/accessibility | keyboard, focus, semantic structure, contrast, responsive, manual+automated accessibility | G3, G6, G7, G8 |
| ARCH-03 | 0015, 0018, 0027, 0054 | risco bundle/memória/mobile | editor/grid/diagram interaction, performance/memory and browser evidence | G1, G3, G6–G8 |
| ARCH-04 | 0005, 0015, 0018, 0038 | risco de cache/state divergence | state boundary tests; API state not duplicated as authority | G2, G3, G6, G7 |
| API-01…04 | 0003, 0006–0007, 0013–0021, 0029–0042 | SEC-001, DATA-001, WORK-001 | Zod contract suite, UUID/ISO UTC/ms/bytes/JSON/SemVer/cursor fixtures and secret-reference assertions | G2–G4 |
| DB-01 | 0007, 0009–0014, 0016, 0018–0019, 0022–0028, 0033–0035, 0039 | DATA-001, SEC-002 | independent adapter conformance/fixtures and integration against disposable versions; declared capability matches evidence | G2–G5, G8 |
| DB-02 | 0004, 0012, 0020, 0030–0032 | DATA-001 | internal vs external SQLite separate connections, paths, transactions, permissions, APIs, and isolation tests | G2–G5 |
| PERSIST-01…05 | 0004, 0020, 0030–0032, 0036, 0049, 0052–0053 | DATA-001, DATA-002, BACKUP-001 | migrations/rollback, WAL/FK/checkpoint, single writer, artifact hash/path permissions, crash/reopen, no external SQL path | G2–G5, G8 |
| SEC-01 | 0009–0013, 0016, 0019, 0022, 0026, 0039, 0050 | SEC-002 | tests using real restricted roles on disposable DBs; API and UI cannot exceed DB permissions | G4, G6 |
| SEC-02, SEC-07 | 0008, 0043, 0049, 0050, 0054 | SEC-001 | crypto review, per-target Argon2id bench/homologation, vault recovery, secret-reference and redaction tests | G4, G8, G10 |
| SEC-03, SEC-04 | 0003, 0005, 0008, 0016, 0019, 0021–0028, 0038, 0041, 0044–0047, 0051–0054 | SEC-003 | CSRF/Origin/DNS/replay/rate tests; loopback default; authenticated LAN/HTTPS remote; browser/security tests | G4, G6–G8 |
| SEC-05, SEC-06 | 0019, 0022–0028, 0034, 0041, 0050 | SEC-003 | target fingerprint, plan hash, one-time nonce, expiry, replay/changed destination tests | G2–G6 |
| WORK-01…03 | 0029–0030, 0032–0036, 0040–0042, 0052–0053 | WORK-001, DATA-002 | protocol versioning, leases/heartbeat/checkpoints, resource limits, process lifecycle, UNKNOWN/fault injection | G2–G6, G8 |
| BACKUP-01…04 | 0031–0032, 0036, 0049, 0053 | BACKUP-001 | pg_dump/restore, mysqldump/mariadb-dump, SQLite Online Backup API; distinct CREATED/INTEGRITY_VALID/RESTORE_TESTED | G3–G6, G8–G10 |
| DIST-01…03 | 0043–0046, 0048–0049, 0050–0055 | DIST-001 | signed manifest, SHA256/SBOM, install/upgrade/repair/rollback per approved platform | G1, G4, G8–G10 |
| DIST-04 | 0047, 0050–0055 | DIST-001 | Docker only if formally selected; digest, non-root, health, storage, migrations; otherwise documented N/A | G4, G8–G10 |
| PLAT-01 | 0002–0006, 0012, 0029, 0044, 0050–0053 | ARCH-001 | Termux/Bionic install/build/test, native bindings, device matrix and product homology | G1, G3, G8 |
| PLAT-02 | 0002, 0006, 0021, 0045–0047, 0051–0055 | ARCH-001 | separate toolchain/build/test/homology evidence per Linux ARM64 glibc, Linux x64, Windows, optional Docker | G1, G3, G6, G8 |

## Alteração material de rastreabilidade v5.5 → v5.6

O mapeamento deslocado da v5.5 é substituído: agora 0004 cobre persistência SQLite interna, 0005 design system e responsividade e 0006 qualidade/testes; adaptadores PostgreSQL/MySQL/MariaDB/SQLite externo são 0009/0010/0011/0012; SQL, transações, AG Grid, CRUD e Browser E2E são 0014–0021; Workers/queue/backup/restore/migração são 0029–0036; logging/redaction e automação são 0037–0042; instalação Termux/Linux/Windows e Docker opcional são 0043–0049; homologação/release ocupa 0050–0055. Consulte a matriz campanha-a-campanha para critérios de entrada/saída e gates individuais.
