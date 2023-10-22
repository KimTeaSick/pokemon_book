import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { get_species_api } from "../../api/pokemon";
import { pokemon_species_type } from "../../types/pokemon";

interface Props {
  name: string;
  url: string;
}

export const get_ko_name = (dict: any, info: string) => {
  const array = dict[`${info}`]
  const ko_name = array.map((value: pokemon_species_type) => {
    if (value.language.name === 'ko') return value.name
  })
  return ko_name
}

export const get_species = async (name: string) => {
  const info = await get_species_api(name)
  return info
}

export const setting_ko_name = async (name: string) => {
  const info = await get_species(name)
  const ko_name = get_ko_name(info, 'names')
  return ko_name
  // set_ko_name(ko_name)
}

const PokemonCard: FC<Props> = ({ name }) => {
  const [ko_name, set_ko_name] = useState("")


  useEffect(() => {
    setting_ko_name(name).then(res => set_ko_name(res))
  }, [])

  return (
    <Link to={`/detail/${name}`}>
      <p>{ko_name}</p>
    </Link>
  )
}

export default PokemonCard