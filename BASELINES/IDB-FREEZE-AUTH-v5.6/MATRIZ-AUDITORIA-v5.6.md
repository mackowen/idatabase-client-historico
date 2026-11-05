# Matriz de auditoria — IDB-FREEZE-AUTH-v5.6

## Achados legados preservados

REM-0004 não recuperou a fonte v5.4 nem as descrições individuais originais. Nenhuma informação dos 16 IDs abaixo foi criada, reinterpretada ou mapeada para um risco novo. O estado permanece documentalmente `LEGACY_DESCRIPTION_UNRECOVERED`; isso não declara o achado corrigido ou fechado.

| ID | Estado | Descrição/riscos/aceite originais | Tratamento e evidência para resolução |
|---|---|---|---|
| AUD-01 | LEGACY_DESCRIPTION_UNRECOVERED | Não recuperados | Manter ID; requer baseline v5.4/export original com origem e hash. |
| AUD-02 | LEGACY_DESCRIPTION_UNRECOVERED | Não recuperados | Idem. |
| AUD-03 | LEGACY_DESCRIPTION_UNRECOVERED | Não recuperados | Idem. |
| AUD-04 | LEGACY_DESCRIPTION_UNRECOVERED | Não recuperados | Idem. |
| AUD-05 | LEGACY_DESCRIPTION_UNRECOVERED | Não recuperados | Idem. |
| AUD-06 | LEGACY_DESCRIPTION_UNRECOVERED | Não recuperados | Idem. |
| AUD-07 | LEGACY_DESCRIPTION_UNRECOVERED | Não recuperados | Idem. |
| AUD-08 | LEGACY_DESCRIPTION_UNRECOVERED | Não recuperados | Idem. |
| AUD-09 | LEGACY_DESCRIPTION_UNRECOVERED | Não recuperados | Idem. |
| AUD-10 | LEGACY_DESCRIPTION_UNRECOVERED | Não recuperados | Idem. |
| AUD-11 | LEGACY_DESCRIPTION_UNRECOVERED | Não recuperados | Idem. |
| AUD-12 | LEGACY_DESCRIPTION_UNRECOVERED | Não recuperados | Idem. |
| AUD-13 | LEGACY_DESCRIPTION_UNRECOVERED | Não recuperados | Idem. |
| AUD-14 | LEGACY_DESCRIPTION_UNRECOVERED | Não recuperados | Idem. |
| AUD-15 | LEGACY_DESCRIPTION_UNRECOVERED | Não recuperados | Idem. |
| AUD-16 | LEGACY_DESCRIPTION_UNRECOVERED | Não recuperados | Idem. |

## Riscos novos da baseline v5.5 herdados por v5.6

Os IDs ARCH-001, DATA-001, DATA-002, SEC-001, SEC-002, SEC-003, WORK-001, BACKUP-001 e DIST-001 foram explicitamente criados na v5.5 a partir dos requisitos REM-0005. Permanecem IDs próprios, sem equivalência ou substituição de AUD legado. As descrições/aceites originais desses riscos novos são herdados abaixo; seus mapeamentos atualizados estão nas duas matrizes v5.6.

| Risco novo | Mapeamento v5.6 revisto | Critério/evidência resumida |
|---|---|---|
| ARCH-001 | 0002–0006, 0012, 0029, 0044–0047, 0050–0052 | Build/carregamento e testes em ABI/OS real de cada alvo declarado; Termux Bionic não implica glibc. |
| DATA-001 | 0004, 0007, 0012–0013, 0016, 0019, 0022–0028 | Isolamento SQLite interno/externo e capability boundaries verificados em testes descartáveis. |
| DATA-002 | 0004, 0020, 0030, 0036, 0040, 0052–0053 | Single writer, migration/WAL/recovery/concurrency/checkpoint provados por fault injection e reopen. |
| SEC-001 | 0006, 0008, 0016, 0037, 0043, 0050, 0054 | Secret-reference, redaction, fixtures sintéticas, scans de artefatos/logs; sem segredo em claro. |
| SEC-002 | 0009–0013, 0016, 0019, 0022, 0026, 0039 | Enforcement com roles reais de DB descartáveis; UI read-only não é autoridade. |
| SEC-003 | 0008, 0019, 0022–0028, 0034, 0041, 0050 | Fingerprint/hash/nonce/expiry; replay e mudança de destino recusados. |
| WORK-001 | 0017, 0029–0030, 0032, 0034–0036, 0040–0042 | Fault injection comprova `UNKNOWN`, reconcile explícito e ausência de retry automático perigoso. |
| BACKUP-001 | 0031–0032, 0036, 0049, 0053 | Restore real descartável e estados CREATED/INTEGRITY_VALID/RESTORE_TESTED separados. |
| DIST-001 | 0043–0049, 0054–0055 | Assinatura/SHA/SBOM, staging, failure/rollback testados por alvo. |

## Definições herdadas dos riscos novos (não são AUD legados)

| ID | Descrição herdada | Evidência/critério herdado |
|---|---|---|
| ARCH-001 | Binário nativo/ABI incompatível com Termux ou outra plataforma. | Instalar, compilar e carregar em runner/dispositivo por alvo; compatibilidade e fallback documentados. |
| DATA-001 | Mistura do SQLite interno com SQLite externo pode corromper/invadir dados. | Boundary test, handles/transações independentes, path permission e isolamento. |
| DATA-002 | Escritores concorrentes, migrations ou WAL podem perder/inconsistir estado. | Testes de crash/recovery, rollback, checkpoint e concorrência; um writer demonstrado. |
| SEC-001 | Segredo vazado em logs/contratos/persistência. | Secret scanning, redaction tests e inspection de artefatos/fixtures sintéticos. |
| SEC-002 | Read-only visual sem privilégio read-only no SGBD permite alteração. | Teste com role sem escrita e tentativa negativa pela API. |
| SEC-003 | Confirmação destrutiva pode ser reaproveitada em outro destino/plano. | Testes de mudança de fingerprint/hash, nonce replay e expiração. |
| WORK-001 | Retry de operação com resultado incerto duplica ou repete commit. | Fault injection depois do envio; estado `UNKNOWN`, sem retry automático, recuperação explícita. |
| BACKUP-001 | Backup íntegro, mas não restaurável, é confundido com backup válido. | Estados distintos e restore real em destino descartável; evidência `RESTORE_TESTED`. |
| DIST-001 | Artefato adulterado ou update sem rollback. | Assinatura/SHA/SBOM, staging, falha forçada e rollback testado. |
