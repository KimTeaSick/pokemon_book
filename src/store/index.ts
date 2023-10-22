import { selector, RecoilEnv, selectorFamily } from "recoil";

import { pokemon_list_type } from "../types/pokemon";
import * as api from "../api";

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = true

const filter_pokemon_mode = (array: pokemon_list_type[], condition: string): pokemon_list_type[] => {
  const return_value: pokemon_list_type[] = []
  const _array = array.slice()
  _array.map((value) => {
    if (!value.name.includes(condition)) {
      return_value.push(value)
    }
  })
  return return_value
}

export const pokemon_list_selector = selector<pokemon_list_type[]>({
  key: "pokemon_list_selector",
  get: async () => {
    const data = await api.get("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0")
    const pokemon_list = filter_pokemon_mode(data.results, '-')
    return pokemon_list
  }
})

// @ts-ignore
export const pokemon_detail_selector = selectorFamily<any>({
  key: 'pokemon_detail_selector',
  get:
    (pokemon_name: string) =>
      async () => {
        const data = await api.get(`https://pokeapi.co/api/v2/pokemon/${pokemon_name}`)
        const data_species = await api.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemon_name}`)
        const data_evolution = data_species.evolution_chain.url && await api.get(`${data_species.evolution_chain.url}`)
        return {
          name: data_species.name,
          height: data.height,
          weight: data.weight,
          evolution: data_evolution.chain.evolves_to[0].species.name,
          degenerate: data_species.evolves_from_species ? data_species.evolves_from_species.name : null
        }
      },
});
