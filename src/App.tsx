import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'

import './App.css'
import { router } from './router.tsx'


/***
 * @TODO selector 적용
 */

function App() {
  return (
    <Suspense>
      <p className="read-the-docs">
        pokemon book
      </p>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default App
