import { FC, useEffect, useState } from "react";
import { get_species_api } from "../../api/pokemon";
import { pokemon_species_type } from "../../types/pokemon";

interface Props {
  data: {name: string, url:string}
}

const PokemonCard:FC<Props> = ({data}) => {
  const [name, set_name]=useState("")

  const get_ko_name = (dict: any, info:string) => {
    const array = dict[`${info}`]
    const ko_name = array.map((value: pokemon_species_type)=>{
      if (value.language.name === 'ko') return value.name
    })
    return ko_name
  }

  const get_species = async(name:string)=> {
    const info = await get_species_api(name)
    return info
  }

  const set_ko_name = async () => {
    const info = await get_species(data.name)
    const ko_name = get_ko_name(info, 'names')
    set_name(ko_name)
  }

  useEffect(()=>{
    set_ko_name()
  },[])
  
  return (
    <p>{name}</p>
  )
}

export default PokemonCard