# Matriz de rastreabilidade IDB-FREEZE-AUTH-v5.5

| Requisitos | Risco novo (não equivale a AUD legado) | Campanhas | Testes/evidências de aceite | Gates |
|---|---|---|---|---|
| ARCH-01…ARCH-07, QLT-01 | ARCH-001 | 0003–0006, 0050–0052 | npm ci limpo, build/typecheck/lint/test, logs por runtime/OS | G1,G3,G8 |
| API-01…API-04 | SEC-001 | 0003, 0007–0013, 0014–0021 | Zod contract tests, JSON schema/fixtures, secret-reference assertions | G2,G3,G4 |
| DB-01 | DATA-001 | 0007–0013, 0014–0021 | Capability conformance suite independente para cada driver | G2,G3,G5,G8 |
| DB-02, PERSIST-01…PERSIST-05 | DATA-001, DATA-002 | 0014–0021, 0029–0036, 0053 | Isolation tests, migrations/rollback, WAL/checkpoint, crash/recovery/concurrency | G3,G5,G8 |
| SEC-01 | SEC-002 | 0014–0021, 0022–0028, 0052 | Permission tests com roles reais de banco descartável | G4,G6 |
| SEC-02…SEC-07 | SEC-001, SEC-003 | 0022–0028, 0029–0036, 0037–0042, 0043–0049, 0052 | KDF benchmark por alvo, CSRF/Origin/DNS/rate-limit tests, replay/fingerprint tests, redaction scans | G3,G4,G8 |
| WORK-01…WORK-03 | WORK-001 | 0029–0036, 0037–0042 | Protocol version tests, lease/heartbeat/fault injection/UNKNOWN tests | G3,G5,G6 |
| BACKUP-01…BACKUP-04 | BACKUP-001 | 0029–0036, 0053 | Dump/restore por engine, SQLite Online Backup API, restore real descartável, estados distintos | G3,G5,G6 |
| DIST-01…DIST-04 | DIST-001 | 0043–0049, 0054–0055 | Signature/SHA/SBOM verify, staged update, failure rollback, image digest se Docker | G4,G8,G10 |
| PLAT-01…PLAT-02 | ARCH-001 | 0003–0006, 0050–0052 | Build/test matrix por ABI/OS; homologação no dispositivo e runners acordados | G1,G3,G8 |
| HIST-01, AUD legado | Nenhuma equivalência permitida | Todas | SHA/refs/histórico preservados; fonte v5.4 requisitada para resolução legacy | G9,G10 |

## Rastreabilidade das campanhas 0001–0055

Descrições, dependências e critérios campanha a campanha estão em `MATRIZ-CAMPANHAS-v5.5.md`. Os IDs `AUD-01`…`AUD-16` continuam com estado `LEGACY_DESCRIPTION_UNRECOVERED`; não são substituídos pelos riscos novos nesta tabela.
