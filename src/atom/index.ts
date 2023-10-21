import { atom } from "recoil";
import { pokemon_list_type } from "../types/pokemon";

export const pokemon_list_atom = atom<pokemon_list_type []>({
  key:"pokemon_list_atom",
  default:[]
})