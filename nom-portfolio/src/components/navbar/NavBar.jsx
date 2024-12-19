import React from "react";

function NavBar({ isMenuOpen }) {
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
                <a href="#services">Services</a>
            </li>
            <li className="header_link">
                <a href="/assets/CV_joline_sinci.pdf"
                    target="_blank"
                    rel="noopener noreferrer">Mon CV</a>
            </li>
        </ul>
    );
};

export default NavBar;
