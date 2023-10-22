import { RouteObject, createHashRouter } from "react-router-dom";
import { lazy } from "react";

import PokemonDetail from "./pages/PokemonDetail";
// import Home from "./pages/Home";

const Home = lazy(() => import('./pages/Home'))

const rootRotuer: RouteObject[] = [{ path: '/', element: <Home /> }, { path: '/detail/:id', element: <PokemonDetail /> }]

/**
 * @TODO Lazy loading
 * @TODO 404 Page
 */
export const router = createHashRouter(rootRotuer)