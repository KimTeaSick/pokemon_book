import { RecoilEnv, selectorFamily } from "recoil";

import { pokemon_detail_type, pokemon_list_type } from "../types/pokemon";
import * as api from "../api";
import { setting_ko_name } from "../util/setting_ko_name";
import { get_degenerate_info, get_evolution_info } from "../util/get_evolution_info";

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

export const pokemon_list_selector = selectorFamily<pokemon_list_type[], number>({
  key: "pokemon_list_selector",
  get: () => async () => {
    const data = await api.get(`https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0`)
    const pokemon_list = filter_pokemon_mode(data.results, '-')
    return pokemon_list
  }
})

// @ts-ignore
export const pokemon_detail_selector = selectorFamily<pokemon_detail_type>({
  key: 'pokemon_detail_selector',
  get:
    (pokemon_name: string) =>
      async () => {
        const data = await api.get(`https://pokeapi.co/api/v2/pokemon/${pokemon_name}`)
        const data_species = await api.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemon_name}`)
        const data_evolution = await api.get(`${data_species.evolution_chain.url}`)
        const evolution_name = get_evolution_info(data_evolution, data_species.name)
        const degenerate_name = get_degenerate_info(data_species)
        return {
          index: data_species.id,
          name: await setting_ko_name(data_species.name),
          height: data.height,
          weight: data.weight,
          evolution: evolution_name ? await setting_ko_name(evolution_name) : "없음",
          degenerate: degenerate_name ? await setting_ko_name(degenerate_name) : "없음"
        }
      },
});
