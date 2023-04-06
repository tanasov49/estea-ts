import React from 'react';
import './Product.scss'
import { IProduct } from '../../../interfaces/interfaces';
interface IValuesProduct {
    imageSrc: string,
    imageAlt: string,
    product: IProduct,
    classProduct: string
}
function Product({imageSrc, imageAlt, product, classProduct}: IValuesProduct) {
    return (
        <div className={`product ${classProduct}`}>
            <img className='product__image' src={imageSrc} alt={imageAlt} />
            <div>
            <table className="product-item">
                <thead>
                    <tr className='product-item__row'>
                        <th colSpan={2} className='product-item__text' style={{textAlign: 'left'}}>Snabbfakta</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='product-item__row'>
                        <td className='product-item__text'>Namn</td>
                        <td className='product-item__text'>{product.name}</td>
                    </tr>
                    <tr className='product-item__row'>
                        <td className='product-item__text'>Start</td>
                        <td className='product-item__text'>{product.year}</td>
                    </tr>
                    <tr className='product-item__row'>
                        <td className='product-item__text'>Löptid</td>
                        <td className='product-item__text'>{product.power}</td>
                    </tr>
                    <tr className='product-item__row'>
                        <td className='product-item__text'>Målavkastning</td>
                        <td className='product-item__text'>{product.income}</td>
                    </tr>
                    <tr className='product-item__row'>
                        <td className='product-item__text'>Ränta</td>
                        <td className='product-item__text'>{product.application}</td>
                    </tr>
                    <tr className='product-item__row'>
                        <td className='product-item__text'>Noterad</td>
                        <td className='product-item__text'>{product.note}</td>
                    </tr>
                    <tr className='product-item__row'>
                        <td className='product-item__text'>Antal fastigheter</td>
                        <td className='product-item__text'>{product.properties}</td>
                    </tr>
                    <tr className='product-item__row'>
                        <td className='product-item__text'>Total area (kvm)</td>
                        <td className='product-item__text'>{product.dimensions}</td>
                    </tr>
                    <tr className='product-item__row'>
                        <td className='product-item__text'>{product.payment}</td>
                    </tr>
                    <tr className='product-item__row'>
                        <td className='product-item__text'>Nyckeltal</td>
                    </tr>
                    <tr className='product-item__row'>
                        <td className='product-item__text'>NAV</td>
                        <td className='product-item__text'>{product.payback}</td>
                    </tr>
                    <tr className='product-item__row'>
                        <td colSpan={2} className='product-item__text'>{product.date}</td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    );
}

export default Product;