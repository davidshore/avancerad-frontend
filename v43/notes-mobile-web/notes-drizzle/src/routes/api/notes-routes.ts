import { createFileRoute } from "@tanstack/react-router";
import { addNoteDB, getNotesBD } from "@/db/db";

export const Route = createFileRoute("/api/notes-routes")({
  server: {
    handlers: {
      GET: async () => {
        const notes = await getNotesBD();
        return Response.json(notes);
      },
      POST: async ({ request }) => {
        const body = await request.json();

        const title = body.title;
        const content = body.content;

        const created = await addNoteDB({ title, content });
        return Response.json(created, { status: 200 });
      },
    },
  },
});
