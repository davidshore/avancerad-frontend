import { int, sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const notesTable = sqliteTable("notes_table", {
  id: int().primaryKey({ autoIncrement: true }),
  title: text().notNull(),
  content: text().notNull(),
  createdAt: integer({ mode: "timestamp" }),
});
