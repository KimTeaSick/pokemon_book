import { FC } from "react"
import { useParams } from "react-router-dom"
import { useRecoilValue } from "recoil"

import { pokemon_detail_selector } from "../store"

const PokemonDetail: FC = () => {
  const { id } = useParams<string>()
  const pokemon_detail = useRecoilValue(pokemon_detail_selector(id))


  // console.log("### pokemons_detail", id);
  console.log("### pokemons_detail", pokemon_detail);
  console.log("### RENDER!")

  return (
    <div>
      {id}
      {pokemon_detail.name}
      {pokemon_detail.height}
      {pokemon_detail.weight}
      {pokemon_detail.name}
    </div>
  )
}

export default PokemonDetail