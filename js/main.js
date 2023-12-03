const pokemonList = document.querySelector(".pokemon-list")

function convertPokemonToLi(pokemon) {
    return `<li class="pokemon">
        <span class="number">#${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>   
        <div class="detail">
            <ol class="types">
                ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join('')}
            </ol>
            <img src="${pokemon.img}" alt="${pokemon.name}">
        </div>
        </li>
    `
}

pokeApi.getPokemon().then((pokemon = []) => {
    const newHtml = pokemon.map(convertPokemonToLi).join('')
    pokemonList.innerHTML = newHtml
})