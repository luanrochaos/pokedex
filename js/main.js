const pokemonList = document.querySelector(".pokemon-list")

const offset = 0
const limit = 20
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

fetch(url)
    .then((response) => response.json())
    .then((jasonBody) => console.log(jasonBody))
    .catch((error) => console.error(error))

for(i = 0; i < 10; i++){
    pokemonList.innerHTML += `<li class="pokemon">
        <span class="number"></span>
        <span class="name">Bulbasaur</span>
    
        <div class="detail">
            <ol class="types">
                <li class="type">Grass</li>
                <li class="type">Poison</li>
            </ol>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="Bulbasaur">
        </div>
        </li>
    `
    
}