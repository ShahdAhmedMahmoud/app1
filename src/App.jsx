// Main Component
// Parent Component 
import React from 'react';

import Footer from "./Components/Footer/Footer.jsx"; // Importing the Footer component
import About from './Components/About/About.jsx';

import Home from './Components/Home/Home.jsx';
import Navbar from './Components/Navbar/Navbar.jsx'; // Importing the Navbar component
import Contact from './Components/Contact/Contact.jsx';
import Portfolio from './Components/Portfolio/Portfolio.jsx'; // Importing the Portfolio component
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom';





const router=createHashRouter([
    {path:'',element:<Home/>},
    {path:'home',element:<Home/>},
    {path:'about', element:<About/>},
    {path:'Footer', element:<Footer/>},
    {path:'Navbar',element:<Navbar/>},
    {path:'Contact',element:<Contact/>},
    {path:'Portfolio',element:<Portfolio/>},
    {path:'*',element:<div className=' vh-100 f-flex'>
      <h1></h1>
    </div>}

]);
export default function App() {
/*
react-router-dom => Component
RouterProvider => provider = > used to provide all its children with data using its props

*/
  
  return (
    <>
    <RouterProvider router={router} />

      {/* <Navbar /> */}
      {/* <Contact />  */}
      {/* <Portfolio />  */}
      {/* <Home /> 
      <Footer /> */}
      {/* <Contact/> */}
      {/* <About />   */}
    </>
  )
}
