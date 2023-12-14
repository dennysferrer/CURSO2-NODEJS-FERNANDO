
import { http } from "./plugins";


export const getPokemonByName = async (name: string):Promise<string> => {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    return await http.get(url)
}



