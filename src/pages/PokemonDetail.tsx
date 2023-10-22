import { FC } from "react"
import { useParams } from "react-router-dom"
import { useRecoilValue } from "recoil"

import { pokemon_detail_selector } from "../store"
import "../App.css"

const PokemonDetail: FC = () => {
  const { id } = useParams<string>()
  const pokemon_detail = useRecoilValue(pokemon_detail_selector(id))

  return (
    <div className="detail_wrapper">
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon_detail.index}.png`} />
      <p>이름 : {pokemon_detail.name}</p>
      <p>키 : {pokemon_detail.height}</p>
      <p>무게 : {pokemon_detail.weight}</p>
      <div className="evolution_info">
        <div>
          <p>진화 정보</p>
        </div>
        <div>
          <p>이전 : {pokemon_detail.degenerate}</p>
          <p>다음 : {pokemon_detail.evolution}</p>
        </div>
      </div>
    </div>
  )
}

export default PokemonDetail