import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { setting_ko_name } from "../../util/setting_ko_name";
import { get_pokemon_index } from "../../util/get_pokemon_index";

interface Props {
  name: string;
  url: string;
}

const PokemonCard: FC<Props> = ({ name, url }) => {
  const [ko_name, set_ko_name] = useState("");
  const index = get_pokemon_index(url);

  useEffect(() => {
    setting_ko_name(name).then((res) => set_ko_name(res));
  }, []);

  return (
    <Link to={`/detail/${name}`}>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`}
      />
      <p>
        {index}. {ko_name}
      </p>
    </Link>
  );
};

export default PokemonCard;
