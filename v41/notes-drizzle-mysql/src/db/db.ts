import mysql from "mysql2/promise";
import { drizzle } from "drizzle-orm/mysql2";
import * as schema from "./schema";
import { notesTable } from "./schema";
import { NewNoteInput } from "@/types/note";
import { eq } from "drizzle-orm";

const pool = mysql.createPool({
  uri: process.env.DATABASE_URL!,
  connectionLimit: 10, // tweak as needed
});

export const db = drizzle(pool, { schema, mode: "default" });

export async function getNotesBD() {
  return await db.query.notesTable.findMany();
}

export async function addNoteDB(note: NewNoteInput) {
  const [insertedNote] = await db.insert(notesTable).values(note);
  const id = insertedNote.insertId;

  const noteResult = await db
    .select()
    .from(notesTable)
    .where(eq(notesTable.id, id));

  return noteResult[0];
}
