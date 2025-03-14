import React from "react";
import "../stylings/Navbar.css"; 

function NavBar() {
  return (
    <div id="navbar-container" className="sidenav">
      <a href="#" id="about">About</a>
      <a href="#" id="blog">Blog</a>
      <a href="#" id="projects">Projects</a>
      <a href="#" id="contact">Contact</a>
    </div>
  );
}

export default NavBar;
