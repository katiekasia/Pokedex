import { useEffect, useState } from "react";
import '../css/Pokedex.css';
import { Link } from "react-router-dom"

export default function Pokedex() {
  const [pokemonList, setPokemonList] = useState([]);
  const [page, setPage] = useState(0); // page = 0 -> offset = 0

  const limit = 9;
  
  

  useEffect(() => {
    const fetchPokemon = async () => {
      const offset = page * limit;
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
      const data = await res.json();
      const detailedData = await Promise.all(
        data.results.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          const details = await res.json();
          return {
            name: details.name,
            id: details.id,
            types: details.types.map((t) => t.type.name)
          };
        })
      );
  
      setPokemonList(detailedData);
    };
  

    fetchPokemon();
  }, [page]);

  const handleNext = () => setPage((prev) => prev + 1);
  const handlePrev = () => setPage((prev) => Math.max(prev - 1, 0));

  return (
    <div className="pokedex">
      <h1>Pokédex Page {page + 1}</h1>
      <div className="pokemon-grid">
        {pokemonList.map((pokemon, index) => (
          <div id="name" className={`card ${pokemon.types[0]}`} key={index}>
            <h3>{pokemon.name}</h3>
             <Link to={`/pokemon/${pokemon.id}`}> <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${page* limit +index + 1}.png`}
             alt={pokemon.name} /></Link>
          </div>
        ))}
      </div>
      <div className="buttons">
        <button onClick={handlePrev} disabled={page === 0}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}
