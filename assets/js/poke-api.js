const pokeApi = {};

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
}

pokeApi.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    return fetch(url)
        .then((response) => response.json())
        .then((jasonBody) => jasonBody.results)
        .then((pokemons)=> pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequest)=> Promise.all(detailRequest))
        .then((pokemonsDetails) => {
            
        })
}