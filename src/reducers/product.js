import {
    FETCH_PRODUCT_FAILURE,
    FETCH_PRODUCT_REQUEST,
    FETCH_PRODUCT_SUCCESS,
} from "../action-types";

const initialState = {
    product: {},
    isLoading: true,
    isError: false,
};

const product = (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_PRODUCT_REQUEST:
            return {
                product: {},
                isLoading: true,
                isError: false,
            };
        case FETCH_PRODUCT_SUCCESS:
            return {
                ...state,
                product: payload,
                isLoading: false,
            };
        case FETCH_PRODUCT_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: payload,
            };
        default:
            return state;
    }
};

export default product;