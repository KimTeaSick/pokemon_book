import { get } from "."

export const get_pokemon_list_api = async() => {
    const pokemon_list = await get("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0")
    return pokemon_list
}

export const get_species_api = async(pokemon_name: string) => {
    const pokemon_species = await get(`https://pokeapi.co/api/v2/pokemon-species/${pokemon_name}`)
    return pokemon_species
}