import React from 'react';
import './Navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi'

function Navbar(props) {
    return (
        <header className='navbar'>
            <nav className='navbar__top'>
                <div><i className='burgerMenu' onClick={(e) => props.drawerClickHandler(e)}><GiHamburgerMenu/></i></div>
                <div className='navbar__logo'><a href='/'>LOGO</a></div>
                <div className='spacer' />
                <div className='navbar__items'>
                    <ul>
                        <li><a href='/details'>Learn More</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
