import React from 'react';
import './SectionEsteas.scss'
import EsteaImg from '../../../images/estea-image.png'
import ButtonLink from '../../UI/ButtonLink/ButtonLink';
function SectionEsteas() {
    return (
        <section className='section-esteas'>
            <div className="image-estea">
                <img className='image-estea__image' src={EsteaImg} alt='estea-image' />
                <p className='image-estea__subtitle'>Sedumtak fungerar isolerande och skyddar bland annat taket mot UV-strålar. Det fångar upp delar av det sura regn som annars skulle hamna i våra dagbrunnar och slutligen i våra sjöar. Dessutom är det vackert att se på.</p>
            </div>
            <div className="description-estea">
                <h2 className="description-estea__title">Esteas fastighetsfonder</h2>
                <p className="description-estea__subtitle">Estea erbjuder möjligheten att investera i fastigheter genom våra fonder</p>
            </div>
            <div className="estea-link">
                <ButtonLink classButton='button-link_estea-link' />
                <p className="estea-link__subtitle">Läs mer om våra fonder</p>
            </div>
        </section>
    );
}

export default SectionEsteas;