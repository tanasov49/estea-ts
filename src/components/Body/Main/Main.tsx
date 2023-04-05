import React from 'react';
import SectionEvents from '../../Sections/SectionEvents/SectionEvents';
import SectionEsteas from '../../Sections/SectionEsteas/SectionEsteas';

function Main() {
    return (
        <main className='main'>
            <SectionEvents />
            <SectionEsteas />
        </main>
    );
}

export default Main;