import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import RootLayout from './RootLayout'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App(){

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Route>
    ))

  return (
    <RouterProvider router={router} />
  )
}

export default App
