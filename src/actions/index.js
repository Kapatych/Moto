import {
    fetchHelmets as fetchHelmetsAPI,
    fetchHelmetItem as fetchHelmetItemAPI,
    fetchCategories as fetchCategoriesAPI
} from '../api/';
//TODO: optimize action-type import
import {
    FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE,
    FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_FAILURE,
    FETCH_CATEGORIES_REQUEST, FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAILURE,
    ADD_PRODUCT_FILTER,
    ADD_ACTIVE_CATEGORY,
    CHANGE_SORT_TYPE,
    ADD_PRODUCT_TO_CART, DELETE_PRODUCT_FROM_CART, CHANGE_PRODUCT_QUANTITY, REMOVE_PRODUCT_FROM_CART,
    SEARCH_PRODUCT, CLEAR_SEARCH, DELETE_ALL_FILTERS, SHOW_MORE


} from '../action-types'

/*   Catalog-Page   */

export const fetchHelmets = () => async (dispatch) => {
    dispatch({type: FETCH_PRODUCTS_REQUEST});
    try {
        const data = await fetchHelmetsAPI();
        dispatch({
            type: FETCH_PRODUCTS_SUCCESS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: FETCH_PRODUCTS_FAILURE,
            payload: err
        })
    }

};

export const addProductFilter = (filter) => {
    return {
        type: ADD_PRODUCT_FILTER,
        payload: filter
    }
};

export const deleteAllFilters = () => {
    return {
        type: DELETE_ALL_FILTERS,
    }
};

export const showMore = () => {
    return {
        type: SHOW_MORE,
    }
};

export const clearSearch = () => {
    return {
        type: CLEAR_SEARCH,
    }
};

export const fetchCategories = () => async (dispatch) => {
    dispatch({type: FETCH_CATEGORIES_REQUEST});
    try {
        const data = await fetchCategoriesAPI();
        dispatch({
            type: FETCH_CATEGORIES_SUCCESS,
            payload: data,
        })
    } catch (e) {
        dispatch({
            type: FETCH_CATEGORIES_FAILURE,
            payload: e
        })
    }
};

export const fetchActiveCategory = (category) => {
    return {
        type: ADD_ACTIVE_CATEGORY,
        payload: category
    }
};

export const changeSortType = (type) => {
    return {
        type: CHANGE_SORT_TYPE,
        payload: type
    }
};

/*   Product-Page    */

export const fetchHelmetItem = (id) => async (dispatch) => {
    dispatch({type: FETCH_PRODUCT_REQUEST});
    try {
        const data = await fetchHelmetItemAPI(id);
        dispatch({
            type: FETCH_PRODUCT_SUCCESS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: FETCH_PRODUCT_FAILURE,
            payload: err
        })
    }
};

/*   Cart-Page    */

export const addProductToCart = (product) => {
    return {
        type: ADD_PRODUCT_TO_CART,
        payload: product
    }
};

export const removeProductFromCart = (product) => {
    return {
        type: REMOVE_PRODUCT_FROM_CART,
        payload: product
    }
};

export const changeProductQuantity = (quantity) => {
    return {
        type: CHANGE_PRODUCT_QUANTITY,
        payload: quantity
    }
};

export const deleteProductFromCart = (product) => {
    return {
        type: DELETE_PRODUCT_FROM_CART,
        payload: product
    }
};


/*  search  */

export const searchProduct = (text) => {
    return {
        type: SEARCH_PRODUCT,
        payload: text
    }
};