import { useRecoilValue } from 'recoil'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import PokemonCard from '../components/ui/PokemonCard'
import SearchSection from '../components/ui/SearchSection'
import { pokemon_list_selector } from '../store'



const Home = () => {
  const navigate = useNavigate()
  const [num, setnum] = useState(20)
  const pokemon_list = useRecoilValue(pokemon_list_selector(num))

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight) {
      setnum(num + 20)
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const search_event = (value: string): void => {
    navigate(`/detail/${value}`)
  }

  return (
    <>
      <SearchSection event={search_event} />
      {pokemon_list.map((value, index) => {
        if (index <= num)
          return <PokemonCard key={index} {...value} />
      }
      )}
    </>
  )
}

export default Home