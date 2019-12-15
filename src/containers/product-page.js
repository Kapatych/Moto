import React, {Component} from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';

import {addProductToCart, fetchHelmetItem} from "../actions";

import ErrorIndicator from "../components/error/error-indicator";
import Product from "../components/product/product";
import Spinner from "../components/spinner"

class ProductPage extends Component {

    componentDidMount() {
        let name = this.props.match.params.productName.split('-').join(' ');
        this.props.fetchHelmetItem(name);
    }
    render() {

        const {
            product,
            isLoading,
            isError,
            addProductToCart,
            cartItems,
            history:{goBack}} = this.props;
        if (isError) {
            return <ErrorIndicator />
        }
        if (isLoading) {
            return <Spinner/>
        }
        return <Product product={product} onGoBack={goBack} onAddedToCart={addProductToCart} cartItems={cartItems}/>

    }
}

const mapStateToProps = ({product: {product, isLoading, isError}, cart:{cartItems}}) => {
    return {
        product,
        isLoading,
        isError,
        cartItems
    }
};

const mapDispatchToProps = {
    fetchHelmetItem,
    addProductToCart,
};

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(ProductPage) ;