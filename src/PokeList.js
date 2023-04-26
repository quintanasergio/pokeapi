export default function PokeList({pokemonList}){

    let displayPoke = pokemonList.map((poke) => 
    <li className="card-item" key={poke.id}>
        <p>{poke.name}</p>
        <img src={poke.image}></img>
    </li>);

    return (
        <ul className="card-list">
            {displayPoke}
        </ul>
    );
}