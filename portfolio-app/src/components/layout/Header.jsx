import React from "react";

import "./Header.css";

function Header() {
    const [menuVisible, setMenuVisible] = React.useState(false);

    function setDisplayMenu() {
        setMenuVisible(false);
    }

    return (
        <header className="header">
            <nav>
                <a href="#home" className="logo">
                    R
                </a>

                <ul className="sidenav-list">
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#sobre">Sobre</a>
                    </li>
                    <li>
                        <a href="#projetos">Projetos</a>
                    </li>
                    <li className="cv">
                        <a href="https://drive.google.com/file/d/1QuxWqArOoCz9WXMADwUQyj4p0r10bb_v/view">
                            Resumo
                        </a>
                    </li>
                </ul>

                {menuVisible && (
                    <ul className="sidenav-list-mobile">
                        <li>
                            <a href="#home" onClick={setDisplayMenu}>
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#sobre" onClick={setDisplayMenu}>
                                Sobre
                            </a>
                        </li>
                        <li>
                            <a href="#projetos" onClick={setDisplayMenu}>
                                Projetos
                            </a>
                        </li>
                        <li className="cv">
                            <a
                                href="https://drive.google.com/file/d/1QuxWqArOoCz9WXMADwUQyj4p0r10bb_v/view"
                                onClick={setDisplayMenu}
                            >
                                Resumo
                            </a>
                        </li>
                    </ul>
                )}

                <button
                    href="/"
                    className="menu-mobile"
                    onClick={() => setMenuVisible(!menuVisible)}
                >
                    Menu
                </button>
            </nav>
        </header>
    );
}

export default Header;
