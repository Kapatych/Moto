import React from 'react';
import {Link} from "react-router-dom";
import './product-info.scss';
import arrow_left from "../../assets/images/arrow_left.png";
import icon_share from "../../assets/images/icon_share.png";
import Colors from "../colors";
import Sizes from "../sizes";
import Counter from "../counter";

const ProductInfo = ({id, sizes, colors, title, price, onGoBack, thumb, onAddedToCart}) => {

    const [selectedSize, setSelectedSize] = React.useState(sizes[0]);
    const [selectedColor, setSelectedColor] = React.useState(colors[0]);
    /*const [selectedQuantity, setSelectedQuantity] = React.useState(1);*/
    const [addToCartLabel, setAddToCartLabel] = React.useState('Add to Cart');


    const preparedProductForCart = {
        id, title, price, thumb,
        color: selectedColor,
        size: selectedSize,
        quantity: 1,
        total: +price.toFixed(2),
    };

    return (
        <div className='product__info'>

            <div className='link' onClick={onGoBack}>
                <img className='product__back-link-img ' src={arrow_left} alt=""/>
                back to categories
            </div>
            <div className='product__title'>{title}</div>

            <div className='product__price price'>${price}</div>

            <div className='product__caption'>Color</div>
            <Colors items={colors} selected={selectedColor} onClickFunction={setSelectedColor}/>

            <div className='product__caption'>Size</div>
            <Sizes items={sizes} selected={selectedSize} onClickFunction={setSelectedSize}/>

            {/*<Counter quantity={selectedQuantity} setQuantity={setSelectedQuantity} parentClass='product'/>*/}

            <button type="button" className='product__button button' onClick={() => {
                onAddedToCart(preparedProductForCart);
                setAddToCartLabel('in basket');
            }}>{addToCartLabel}</button>

            <div className='product__share'>
                <img src={icon_share} alt=""/>
                <Link to='/'>Share this</Link>
            </div>
        </div>
    )
};

export default ProductInfo;