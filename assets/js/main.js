
// Função que define o padrão do elemento (li) a ser incluído na Lista OL do index

function convertPokemonToLi(pokemon) {
    console.log(pokemon)
    return `
    <li class="pokemon ${pokemon.type}" onclick = "openDetails ('${pokemon.name}','${pokemon.type}')" >
        <span class="number">#${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>
            
        <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}    
                </ol>

                <img src= ${pokemon.photo}
                    alt="${pokemon.name}">
            </div>
    </li>
    `
}

// constante que recebe o elemento OL do index

const pokemonOl = document.getElementById('pokemonOl')
const loadMoreButton = document.getElementById('loadMoreButton')
var offset = 0
const limit = 10

function loadPokemonItens (offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join ('')
        pokemonOl.innerHTML += newHtml
    })   
}

loadPokemonItens (offset, limit)

loadMoreButton.addEventListener ('click', ()=> {
    offset += limit
    loadPokemonItens (offset, limit)
})

function openDetails (id) {
    console.log(id)
    document.location.href = `${document.location.href.split("/")[0]}/details.html?id=${id}`
}
 
//  const newList = pokemons.map(convertPokemonToLi (pokemon))

//  const newHtml = newList.join ('')
//  pokemonOl.innerHTML += newHtml


    // const listItens = []
    //     for (let i = 0; i < pokemonList.length; i++) {
    //         const pokemon = pokemonList[i]
    //     listItens.push(convertPokemonToLi(pokemon))    
    
    //     }
    // })



    // NOVA PÁGINA


   
