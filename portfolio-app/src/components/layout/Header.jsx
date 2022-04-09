import React from 'react'
import displayMenu from './menu'

// import { FiMenu } from "react-icons/fi";


import './Header.css'

function Header() {

    return (
        <header className="header">
            <nav>
                <a href="/" className="logo">
                    R
                </a>

                <ul className="sidenav-list">
                    <li><a href="/">Home</a></li>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#projetos">Projetos</a></li>
                    <li className='cv'><a href="/">Resumo</a></li>
                </ul>

                <a href="/" className='menu-mobile'>
                    {/* <FiMenu /> */}
                </a>
            </nav>
        </header>
    )
}

export default Header 