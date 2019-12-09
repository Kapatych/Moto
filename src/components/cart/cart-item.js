import React from 'react';
import './cart-item.scss';
import icon_x from "../../assets/images/icon-x.png";
import {Link} from "react-router-dom";
import Counter from "../counter";

const CartItem = ({item, addProductToCart, removeProductFromCart, deleteProduct}) => {
    const {id, thumb, title, size, color, price, quantity, total} = item;
    return (
        <tr className='cart__item'>
            <td>
                <button className='cart__item-delete' onClick={() => deleteProduct(item)}>
                    <img src={icon_x} alt=""/>
                </button>
            </td>
            <td>
                <img src={thumb} alt="" className='cart__item-thumb'/>
            </td>
            <td>
                <Link to={`catalog/${id}`} className='cart__item-title'>{title}</Link>
                <div>
                    <span>Size: {size} </span>
                    <span> Color: {color}</span>
                </div>
            </td>
            <td>${price}</td>
            <td>
                <Counter quantity={quantity} onIncrease={addProductToCart} onDecrease={removeProductFromCart} parentClass='cart' />
                {/*<div className='cart__item-count'>{quantity}</div>*/}
            </td>
            <td>${total}</td>
        </tr>
    )
};

export default CartItem;