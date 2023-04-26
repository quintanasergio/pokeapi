import {useState, useEffect} from 'react';
import PokemonSearch from './PokemonSearch.js';


function App() {
  const [pokemonList, setPokemonList] = useState([]);
  
  useEffect(()=>{
    const promises = [];
    if(pokemonList.length === 0){
      for (let i = 1; i <= 1008; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then(res => res.json()));
      }
      Promise.all(promises).then(results => {
        const pokemon = results.map(data => ({
          name: data.name,
          id: data.id,
          image: data.sprites["front_default"],
          type: data.types.map(type => type.type.name).join(", "),
        }));
        setPokemonList(pokemon);
        console.log(pokemon);
      });
  }},[]);
  
  return (
    <PokemonSearch pokemonList={pokemonList} />
  );
}

export default App;
