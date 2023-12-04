const { http } = require('./plugins')

const getPokemonByName = async (name) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    return await http.get(url)
}




module.exports = {
    getPokemonByName
}