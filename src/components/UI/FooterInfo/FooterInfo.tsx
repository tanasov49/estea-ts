import React from 'react';
import './FooterInfo.scss';
import LogoPng from '../../../images/logo.png'
import { menuFooter, socialLinks } from '../../../data/data';
function FooterInfo() {
    return (
        <div className='footer-info'>
            <img className='footer-info__image' src={LogoPng} alt='logo' />
            <ul className="footer-menu">
                {menuFooter.map((item, key) => 
                <li key={key} className='footer-menu-item footer-link'>
                    <a className='footer-link__link' href={item.link}>{item.title}</a>
                </li>
                )}
            </ul>
            <ul className="footer-socials">
                {socialLinks.map((item, key) =>
                <li key={key} className='footer-social-item footer-link'>
                    <a className='footer-social-item__link footer-link__link' href={item.link}>{item.title}</a>
                </li>
                )}
            </ul>
            <ul className="footer-address">
                <li className="footer-address-item footer-link">
                    <a href="https://goo.gl/maps/GypaervNiyhKxBUL9" className='footer-address-item__link footer-link__link footer-address-item__link_adress'>
                        <p>Estea AB</p>
                        <p>Box 7135</p>
                        <p>103 87</p>
                        <p>Stockholm</p>
                    </a>
                    <a href="tel: 08-679 05 00" className='footer-address-item__link footer-link__link footer-address-item__link_phone'>
                        <p>08-679 05 00</p>
                    </a>
                    <a href="mailto: info@estea.se" className='footer-address-item__link footer-link__link footer-address-item__link_email'>
                        <p>info@estea.se</p>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default FooterInfo;