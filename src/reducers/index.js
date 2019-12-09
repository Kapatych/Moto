import {combineReducers} from "redux";
import catalog from "./catalog";
import product from "./product";
import activeFilters from "./filters";
import cart from "./cart";

export default combineReducers({
    catalog,
    product,
    activeFilters,
    cart,
});
