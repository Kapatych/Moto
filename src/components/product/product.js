import React from 'react';
import './product.scss';
import ProductInfo from "./product-info";
import ProductGallery from "./product-gallery";
import ProductSpec from "./product-spec";

const Product = ({product, onGoBack, onAddedToCart}) => {
    const {id, title, brand, price, colors, sizes, features, description, preferences, img: {gallery}} = product;

    return (
        <div className='product'>
            <div className='narrow-column'>
                <ProductInfo id={id}
                             sizes={sizes}
                             colors={colors}
                             title={title}
                             price={price}
                             thumb={gallery[0]}
                             onGoBack={onGoBack}
                             onAddedToCart={onAddedToCart}/>

            </div>
            <div className='wide-column'>
                <ProductGallery brand={brand}
                                gallery={gallery}/>

                <ProductSpec description={description}
                             preferences={preferences}
                             features={features}/>
            </div>
        </div>
    )
};

export default Product;