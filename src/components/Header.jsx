import React from "react";
import "../styles/header.css"
import hamburger from "../images/hamburger.png";
import close from "../images/close.png";

const Header = ({ setMenuOpen, menuOpen }) => {

return (
    <>
    <nav>
        <NavContent setMenuOpen={setMenuOpen} />
    </nav>

    <button className="navBtn" onClick={() => setMenuOpen(!menuOpen)}>
        <img src={menuOpen===false?hamburger:close} alt="phoneicon"/>
    </button>
    </>
);
};

export const HeaderPhone = ({ menuOpen, setMenuOpen }) => {
return (
    <div className={`navPhone ${menuOpen ? "navPhoneComes" : ""}`}>
    <NavContent setMenuOpen={setMenuOpen} />
    </div>
);
};

const NavContent = ({ setMenuOpen }) => (
<>
    <a href="#home" style={{ textDecoration: "none", color:"black" }}>
        <h1>Rajan.</h1>
    </a>
    <div>
    <a onClick={() => setMenuOpen(false)} href="#home">
        Home
    </a>
    <a onClick={() => setMenuOpen(false)} href="#skills">
        Skills
    </a>
    <a onClick={() => setMenuOpen(false)} href="#projects">
        Project
    </a>
    <a onClick={() => setMenuOpen(false)} href="#contact">
        Contact
    </a>
    </div><a href="https://gcrajan.netlify.app/" target="_blank" rel="noreferrer">
    <button>My CV</button>
    </a>
    
</>
);

export default Header;
