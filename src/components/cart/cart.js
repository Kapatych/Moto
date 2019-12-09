import React from 'react';
import './cart.scss'
import CartItem from "./cart-item";

const Cart = ({cartItems, orderTotal, addProductToCart, removeProductFromCart, deleteProductFromCart}) => {
    return (
        <div className='cart'>
            <div className='cart__wrapper'>
                <div className="cart__title title">Shopping Cart</div>
                <table className='cart__table table'>
                    <thead className='table__header'>
                    <tr>
                        <th/>
                        <th/>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                    </thead>
                    <tfoot className='table__footer'>
                    <tr>
                        <td/>
                        <td className='title'>Total:</td>
                        <td colSpan="2" className='title'>${orderTotal}</td>
                        <td colSpan="2">
                            <button className='cart__button button'>Proceed To Checkout</button>
                        </td>
                    </tr>
                    </tfoot>
                    <tbody className='table__content'>
                    {
                        cartItems.map((item, idx) => <CartItem key={idx} item={item}
                                                               addProductToCart={() => addProductToCart(item)}
                                                               removeProductFromCart={ () => removeProductFromCart(item)}
                                                               deleteProduct={deleteProductFromCart}/>)
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
};


export default Cart;