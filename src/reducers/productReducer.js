import {
    FILTER_PRODUCTS_WITH_QUERY,
    GET_PRODUCTS,

} from '../actions/types';


const INITIAL_STATE = {
    products: [],
    filteredProducts: [],

}



export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        case FILTER_PRODUCTS_WITH_QUERY:
            var filteredProducts = [];
            state.products.map((product) => {
                if (product.product_name.toLowerCase().includes(action.payload.query.toLowerCase())) {
                    filteredProducts.push(product)
                } else if (product.product_category_name.toLowerCase().includes(action.payload.query.toLowerCase())) {
                    filteredProducts.push(product)
                } else if
                    (product.product_subcategory_name.toLowerCase().includes(action.payload.query.toLowerCase())) {
                    filteredProducts.push(product)
                }
            })
            return {
                ...state,
                filteredProducts
            }
        default: return state
    }
}