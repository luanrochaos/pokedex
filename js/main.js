const pokemonList = document.querySelector(".pokemon-list")

const offset = 0
const limit = 20
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

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

fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokeList) => {
        for(let i = 0; i < pokeList.length; i++) {
            const pokemon = pokeList[i];
            pokemonList.innerHTML += pokemonToLi(pokemon)
        }
    })
    .catch((error) => console.error(error))
