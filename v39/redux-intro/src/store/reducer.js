// Start-state
const initialState = {
  todos: [],
  counter: 0,
};

//const myAction = {type: "ADD_TODO", payload: "städa" };

// Reducer – tar state och action, returnerar nytt state
export function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: Date.now(), text: action.payload, done: false },
        ],
        counter: state.counter + 1,
      };
    case "REMOVE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
        counter: state.counter - 1,
      };
    case "DONE":
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id == action.payload) {
            return { ...todo, done: true };
          }
          return todo;
        }),
      };

    default:
      return state;
  }
}
