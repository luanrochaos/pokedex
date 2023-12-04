const pokemonList = document.getElementById("pokemon-list")
const loadMoreBtn = document.getElementById("loadMoreBtn")
const limit = 24
let offset = 0


function loadPokemonItens(limit, offset) {
    pokeApi.getPokemon(offset, limit).then((pokemon = []) => {
        const newHtml = pokemon.map((pokemon) =>
        `<li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>   
            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
                <img src="${pokemon.img}" alt="${pokemon.name}">
            </div>
        </li> `).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(limit, offset)

loadMoreBtn.addEventListener('click', () => {
    offset += limit
    loadPokemonItens(limit, offset)
})