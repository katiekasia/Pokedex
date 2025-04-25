
import {useEffect, useState} from "react";
import {useParams, useNavigate } from "react-router-dom";
import '../css/Pokemon.css';
export default function Pokemon() {
     const {id} = useParams();
     const [pokemon, setPokemon] = useState(null);
     const navigate = useNavigate();

     useEffect(() =>{
          const fetchDetails = async() => {
               const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
               const data = await res.json();
               setPokemon(data);
               };
               fetchDetails();
               }, [id]);

               const handleNext = () => navigate(`/pokemon/${parseInt(id) + 1}`);
               const handlePrev = () => navigate(`/pokemon/${Math.max(1, parseInt(id) - 1)}`);
             
               if (!pokemon) return <img src="https://media.tenor.com/3a1b0g2r4e4AAAAC/loading.gif" alt="Loading..." />;
     return (
        <div className={`pokemon-card ${pokemon.types[0].type.name}`}>
               <h1>{pokemon.name}</h1>
               <img src={pokemon.sprites.front_default} alt={pokemon.name} />
               <div className="details">
                    <p>Height: {pokemon.height}</p>
                    <p>Weight: {pokemon.weight}</p>
                    <p>Types: {pokemon.types.map(type => type.type.name).join(", ")}</p>
                    <p>Abilities: {pokemon.abilities.map(ability => ability.ability.name).join(", ")}</p>
               </div>
               <div className="buttons">
                    <button onClick={handlePrev}>Previous</button>
                    <button onClick={handleNext}>Next</button>
               </div>
        
        </div>
   );
}