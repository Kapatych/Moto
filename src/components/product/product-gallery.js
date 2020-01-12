import React from 'react';
import './product-gallery.scss';
import PropTypes from 'prop-types';
import Slider from "../slider";

const ProductGallery = ({gallery, brand}) => {
    return (
        <div className='product__gallery'>
            <Slider>
                {
                    gallery.map((image, idx) => {
                        return <img key={idx} src={image} alt=""/>
                    })
                }
            </Slider>
            <div className='product__brand'>{brand}</div>
        </div>
    )
};

ProductGallery.propTypes = {
    gallery: PropTypes.array,
    brand: PropTypes.string,
};

export default ProductGallery;