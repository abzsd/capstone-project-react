import logo from "../assets/Logo.svg"
import Nav from './Nav';
import React from "react";

const Header = () => {
    return (
        <header className="site-header">
            <div className="header-inner">
            <a href="/" aria-label="Little Lemon Home" className="brand">
                <img
                    src={logo}
                    alt="Little Lemon Logo"
                    width="180"
                    height="auto"
                />
            </a>
            <Nav />
            </div>
        </header>
    );
};

export default Header;