import React from 'react';
import './cart.scss'
import CartItem from "./cart-item";

const Cart = ({cartItems, orderTotal, addProductToCart, removeProductFromCart, deleteProductFromCart}) => {
    return (
        <div className='cart'>
            <div className='cart__wrapper'>
                <div className="cart__title title">Shopping Cart</div>
                    {
                        cartItems.map((item, idx) => <CartItem key={idx} item={item}
                                                               addProductToCart={() => addProductToCart(item)}
                                                               removeProductFromCart={ () => removeProductFromCart(item)}
                                                               deleteProduct={deleteProductFromCart}/>)
                    }
                    <div className='cart__total'>
                        <div className='title'>Total: ${orderTotal}</div>
                        <div><button className='cart__button button'>Proceed To Checkout</button></div>
                    </div>

            </div>
        </div>
    )
};


export default Cart;