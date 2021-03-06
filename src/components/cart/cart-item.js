import React from 'react';
import './cart-item.scss';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import Counter from "../counter";

const CartItem = ({item, addProductToCart, removeProductFromCart, deleteProduct}) => {
    const {thumb, title, size, color, price, quantity, total} = item;

    const urlPath = title.split(' ').join('-');

    return (
        <div className='cart__item'>

            <div className='cart__item-img'>
                <Link to={`catalog/${urlPath}`}>
                    <img src={thumb} alt="" className='cart__item-thumb'/>
                </Link>
            </div>

            <div className='cart__item-info'>
                <Link to={`catalog/${urlPath}`} className='cart__item-title'>{title}</Link>
                <div>Size: {size} </div>
                <div> Color: {color}</div>
                <div className='cart__item-price'>Price: ${price}</div>
            </div>

            <Counter quantity={quantity}
                     onIncrease={addProductToCart}
                     onDecrease={removeProductFromCart}
                     parentClass='cart'/>

            <div className='cart__item-total'>${total}</div>
            <div className='cart__item-delete' onClick={() => deleteProduct(item)}/>
        </div>
    )
};

CartItem.propTypes = {
    item: PropTypes.object,
    addProductToCart: PropTypes.func,
    removeProductFromCart: PropTypes.func,
    deleteProduct: PropTypes.func,
};

export default CartItem;