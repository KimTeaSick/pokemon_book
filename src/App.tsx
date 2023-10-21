import { useCallback, useEffect } from 'react'
import './App.css'
import { get_pokemon_list_api } from './api/pokemon'
import SearchInput from './components/ui/SearchInput'
import { useRecoilState } from 'recoil'
import { pokemon_list_atom } from './atom'
import PokemonCard from './components/ui/PokemonCard'
import { pokemon_list_type } from './types/pokemon'



function App() {
  const [pokemon_list, set_pokemon_list] = useRecoilState<never [] | pokemon_list_type [] >(pokemon_list_atom)
  
  const filter_pokemon_mode = (array:pokemon_list_type[], condition:string): pokemon_list_type[] => {
    const return_value: pokemon_list_type[] = []
    const _array = array.slice()
    _array.map((value) => {
      if (!value.name.includes(condition)) {
        return_value.push(value)
      }
    })
    return return_value
  }
  const get_pokemon_list = useCallback(async()=>{
    const row_pokemon_list = await get_pokemon_list_api()
    const pokemon_list = filter_pokemon_mode(row_pokemon_list.results, '-')
    set_pokemon_list(pokemon_list)
  },[get_pokemon_list_api])

  useEffect(()=>{
    get_pokemon_list()
  },[get_pokemon_list])

  return (
    <>
      <p className="read-the-docs">
        pokemon book
      </p>
    <SearchInput />
      {pokemon_list.map((value, index)=>(
        <PokemonCard key={index} data={value} />
      ))}
    </>
  )
}

export default App
