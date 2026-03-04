import { Applayout } from '../layout/jsx/applayout'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import './App.css'

import {createBrowserRouter , RouterProvider} from 'react-router-dom'
function App() {
 const router = createBrowserRouter([
  {
    path:'/',
    element:<Applayout/>,
  
  }
 ])

  return (
    <>
   <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
