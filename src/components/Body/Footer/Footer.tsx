import React from 'react';
import './Footer.scss';
import AsideForm from '../../UI/AsideForm/AsideForm';
import FooterInfo from '../../UI/FooterInfo/FooterInfo';

function Footer() {
    return (
        <footer className='footer'>
            <AsideForm />
            <FooterInfo />
            <p className="footer__description">Copyright © 2021 Estea AB. All rights reserved. Om personuppgifter Om visselblåsning. Synpunkter och klagomål.</p>
        </footer>
    );
}

export default Footer;