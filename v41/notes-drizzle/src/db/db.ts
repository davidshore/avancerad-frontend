import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
const sqlite = new Database("sqlite.db");
import * as schema from "./schema";
import { NewNoteInput } from "@/types/note";

export const db = drizzle({ client: sqlite, schema });

export async function getNotesBD() {
  return await db.query.notesTable.findMany();
}

export async function addNoteDB(note: NewNoteInput) {
  const [insertedNote] = await db
    .insert(schema.notesTable)
    .values(note)
    .returning();
  return insertedNote;
}
