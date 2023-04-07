import React from 'react';
import './AsideHeader.scss'
import ArticleText from '../ArticleText/ArticleText';

function AsideHeader() {
    return (
        <aside className='aside-header'>
            <ArticleText 
                backgroundColor='#213F39'
                classArticle='article-text_aside-header'
                widthBlock='900px'
                colorTextTitle='#FFFFFF'
                textTitle='Vi skapar värde för samhället och våra investerare genom att vi utvecklar och investerar i kommersiella fastigheter och social infrastruktur'
            />
        </aside>
    );
}

export default AsideHeader;