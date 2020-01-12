import React from 'react';
import './product.scss';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';

import ProductInfo from "./product-info";
import ProductGallery from "./product-gallery";
import ProductSpec from "./product-spec";


const Product = ({product, onGoBack, onAddedToCart, cartItems}) => {

    const [activeBlock, setActiveBlock] = React.useState('gallery');

    const {id, title, brand, price, colors, sizes, features, description, preferences, img: {gallery}} = product;
    return (
        <div className='product'>
            <div className='product__sidebar sidebar'>
                <div className='link' onClick={onGoBack}>
                    <i className="fa fa-chevron-left" aria-hidden="true"/>
                    back to categories
                </div>

                <ProductInfo id={id}
                             sizes={sizes}
                             colors={colors}
                             title={title}
                             price={price}
                             thumb={gallery[0]}
                             onGoBack={onGoBack}
                             onAddedToCart={onAddedToCart} cartItems={cartItems}/>

                <Link to='/' className='product__share link'>
                    <i className="fa fa-share-alt" aria-hidden="true"/>
                    Share this
                </Link>
            </div>
            <div className='product__content content'>
                <div className='product__link link'  onClick={(e) => setActiveBlock(e.target.outerText.toLowerCase())}>
                    {(activeBlock === 'gallery') ? 'specifications' : 'gallery'}
                </div>

                {
                    (activeBlock === 'gallery')
                        ? <ProductGallery brand={brand} gallery={gallery}/>
                        : <ProductSpec description={description} preferences={preferences} features={features}/>
                }
            </div>
        </div>
    )
};

Product.propTypes = {
    product: PropTypes.object,
    onGoBack: PropTypes.func,
    onAddedToCart: PropTypes.func,
    cartItems: PropTypes.array,
    activeBlock: PropTypes.string,
};

export default Product;