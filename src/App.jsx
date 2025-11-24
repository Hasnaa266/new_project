import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Books from "./pages/Books"
import Nots from "./pages/Nots"
import Products from "./pages/Products"
import Layout from "./component/Layout"
import React from "react"



const router = createBrowserRouter(createRoutesFromElements(
   < Route path="/" element={<Layout />}>
    <Route  index element={<Home />} />
    <Route path="/Books" element={<Books/>} />
    <Route path="/Products" element={<Products/>} />
    <Route path="/Nots" element={<Nots />} />
  </Route>
))

function App() {

  return (
    <>
   
     <RouterProvider router={router} />
    </>
  )
}

export default App
