export default function PokeList({pokemonList}){

    let displayPoke = pokemonList.map((poke) => 
    <li class="card-item" key={poke.id}>
        <p>{poke.name}</p>
        <img src={poke.image}></img>
    </li>);

    return (
        <ul class="card-list">
            {displayPoke}
        </ul>
    );
}