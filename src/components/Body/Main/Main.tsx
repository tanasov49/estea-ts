import React from 'react';
import './Main.scss';
import SectionEvents from '../../Sections/SectionEvents/SectionEvents';
import SectionEsteas from '../../Sections/SectionEsteas/SectionEsteas';
import AsideEstea from '../../UI/AsideEstea/AsideEstea';
import SectionProduct from '../../Sections/SectionProduct/SectionProduct';
import SectionAbout from '../../Sections/SectionAbout/SectionAbout';

function Main() {
    return (
        <main className='main'>
            <SectionEvents />
            <SectionEsteas />
            <AsideEstea />
            <SectionProduct />
            <SectionAbout />
        </main>
    );
}

export default Main;