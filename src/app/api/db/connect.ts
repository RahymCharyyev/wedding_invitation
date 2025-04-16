import { Kysely, SqliteDialect } from 'kysely';
import SQLite from 'better-sqlite3';
import { DB } from './types';

const dialect = new SqliteDialect({
  database: new SQLite('data/db.sqlite3'),
});

export const db = new Kysely<DB>({
  dialect,
});
