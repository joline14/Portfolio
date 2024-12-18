import React from "react";

function NavBar ({ isMenuOpen }){
    return (
        <ul className={`header_links ${isMenuOpen ? "open" : ""}`}>
            <li className="header_link">
                <a href="#">Accueil</a>
            </li>
            <li className="header_link">
                <a href="#about">À propos</a>
            </li>
            <li className="header_link">
                <a href="#competence">Compétences</a>
            </li>
            <li className="header_link">
                <a href="#projets">Projets</a>
            </li>
            <li className="header_link">
                <a href="#contact">Service</a>
            </li>
            <li className="header_link">
                <a href="#">Mon CV</a>
            </li>
        </ul>
    );
};

export default NavBar;
