import { useQuery } from "@tanstack/react-query";
import "./App.css";
import { fetchPokemonList, fetchPokemonDetail } from "./api";
import { useState } from "react";

interface Pokemon {
  name: string;
  url: string;
}

type PokemonListResponse = {
  results: Pokemon[];
};

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState<string | null>(null);

  const listQuery = useQuery<PokemonListResponse>({
    queryKey: ["pokemon"],
    queryFn: fetchPokemonList,
  });

  const detailQuery = useQuery({
    queryKey: ["pokemon", selectedPokemon],
    queryFn: () => fetchPokemonDetail(selectedPokemon!),
    enabled: !!selectedPokemon,
  });

  if (listQuery.isLoading) {
    return <div>Laddar ...</div>;
  }

  if (listQuery.isError && listQuery.error instanceof Error) {
    return <div>Fel: {listQuery.error.message}</div>;
  }

  return (
    <div>
      <h1>Pokemons</h1>
      <ul>
        {listQuery.data?.results.map((pokemon) => (
          <li key={pokemon.name}>
            <button onClick={() => setSelectedPokemon(pokemon.name)}>
              {pokemon.name}
            </button>
          </li>
        ))}
      </ul>
      {selectedPokemon && (
        <div>
          <h2>Detaljer för {selectedPokemon}</h2>
          {detailQuery.isLoading && <p>Laddar detaljer ...</p>}
          {detailQuery.data && (
            <div>
              <p>Höjd: {detailQuery.data.height}</p>
              <p>Vikt: {detailQuery.data.weight}</p>

              <img src={detailQuery.data.sprites.front_default} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
