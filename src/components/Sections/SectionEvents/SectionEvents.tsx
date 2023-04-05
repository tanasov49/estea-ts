import React from 'react';
import './SectionEvents.scss'
import { events } from '../../../data/data';
import FrameSvg from '../../../images/svg/frame.svg';
function SectionEvents() {
    return (
        <section className='section-events'>
            <ul className="events">
                {events.map((item, key) => 
                <li key={key} className='event'>
                    <h3 className='event__title'>{item.title}</h3>
                    <span className='event__date'>{item.date}</span>
                    <p className='event__subtitle'>{item.subtitle}</p>
                    <a className='event__link' href={item.link}><FrameSvg /></a>
                    <p className="event__place">{item.place}</p>
                </li>
                )}
            </ul>
        </section>
    );
}

export default SectionEvents;