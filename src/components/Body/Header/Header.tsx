import React from 'react';
import HeaderBcg from '../../../images/header-bcg.jpg';
import './header.scss'
function Header() {
    return (
        <header className='header'>
            <img className='header__image' src={HeaderBcg} alt='header-background' />
            <h1 className='header__title'>Estea bidrar till långsiktig samhällsutveckling</h1>
        </header>
    );
}

export default Header;