const pokemonList = document.querySelector(".pokemon-list")

function pokemonToLi(pokemon) {
    return `<li class="pokemon">
        <span class="number"></span>
        <span class="name">${pokemon.name}</span>
    
        <div class="detail">
            <ol class="types">
                <li class="type">Grass</li>
                <li class="type">Poison</li>
            </ol>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">
        </div>
        </li>
    `
}

pokeApi.getPokemon().then((pokemon = []) => {
    pokemonList.innerHTML += pokemon.map(pokemonToLi).join('')
})