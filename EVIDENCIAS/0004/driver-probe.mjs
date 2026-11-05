import { chmodSync, mkdtempSync, rmSync, statSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { DatabaseSync } from "node:sqlite";

const directory = mkdtempSync(join(tmpdir(), "idb-sqlite-probe-"));
const file = join(directory, "probe.sqlite");

try {
  chmodSync(directory, 0o700);
  const database = new DatabaseSync(file, {
    enableForeignKeyConstraints: true,
    timeout: 250
  });
  database.exec("PRAGMA synchronous=FULL;");
  const journalMode = database.prepare("PRAGMA journal_mode=WAL;").get().journal_mode;
  database.exec(`
    CREATE TABLE parent(id INTEGER PRIMARY KEY);
    CREATE TABLE child(parent_id INTEGER REFERENCES parent(id));
    INSERT INTO parent VALUES (1);
  `);

  let foreignKeyRejected = false;
  try {
    database.prepare("INSERT INTO child VALUES (?)").run(999);
  } catch {
    foreignKeyRejected = true;
  }

  database.exec("BEGIN IMMEDIATE; INSERT INTO child VALUES (1); ROLLBACK;");
  const rowsAfterRollback = database.prepare("SELECT count(*) AS n FROM child").get().n;
  const synchronous = database.prepare("PRAGMA synchronous").get().synchronous;
  const integrity = database.prepare("PRAGMA integrity_check").get().integrity_check;
  const foreignKeyViolations = database.prepare("PRAGMA foreign_key_check").all().length;
  chmodSync(file, 0o600);
  database.close();

  const reopened = new DatabaseSync(file, { enableForeignKeyConstraints: true });
  const parentRowsAfterReopen = reopened.prepare("SELECT count(*) AS n FROM parent").get().n;
  reopened.close();

  const result = {
    node: process.version,
    platform: process.platform,
    arch: process.arch,
    sqlite: process.versions.sqlite,
    journalMode,
    foreignKeyRejected,
    rowsAfterRollback,
    synchronous,
    integrity,
    foreignKeyViolations,
    parentRowsAfterReopen,
    directoryMode: (statSync(directory).mode & 0o777).toString(8),
    fileMode: (statSync(file).mode & 0o777).toString(8)
  };
  console.log(JSON.stringify(result));

  if (
    process.platform !== "android" ||
    process.arch !== "arm64" ||
    journalMode !== "wal" ||
    !foreignKeyRejected ||
    rowsAfterRollback !== 0 ||
    synchronous !== 2 ||
    integrity !== "ok" ||
    foreignKeyViolations !== 0 ||
    parentRowsAfterReopen !== 1 ||
    (statSync(directory).mode & 0o777) !== 0o700 ||
    (statSync(file).mode & 0o777) !== 0o600
  ) {
    process.exitCode = 1;
  }
} finally {
  rmSync(directory, { recursive: true, force: true });
}
