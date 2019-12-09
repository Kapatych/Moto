import {
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
    FETCH_CATEGORIES_REQUEST,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_FAILURE,
} from '../action-types'

const initialState = {
    helmets: [],
    categories: [],
    isLoading: true,
    isError: false
};

const catalog = (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_PRODUCTS_REQUEST:
        case FETCH_CATEGORIES_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                helmets: payload,
                isLoading: false,
            };
        case FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: payload,
                isLoading: false
            };
        case FETCH_PRODUCTS_FAILURE:
        case FETCH_CATEGORIES_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: payload
            };
        default:
            return state;
    }
};

export default catalog;