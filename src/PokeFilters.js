import {useState, useEffect} from 'react';

export default function Pokefilters({typeFilter, typeFilter2, textFilter, updateTextFilter, updateTypeFilter, updateTypeFilter2, clearFilters}){
    const url = 'https://pokeapi.co/api/v2/type/';
    const [types, setTypes] = useState([]);
    useEffect(() => {
        if(types.length === 0){
            const fetchData = async () => {
                try {
                    const response = await fetch(url);
                    const data = await response.json();
                    setTypes(data.results);
                } catch (error) {
                    console.log(error.message);
                }
            };
            fetchData();
        }
    }, []);
    const typeOptions = types.map((type) => <option key={type.name}>{type.name}</option>);
    typeOptions.unshift(<option key='all'>All</option>);
    
    return (
        <div className="search-filters">
            <input type="text" value={textFilter} onChange={(e)=>updateTextFilter(e.target.value)}></input>
            <select value={typeFilter} onChange={(e)=>updateTypeFilter(e.target.value)}>{typeOptions}</select>
            <select value={typeFilter2} onChange={(e)=>updateTypeFilter2(e.target.value)}>{typeOptions}</select>
            <button onClick={clearFilters}>Clear All Filters</button>
        </div>
    );
}