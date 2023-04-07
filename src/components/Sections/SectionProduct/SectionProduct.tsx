import React from 'react';
import Product from '../../UI/Product/Product';
import {productEstea} from '../../../data/data';
import ImageProduct from '../../../images/product.jpg';
function SectionProduct() {
    return (
        <section className='section-product'>
            <Product imageSrc={ImageProduct} imageAlt='estea' product={productEstea} classProduct='product_section-product' />
        </section>
    );
}

export default SectionProduct;