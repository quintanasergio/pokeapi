import PokeList from './PokeList.js';
import PokeFilters from './PokeFilters.js';
import {useState} from 'react';

export default function PokemonSearch({pokemonList}){
    const [typeFilter, setTypeFilter] = useState('');
    const [typeFilter2, setTypeFilter2] = useState('');
    const [textFilter, setTextFilter] = useState('');

    function filterPokemon(){
        let filteredList = pokemonList.filter(pokemon=>pokemon.type.includes(typeFilter))
        .filter(pokemon=>pokemon.type.includes(typeFilter2))
        .filter(pokemon => pokemon.name.includes(textFilter));
        return filteredList;
    }
    function updateTextFilter(newText){
        setTextFilter(newText);
    }
    function updateTypeFilter(newType){
        if(newType === 'All') {
            setTypeFilter('');
        } else {
            setTypeFilter(newType);
        }
    }
    function updateTypeFilter2(newType){
        if(newType === 'All') {
            setTypeFilter2('');
        } else {
            setTypeFilter2(newType);
        }
    }
    function clearFilters(){
        setTextFilter('');
        setTypeFilter('');
        setTypeFilter2('');
    }

    const filteredPokemon = filterPokemon();
    return (
        <div>
            <PokeFilters typeFilter={typeFilter}
            typeFilter2={typeFilter2} 
            textFilter={textFilter} 
            updateTextFilter={updateTextFilter} 
            updateTypeFilter={updateTypeFilter}
            updateTypeFilter2={updateTypeFilter2}
            clearFilters={clearFilters} />
            <PokeList pokemonList={filteredPokemon} />
        </div>
    );
}