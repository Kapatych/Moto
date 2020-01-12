import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import './product-button.scss';

const ProductButton = ({itemIndex, addProduct}) => {

    if (itemIndex !== -1) return <Link to='/cart' className='product__button product__button_active button'>In basket</Link>

    return (
        <button type="button" className='product__button button' onClick={addProduct}>Add to Cart</button>
    )
};

ProductButton.propTypes = {
    itemIndex: PropTypes.number,
    addProduct: PropTypes.func,
};

export default ProductButton;