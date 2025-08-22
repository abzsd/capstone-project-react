import logo from "../assets/Logo.svg"
import React from "react";

const Header = () => {
    return (
        <header>
            <a href="/" aria-label="Little Lemon Home" className="brand">
                <img
                    src={logo}
                    alt="Little Lemon Logo"
                    width="180"
                    height="auto"
                />
            </a>
        </header>
    );
};

export default Header;