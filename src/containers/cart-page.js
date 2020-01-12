import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import {addProductToCart, deleteProductFromCart, removeProductFromCart} from "../actions";

import empty_cart from '../assets/images/empty_cart.svg'
import Cart from "../components/cart/cart";


class CartPage extends Component {
    render() {
        const {
            cartItems,
            orderTotal,
            addProductToCart,
            removeProductFromCart,
            deleteProductFromCart
        } = this.props;

        if (cartItems.length === 0) return (
            <div className='cart cart_empty'>
                <img src={empty_cart} alt='empty-cart'/>
                <div className='title'>Your Cart is Empty</div>
                <Link to='/catalog' className='button cart__button'>Start shopping</Link>
            </div>
        );

        return <Cart cartItems={cartItems}
                     orderTotal={orderTotal}
                     addProductToCart={addProductToCart}
                     removeProductFromCart={removeProductFromCart}
                     deleteProductFromCart={deleteProductFromCart}/>
    }
}

CartPage.propTypes = {
    cartItems: PropTypes.array,
    orderTotal: PropTypes.number,
    addProductToCart: PropTypes.func,
    removeProductFromCart: PropTypes.func,
    deleteProductFromCart: PropTypes.func,
};
const mapStateToProps = ({cart: {cartItems, orderTotal}}) => {
    return {
        cartItems,
        orderTotal
    }
};

export default connect(mapStateToProps, {addProductToCart, removeProductFromCart, deleteProductFromCart})(CartPage);