import {
    GET_PRODUCTS,
} from '../actions/types';


const INITIAL_STATE = {
    products: []

}



export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        default: return state
    }
}