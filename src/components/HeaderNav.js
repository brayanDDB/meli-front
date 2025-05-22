import React from 'react'
import { NavLink } from "react-router-dom";

function HeaderNav() {
  return (
    <header className='header'>
        <h1>MELI</h1>
        <nav>
            <ul>
                <li>
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/product">Product</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default HeaderNav