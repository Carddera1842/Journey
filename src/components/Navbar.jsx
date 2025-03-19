import React from "react";
import { Link } from "react-router-dom";
import "../stylings/Navbar.css"; 

function NavBar() {
  return (
    <div id="navbar-container" className="sidenav">
      <Link to="/" id="about">Home</Link>
      <Link to="/login" id="blog">Login</Link>
      <Link to="/map" id="projects">Map</Link>
    </div>
  );
}

export default NavBar;
