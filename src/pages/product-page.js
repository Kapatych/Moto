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
        let idx = parseInt(this.props.match.params.productId) || 1;
        this.props.fetchHelmetItem(idx);
    }
    render() {

        const {
            product,
            isLoading,
            isError,
            addProductToCart,
            history:{goBack}} = this.props;

        if (isError) {
            return <ErrorIndicator />
        }
        if (isLoading) {
            return <Spinner/>
        }
        return <Product product={product} onGoBack={goBack} onAddedToCart={addProductToCart}/>

    }
}

const mapStateToProps = ({product: {product, isLoading, isError, selected}}) => {
    return {
        product,
        isLoading,
        isError,
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