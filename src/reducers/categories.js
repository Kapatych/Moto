//TODO: delete this file
import {
    FETCH_CATEGORIES_REQUEST,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_FAILURE
} from "../action-types";

const initialState = {
    items: [],
    isLoading: true,
    isError: false
};

const categories = (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_CATEGORIES_REQUEST:
            return {
                ...state
            };
        case FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                items: payload,
                isLoading: false
            };
        case FETCH_CATEGORIES_FAILURE:
            return {
                items: [],
                isLoading: false,
                isError: true
            };

        default:
            return state
    }
};

export default categories;