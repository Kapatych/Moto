import React from 'react';
import './cart-item.scss';
import icon_x from "../../assets/images/icon-x.png";
import {Link} from "react-router-dom";
import Counter from "../counter";

const CartItem = ({item, addProductToCart, removeProductFromCart, deleteProduct}) => {
    const {id, thumb, title, size, color, price, quantity, total} = item;
    return (
        <div className='cart__item'>

            <div className='cart__item-img'>
                <img src={thumb} alt="" className='cart__item-thumb'/>
            </div>

            <div className='cart__item-info'>
                <Link to={`catalog/${id}`} className='cart__item-title'>{title}</Link>
                <div>Size: {size} </div>
                <div> Color: {color}</div>
                <div className='cart__item-price'>Price: ${price}</div>
            </div>



            <Counter quantity={quantity} onIncrease={addProductToCart} onDecrease={removeProductFromCart}
                     parentClass='cart'/>

            <div className='cart__item-total'>${total}</div>
            <div className='cart__item-delete' onClick={() => deleteProduct(item)}/>
        </div>
    )
};

export default CartItem;