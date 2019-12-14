import {connect} from 'react-redux';
import Header from "../components/header";
import {deleteAllFilters, searchProduct} from "../actions";
import {compose} from "redux";
import {withRouter} from "react-router-dom";

const mapStateToProps = ({cart: {cartItems}}) => {
    return {
        quantity: cartItems.reduce( (sum, current) => sum + current.quantity, null),
    }
};

export default compose(
    withRouter,
    connect(mapStateToProps, {searchProduct, deleteAllFilters})
)(Header)
