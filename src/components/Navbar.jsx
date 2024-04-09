import React from "react";
import {Outlet, NavLink} from 'react-router-dom'

function Navbar() {
  return (
  <>
  <div className="navbar-container">
    <div className="navbar-logo-container">
      <div> <NavLink className="logo" to="/home"> 💚 FlavorMatch 💚 </NavLink> </div>
    </div>
    <div className="navbar-links-container">
      <div className="green-btn"> <NavLink to="/search">Flavor Profiles</NavLink> </div>
      <div className="green-btn"> <NavLink to="/mine-recipes"> Recipe Diary </NavLink>  </div>
    </div>
  </div>

  <main>
    <Outlet /> 
  </main>
  </>
  );
}

export default Navbar;

