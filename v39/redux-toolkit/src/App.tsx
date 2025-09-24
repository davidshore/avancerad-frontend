import "./App.css";
import { Counter } from "./features/counter/Counter";
import { useGetPokemonByNameQuery } from "./services/pokemon";

function App() {
  const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");

  return (
    <>
      <Counter />
      <div className="App">
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          <>
            <h3>{data.species.name}</h3>
            <img src={data.sprites.back_default} alt={data.species.name} />
          </>
        ) : null}
      </div>
    </>
  );
}

export default App;
