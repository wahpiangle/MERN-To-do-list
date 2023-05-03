import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

import Home from './pages/Home'
import RootLayout from './RootLayout'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App(){
  const { state } = useAuthContext();
  const { user } = state

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
        <Route index element={user ? <Home /> : <Navigate to ="/login"/>} />
        <Route path="/login" element={!user ? <Login/> : <Navigate to ="/"/>}/>
        <Route path='/signup' element={!user ? <Signup/> : <Navigate to ="/"/>}/>
      </Route>
    ))

  return (
    <RouterProvider router={router} />
  )
}

export default App
