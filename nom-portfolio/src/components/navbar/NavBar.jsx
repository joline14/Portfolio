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
        <a href="#about"> 
            A propos
        </a>
      </li>
      <li className="header_link">
        <a href="#competence">
            Compétences
        </a>
      </li>
      <li className="header_link">
        <a href="#projets">
            Projets
        </a>
      </li>
      <li className="header_link">
        <a href="#contact">
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