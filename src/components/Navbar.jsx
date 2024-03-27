import React from "react";
import {Outlet, NavLink} from 'react-router-dom'

function Navbar() {
  return (
  <>
  <ul>
    
    <li>
      <NavLink to="/search">get inspired</NavLink>
    </li>
    <li>
      <NavLink to="/mine-recipes">mine recipes</NavLink>
    </li>
    <li>
      <NavLink to="/favorites">favorites</NavLink>
    </li>
  </ul>
  <main>
    <Outlet /> 
  </main>

  </>);
}

export default Navbar;

// Navbar
// |SEARCH for recipe in the library|
// |SAVE mine recipe|
// |FAVORITES from both|