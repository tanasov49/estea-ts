import React from 'react';
import './AsideHeader.scss'
import ButtonLink from '../ButtonLink/ButtonLink';
function AsideHeader() {
    return (
        <aside className='aside-header'>
            <h2 className='aside-header__title'>Vi skapar värde för samhället och våra investerare genom att vi utvecklar och investerar i kommersiella fastigheter och social infrastruktur</h2>
            <div className="aside-header-link">
                <p className="aside-header-link__text">Läs mer om oss</p>
                <ButtonLink classButton='button-link_aside-header'  />
            </div>
        </aside>
    );
}

export default AsideHeader;