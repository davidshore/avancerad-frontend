import { addNoteDB, getNotesBD } from "@/db/db";
import { createServerFn } from "@tanstack/react-start";

export const getNotes = createServerFn({
  method: "GET",
}).handler(async () => {
  return await getNotesBD();
});

export const addNote = createServerFn({
  method: "POST",
})
  .inputValidator((note: { title: string; content?: string }) => {
    if (typeof note !== "object" || note === null) {
      throw new Error("Note payload måste vara ett objekt");
    }

    const title = note.title?.trim();

    if (!title) {
      throw new Error("Titel är obligatorisk");
    }

    return {
      title,
      content:
        typeof note.content === "string"
          ? note.content.trim()
          : (note.content ?? ""),
    };
  })
  .handler(async ({ data }) => {
    return addNoteDB(data);
  });
