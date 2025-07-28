import React from 'react'
import { Link } from 'react-router-dom'


//react-router-dom
//Component => Link


export default function Navbar() {
  return (
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Start Framework</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/about">about</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Portfolio">portfolio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Contact">contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
   
  )
}
