import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "./store/actions";

function App() {
  const todos = useSelector((state) => state.todos);
  const counter = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  function handleAdd(e) {
    e.preventDefault();
    const text = e.target.elements.todo.value.trim();
    if (!text) return;
    dispatch({
      type: "ADD_TODO",
      payload: text,
    });
    e.target.reset();
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Redux Intro – Todo List</h1>
      <form onSubmit={handleAdd}>
        <input name="todo" placeholder="Lägg till todo" />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            {t.done ? (
              <span style={{ color: "green" }}>{t.text}</span>
            ) : (
              <span>{t.text}</span>
            )}
            <button onClick={() => dispatch(removeTodo(t.id))}>Remove</button>
            <button onClick={() => dispatch({ type: "DONE", payload: t.id })}>
              Done
            </button>
          </li>
        ))}
      </ul>
      <h2>Antal todos: {counter}</h2>
    </div>
  );
}

export default App;
