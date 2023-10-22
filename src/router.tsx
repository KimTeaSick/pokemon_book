import { RouteObject, createHashRouter } from "react-router-dom";
import { lazy } from "react";

const Home = lazy(() => import('./pages/Home'))
const PokemonDetail = lazy(() => import('./pages/PokemonDetail'))

const rootRotuer: RouteObject[] = [{ path: '/', element: <Home /> }, { path: '/detail/:id', element: <PokemonDetail /> }]

/**
 * @TODO Lazy loading
 * @TODO 404 Page
 */

export const router = createHashRouter(rootRotuer)