import React from 'react'

import style from './About.module.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
export default function About() {
  return (


    <>
    <Navbar/>
     <div className={`${style.test} vh-100  ` }>
      <h1>About Component</h1>
      <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
    </div>
    <Footer/>
    
    </>
   
  )
}
