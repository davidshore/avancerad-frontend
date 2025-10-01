import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

//Backend kod
let todos = [
  { id: 1, name: "Lär dig TanStack Query", done: false },
  { id: 2, name: "Testa mutations", done: false },
];

// GET – hämta lista
export const getTodos = createServerFn({ method: "GET" }).handler(async () => {
  return todos;
});

// POST – lägg till ny todo
export const addTodo = createServerFn({ method: "POST" })
  .inputValidator((text: string) => {
    if (typeof text !== "string" || text.trim().length === 0) {
      throw new Error("Todo-texten måste vara en sträng");
    }
    return text;
  })
  .handler(async ({ data }) => {
    const newTodo = { id: Date.now(), name: data, done: false };
    todos.push(newTodo);
    return todos;
  });

export const Route = createFileRoute("/todolist-query")({
  component: RouteComponent,
  loader: async () => {
    const todos = await getTodos();
    return { todos };
  },
});

function RouteComponent() {
  const queryClient = useQueryClient();
  const { todos } = Route.useLoaderData();

  const [text, setText] = useState("");

  const { data } = useQuery({
    queryKey: ["todos"],
    queryFn: () => getTodos(),
    initialData: todos,
  });

  const mutation = useMutation({
    mutationFn: (text: string) => addTodo({ data: text }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  return (
    <div>
      {" "}
      <ul>
        {data?.map((t) => (
          <li key={t.id}>{t.name}</li>
        ))}
      </ul>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          mutation.mutate(text);
          setText("");
        }}
      >
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button type="submit">Lägg till</button>
      </form>
    </div>
  );
}
