import React from 'react';
import './catalog-item.scss';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';

const CatalogItem = ({helmet}) => {
    const {title, price, img: {thumb}} = helmet;

    const urlPath = title.split(' ').join('-');

    return (
        <div className='catalog__item'>
            <div className='catalog__item-cover'>
                <Link to={`/catalog/${urlPath}`}>
                    <img src={thumb} alt="product-thumb"/>
                </Link>

            </div>
            <div className='catalog__item-details'>
                <Link to={`/catalog/${urlPath}`}>
                    <div className='catalog__item-title'>{title}</div>
                </Link>
                <div className='catalog__item-price price'>${price}</div>

            </div>
            <Link to={`/catalog/${urlPath}`} className='catalog__item-button button'>Buy now</Link>
        </div>
    )
};

CatalogItem.propTypes = {
    helmet: PropTypes.object,
};

export default CatalogItem;