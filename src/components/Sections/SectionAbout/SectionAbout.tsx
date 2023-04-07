import React from 'react';
import './SectionAbout.scss'
import LinksBlock from '../../UI/LinksBlock/LinksBlock';
import ArticleText from '../../UI/ArticleText/ArticleText';
import MapleImage from '../../../images/maple-image.jpg'
function SectionAbout() {
    return (
        <section className='section-about'>
            <LinksBlock />
            <div className="section-about-text">
                <ArticleText 
                    backgroundColor='#FFFFFF' 
                    classArticle='article-text_section-about-text'
                    widthBlock='600px'
                    colorTextTitle='#000000'
                    textTitle='För att få träd att växa högt och brett krävs en näringsrik jordmån. På samma sätt är det med fastighetsinvesteringar. Vi har all kunskap som krävs för att få dina investeringar att skjuta iväg som ett skott för att sedan på lång sikt växa stabilt.'
                />
                <img className='section-about-text__image' src={MapleImage} alt='maple' />
            </div>
        </section>
    );
}

export default SectionAbout;