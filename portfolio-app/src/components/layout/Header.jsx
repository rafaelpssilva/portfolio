import React from "react";

import "./Header.css";

function Header() {
    const [menuVisible, setMenuVisible] = React.useState(false);

    return (
        <header className="header">
            <nav>
                <a href="/" className="logo">
                    R
                </a>

                <ul className="sidenav-list">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="#sobre">Sobre</a>
                    </li>
                    <li>
                        <a href="#projetos">Projetos</a>
                    </li>
                    <li className="cv">
                        <a href="/">Resumo</a>
                    </li>
                </ul>

                <button href="/" className="menu-mobile">
                    Menu
                </button>
            </nav>
        </header>
    );
}

export default Header;
