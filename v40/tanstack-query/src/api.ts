export async function fetchPokemonList() {
  const result = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
  if (!result.ok) {
    throw new Error("Something went wrong");
  }
  return result.json();
}

export async function fetchPokemonDetail(name: string) {
  const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  if (!result.ok) {
    throw new Error("Something went wrong");
  }
  return result.json();
}
