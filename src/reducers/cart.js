import {
    ADD_PRODUCT_TO_CART,
    DELETE_PRODUCT_FROM_CART,
    REMOVE_PRODUCT_FROM_CART } from "../action-types";

const initialState = {
    cartItems: [],
    orderTotal: 0
};

const updateOrder = (state, product, quantity) => {

    const {cartItems, orderTotal} = state;

    //Find product in basket
    const itemIdx = cartItems.findIndex((item) => (
        item.id === product.id &&
        item.size === product.size &&
        item.color === product.color));

    let cartItem = cartItems[itemIdx];

    // Delete product
    if (quantity === undefined) return {
        cartItems: [
            ...cartItems.slice(0, itemIdx),
            ...cartItems.slice(itemIdx + 1),
        ],
        orderTotal: +(orderTotal - cartItem.total).toFixed(2)
    };

    // Add new product
    if (itemIdx === -1) return {
        cartItems: [...cartItems, product],
        orderTotal: +(orderTotal + product.total).toFixed(2),
    };

    // Change product quantity
    let newItem = {
        ...cartItem,
        quantity: cartItem.quantity + quantity,
        total: +(cartItem.total + product.price * quantity).toFixed(2)
    };
    return {
        cartItems: [
            ...cartItems.slice(0, itemIdx),
            newItem,
            ...cartItems.slice(itemIdx + 1),
        ],
        orderTotal: +(orderTotal + product.price * quantity).toFixed(2)
    }

};

const cart = (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_PRODUCT_TO_CART:
            return updateOrder(state, payload, 1);
        case REMOVE_PRODUCT_FROM_CART:
            return updateOrder(state, payload, -1);
        case DELETE_PRODUCT_FROM_CART:
            return updateOrder(state, payload);
        default:
            return state;
    }
};

export default cart;