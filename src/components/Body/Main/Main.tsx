import React from 'react';
import './Main.scss';
import SectionEvents from '../../Sections/SectionEvents/SectionEvents';
import SectionEsteas from '../../Sections/SectionEsteas/SectionEsteas';
import AsideEstea from '../../UI/AsideEstea/AsideEstea';

function Main() {
    return (
        <main className='main'>
            <SectionEvents />
            <SectionEsteas />
            <AsideEstea />
        </main>
    );
}

export default Main;