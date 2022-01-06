import {
    SET_SHOP_CATEGORIES,
    FILTER_PRODUCTS_WITH_CATEGORY_ID
} from '../actions/types';

const INITIAL_STATE = {
    categories: [],

}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FILTER_PRODUCTS_WITH_CATEGORY_ID:
            console.log(action.payload);
            return {
                ...state
            }
        case SET_SHOP_CATEGORIES:
            console.log(action.payload)
            return {
                ...state,
                categories: action.payload
            }

        default: return state
    }
}