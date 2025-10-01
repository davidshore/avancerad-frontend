import { createFileRoute, useRouter } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
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

//Frontend kod
export const Route = createFileRoute("/todolist")({
  loader: async () => {
    const todos = await getTodos();
    return todos;
  },
  component: RouteComponent,
});

function RouteComponent() {
  const router = useRouter();
  const todos = Route.useLoaderData();

  const [text, setText] = useState<string>("");

  async function submitTodo() {
    await addTodo({ data: text });
    setText("");
    router.invalidate();
  }

  return (
    <div>
      {todos.map((todo) => {
        return <div>{todo.name}</div>;
      })}

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            submitTodo();
          }
        }}
        placeholder="Enter a new todo..."
      />
      <button onClick={() => submitTodo()}>Add todo</button>
    </div>
  );
}
