import { useRecoilValue } from 'recoil'

import PokemonCard from '../components/ui/PokemonCard'
import SearchInput from '../components/ui/SearchInput'
import { pokemon_list_selector } from '../store'



const Home = () => {
  const pokemon_list = useRecoilValue(pokemon_list_selector)

  return (
    <>
      <SearchInput />
      {pokemon_list.map((value, index) => <PokemonCard key={index} {...value} />
      )}
    </>
  )
}

export default Home