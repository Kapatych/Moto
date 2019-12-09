import React from 'react';
import './catalog-item.scss';
import {Link} from "react-router-dom";

const CatalogItem = ({helmet}) => {
    const {id, title, price, img: {thumb}} = helmet;

    return (
        <div className='catalog__item'>
            <div className='catalog__item-cover'>
                <Link to={`/catalog/${id}`}>
                    <img src={thumb} alt="product-thumb"/>
                </Link>

            </div>
            <div className='catalog__item-details'>
                <Link to={`/catalog/${id}`}>
                    <div className='catalog__item-title'>{title}</div>
                </Link>
                <div className='catalog__item-price price'>${price}</div>

            </div>
            <Link to={`/catalog/${id}`} className='catalog__item-button button'>Buy now</Link>
        </div>

    )

};

export default CatalogItem;