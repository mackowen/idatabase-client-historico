# Matriz de auditoria IDB-FREEZE-AUTH-v5.5

## Achados legados

REM-0004 examinou o histórico, backups e blobs acessíveis; a descrição original v5.4 não foi recuperada. Os IDs são preservados sem equivalência inventada.

| ID legado | Estado | Descrição/riscos/aceite herdados | Tratamento nesta baseline |
|---|---|---|---|
| AUD-01 | LEGACY_DESCRIPTION_UNRECOVERED | Não recuperados | Preservar ID; requer fonte original; não mapear a requisito novo. |
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

## Riscos novos derivados explicitamente dos requisitos REM-0005

Os IDs abaixo são novos e não alegam equivalência com nenhum AUD legado. Fechamento requer implementação e evidência de campanha:

| ID novo | Risco/descrição | Evidência/critério de aceite | Campanhas principais |
|---|---|---|---|
| ARCH-001 | Binário nativo/ABI Bionic incompatível com Termux ou outra plataforma. | Instalar, compilar e carregar em runner/dispositivo por alvo; compatibilidade e fallback documentados. | 0003, 0004, 0050–0052 |
| DATA-001 | Mistura do SQLite interno com SQLite externo pode corromper/invadir dados. | Teste de boundary, handles/transações independentes, path permission e isolamento. | 0003 (estrutura), 0010–0013, 0029–0036 |
| DATA-002 | Escritores concorrentes, migrations ou WAL podem perder/inconsistir estado. | Testes de crash/recovery, rollback, checkpoint e concorrência; um writer demonstrado. | 0014–0021, 0029–0036, 0053 |
| SEC-001 | Segredo vazado em logs/contratos/persistência. | Secret scanning, redaction tests e inspection de artefatos/fixtures sintéticos. | 0003 (contratos), 0029–0036, 0043–0049, 0052 |
| SEC-002 | Read-only visual sem privilégio read-only do SGBD permite alteração. | Teste com role sem escrita no banco e tentativa negativa por API. | 0014–0021, 0022–0028, 0052 |
| SEC-003 | Confirmação destrutiva pode ser reaproveitada em outro destino/plano. | Tests de fingerprint change, hash change, nonce replay e expiração. | 0022–0028, 0037–0042, 0052 |
| WORK-001 | Retry de operação de resultado incerto duplica ou repete commit. | Fault injection depois do envio; estado `UNKNOWN`, sem retry automático, recuperação explícita. | 0029–0036, 0037–0042, 0053 |
| BACKUP-001 | Backup íntegro não restaurável confundido com backup válido. | Estados independentes e restore real em destino descartável; evidência `RESTORE_TESTED`. | 0029–0036, 0053 |
| DIST-001 | Artefato adulterado ou update sem rollback. | Assinatura/SHA/SBOM verificados, staging, falha forçada e rollback testado. | 0043–0049, 0054–0055 |

Todos os riscos novos derivam dos requisitos dessa versão; não são declarações de bugs encontrados no código atual.
