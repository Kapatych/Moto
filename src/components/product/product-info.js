import React from 'react';
import './product-info.scss';
import PropTypes from 'prop-types';
import Colors from "../colors";
import Sizes from "../sizes";
import ProductButton from "./product-button";

const ProductInfo = ({id, sizes, colors, title, price, thumb, onAddedToCart, cartItems}) => {

    const [selectedSize, setSelectedSize] = React.useState(sizes[0]);
    const [selectedColor, setSelectedColor] = React.useState(colors[0]);

    const itemIndex = cartItems.findIndex(item =>
        item.id === id &&
        item.color === selectedColor &&
        item.size === selectedSize);

    const preparedProductForCart = {
        id, title, price, thumb,
        color: selectedColor,
        size: selectedSize,
        quantity: 1,
        total: +price.toFixed(2),
    };

    return (
        <div className='product__info'>

            <div className='product__title'>{title}</div>

            <div className='product__price price'>${price}</div>

            <div className='product__caption'>Color</div>
            <Colors items={colors} selected={selectedColor} onClickFunction={setSelectedColor}/>

            <div className='product__caption'>Size</div>
            <Sizes items={sizes} selected={selectedSize} onClickFunction={setSelectedSize}/>

            <ProductButton itemIndex={itemIndex}
                           addProduct={() => {
                               onAddedToCart(preparedProductForCart)
                           }}/>

        </div>
    )
};

ProductInfo.propTypes = {
    id: PropTypes.number,
    sizes: PropTypes.array,
    colors: PropTypes.array,
    title: PropTypes.string,
    price: PropTypes.number,
    thumb:PropTypes.string,
    onAddedToCart: PropTypes.func,
    cartItems: PropTypes.array,
};

export default ProductInfo;