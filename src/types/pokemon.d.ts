export type pokemon_list_type = {
  name: string,
  url: stinrg
}

export type pokemon_species_type = {
  language: {
    name: string
    url: string
  },
  name: string
}
export type pokemon_detail_type = {
  index: number
  name: string
  height: number
  weight: number
  evolution: string | null
  degenerate: string | null
}

export type pokemon_evolution_api_info = {
  baby_trigger_item: null
  chain: any
  id: number
}
