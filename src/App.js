import {useState, useEffect} from 'react';
import PokemonSearch from './PokemonSearch.js';


function App() {
  const [pokemonList, setPokemonList] = useState([]);
  
  useEffect(()=>{
    if(pokemonList.length === 0){
      const fetchData = async () => {
        for (let i = 1; i <= 1008; i++) {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
          const data = await response.json();
          const pokemon = {
            name: data.name,
            id: data.id,
            image: data.sprites["front_default"],
            type: data.types.map(type => type.type.name).join(", "),
          }
          setPokemonList((prevPokemon) => [...prevPokemon, pokemon]);
        }
      };
      fetchData();
    }
  },[]);
  return (
    <PokemonSearch pokemonList={pokemonList} />
  );
}

export default App;
