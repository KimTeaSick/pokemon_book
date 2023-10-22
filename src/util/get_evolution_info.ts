import { pokemon_evolution_api_info } from "../types/pokemon"

export const get_evolution_info = (data_evolution: pokemon_evolution_api_info, pokemon_name: string) => {
  if (data_evolution.chain.evolves_to.length === 0) return ""
  const row_pokemon = data_evolution.chain.species.name
  const middle_evolution = data_evolution.chain.evolves_to[0].species.name
  if (pokemon_name === row_pokemon) return middle_evolution
  if (data_evolution.chain.evolves_to[0].evolves_to.length === 0) return ""
  const last_evolution = data_evolution.chain.evolves_to[0].evolves_to[0].species.name
  if (pokemon_name === middle_evolution) return last_evolution
  if (pokemon_name === last_evolution) return null
}

export const get_degenerate_info = (data_species: any) => {
  let degenerate_name = ""
  data_species.evolves_from_species !== null
    ? degenerate_name = data_species.evolves_from_species.name
    : degenerate_name = ""
  return degenerate_name
}