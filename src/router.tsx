import { Route, createBrowserRouter,
  createRoutesFromElements } from "react-router-dom";
import PokemonDetail from "./pages/PokemonDetail";
import App from "./App";

export const router = createBrowserRouter(
  createRoutesFromElements(    
    <Route path="/" element={<App />} >
      <Route path="PokemonDetail/:id" element={<PokemonDetail />} />
    </Route>)
)