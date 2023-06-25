import React,{useState} from "react";
import "../styles/header.css"
import hamburger from "../images/hamburger.png";
import close from "../images/close.png";

const Header = ({ setMenuOpen, menuOpen }) => {
    const [image,setImage]=useState(true);
    function changeIcon(){
        setMenuOpen(!menuOpen);
        setImage(!image);
    }
return (
    <>
    <nav>
        <NavContent setMenuOpen={setMenuOpen} />
    </nav>

    <button className="navBtn" onClick={changeIcon}>
        <img src={image==true?hamburger:close} alt="phoneicon"/>
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
    <h2>Rajan.</h2>
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
    </div>
    <a href="https://github.com/gcrajan/file/blob/main/RajanGC%5BCV%5D.pdf">
    <button>My CV</button>
    </a>
</>
);

export default Header;
