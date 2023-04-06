import React from 'react';
import Product from '../../UI/Product/Product';
import {productEstea} from '../../../data/data';
import ImageProduct from '../../../images/product.jpg';
function SectionAbout() {
    return (
        <section className='section-about'>
            <Product imageSrc={ImageProduct} imageAlt='estea' product={productEstea} classProduct='product_section-about' />
        </section>
    );
}

export default SectionAbout;