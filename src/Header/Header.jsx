import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (id) => {
        if (location.pathname !== "/") {
            window.location.href = `/#${id}`;
            return;
        }

        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            setIsMenuOpen(false); // 메뉴 클릭 시 닫기
        } else {
            console.error(`Element with id "${id}" not found.`);
        }
    };

    return (
        <header className="header">
            <nav>
                <div className="logo">
                    <span
                        className="logo-text"
                        onClick={() => scrollToSection("home")}
                    >
                        Leo Jeong
                    </span>
                </div>
                <div
                    className="nav-toggle"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
                    <li onClick={() => scrollToSection("home")}>Home</li>
                    <li onClick={() => scrollToSection("about")}>About</li>
                    <li onClick={() => scrollToSection("skills")}>Skills</li>
                    <li onClick={() => scrollToSection("projects")}>
                        Projects
                    </li>
                    <li onClick={() => scrollToSection("contact")}>Contact</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
