import React, { useState } from "react";
import Logo from "../logo/Logo";
import NavBar from "../navbar/NavBar";
import "./header.scss";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <Logo />
            <div className={`hamburger ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
                <span className="line1"></span>
                <span className="line2"></span>
                <span className="line3"></span>
            </div>
            <NavBar isMenuOpen={isMenuOpen} />
        </header>
    );
}

export default Header;
