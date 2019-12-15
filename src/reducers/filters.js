import {
    ADD_PRODUCT_FILTER,
    ADD_ACTIVE_CATEGORY,
    CHANGE_SORT_TYPE,
    SEARCH_PRODUCT,
    CLEAR_SEARCH,
    DELETE_ALL_FILTERS, SHOW_MORE
} from "../action-types";


const initialState = {
    category: '',
    sort: 'priceASC',
    brand: [],
    color: [],
    size: [],
    search: '',
    currentPage: 1,
};

const updateFilter = (state, type, value) => {

    const newState = {...state};
    const index = newState[type].indexOf(value);
    if (value === 'reset') {
        newState[type] = [];
    } else if (index === -1) {
        newState[type] = [...newState[type], value];
    } else {
        newState[type] = [
            ...newState[type].slice(0, index),
            ...newState[type].slice(index + 1)
        ]
    }
    return newState;
};

const activeFilters = (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_PRODUCT_FILTER:
            return updateFilter(state, payload.type, payload.value);
        case DELETE_ALL_FILTERS:
            return {...state, brand: [], color: [], size: [], currentPage: 1}
        case ADD_ACTIVE_CATEGORY:
            return {
                ...state,
                category: payload
            };
        case CHANGE_SORT_TYPE:
            return {
                ...state,
                sort: payload
            };
        case SEARCH_PRODUCT:
            return {
                ...state,
                search: payload
            };
        case CLEAR_SEARCH:
            return {
                ...state,
                search: ''
            };
        case SHOW_MORE:
            return {
                ...state, currentPage: state.currentPage + 1
            };
        default:
            return state;
    }
};

export default activeFilters;