import React from 'react';
import './FooterInfo.scss';
import LogoPng from '../../../images/logo.png'
function FooterInfo() {
    return (
        <div className='footer-info'>
            <img className='footer-info__image' src={LogoPng} alt='logo' />
        </div>
    );
}

export default FooterInfo;