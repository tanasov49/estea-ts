import React from 'react';
import ButtonLink from '../ButtonLink/ButtonLink';
import './ArticleText.scss';
interface IArticleText {
    backgroundColor: string,
    classArticle: string,
    widthBlock: string,
    textTitle: string,
    colorTextTitle: string
}
function ArticleText({backgroundColor, classArticle, widthBlock, textTitle, colorTextTitle}: IArticleText) {
    return (
        <article style={{ maxWidth: `${widthBlock}`, background: `${backgroundColor}` }} className={`article-text ${classArticle}`}>
            <p style={{ color: `${colorTextTitle}`}} className='article-text__title'>{textTitle}</p>
            <div className="article-text-link">
                <p className="article-text-link__text">Läs mer om oss</p>
                <ButtonLink classButton='button-link_article-text' />
            </div>
        </article>
    );
}

export default ArticleText;