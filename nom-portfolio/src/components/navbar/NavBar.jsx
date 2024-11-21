import React from "react";

const NavBar = () => {
  return (
    <ul className="header_links">
      <li className="header_link">
        <a href="#">
            Accueil
        </a>
      </li>
      <li className="header_link">
        <a href="#"> 
            A propos
        </a>
      </li>
      <li className="header_link">
        <a href="#">
            Services
        </a>
      </li>
      <li className="header_link">
        <a href="#">
            Projets
        </a>
      </li>
      <li className="header_link">
        <a href="#">
             Contact
        </a>
      </li>
      <li className="header_link">
        <a href="#">
             Mon CV
        </a>
      </li>
    </ul>
  );
};

export default NavBar;