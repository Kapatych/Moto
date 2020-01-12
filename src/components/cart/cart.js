import React from 'react';
import './cart.scss'
import PropTypes from 'prop-types';
import CartItem from "./cart-item";

const Cart = ({cartItems, orderTotal, addProductToCart, removeProductFromCart, deleteProductFromCart}) => {
    return (
        <div className='cart'>
            <div className='cart__wrapper'>
                <div className="cart__title title">Shopping Cart</div>
                {
                    cartItems.map((item, idx) => <CartItem key={idx} item={item}
                                                           addProductToCart={() => addProductToCart(item)}
                                                           removeProductFromCart={() => removeProductFromCart(item)}
                                                           deleteProduct={deleteProductFromCart}/>)
                }
                <div className='cart__total'>
                    <div className='title'>Total: ${orderTotal}</div>
                    <div>
                        <button className='cart__button button'>Proceed To Checkout</button>
                    </div>
                </div>

            </div>
        </div>
    )
};

Cart.propTypes = {
    cartItems: PropTypes.array,
    orderTotal: PropTypes.number,
    addProductToCart: PropTypes.func,
    removeProductFromCart: PropTypes.func,
    deleteProductFromCart: PropTypes.func,
};

export default Cart;