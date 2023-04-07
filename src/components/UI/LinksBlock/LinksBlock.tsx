import React from 'react';
import {linksAbout} from '../../../data/data';
import './LinksBlock.scss';
import FrameSvg from '../../../images/svg/frame-animate.svg'
function LinksBlock() {
    return (
        <ul className='links-block'>
            {linksAbout.map((item, key) => 
            <li key={key} className='link-block'>
                <a className='link-block__link' href={item.link}><FrameSvg/></a>
                <h3 className='link-block__title'>{item.title}</h3>
            </li>
            )}
        </ul>
    );
}

export default LinksBlock;