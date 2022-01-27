import {
    SET_USER_PURCHASES,
    SET_PURCHASE_DETAIL,
    FETCH_USER_ADDRESS,
    SET_CART_PRODUCTS,
    ADD_PRODUCT,
    DELETE_PRODUCT,
    DELETE_ALL_PRODUCTS
} from '../actions/types';

const INITIAL_STATE = {
    purchases: [],
    purchaseDetail: {
        _id: -1,
        total: 0,
        orderNumber: '',
        orderDate: null,
        creditCard: '',
        user: {
            name: '',
            shippingAddress: ''
        }
    },
    addresses: [],
    users: [],
    cart: []
}



export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_USER_PURCHASES:
            return {
                ...state,
                purchases: action.payload
            }
        case ADD_PRODUCT:
            var cart = []

            state.cart.map(product => {
                cart.push(product)
            })
            cart.push({
                _id: state.cart.length + 1,
                product: action.payload
            })

            return {
                ...state,
                cart: cart
            }
        case DELETE_PRODUCT:
            const cart = state.cart;
            let filteredCart = cart.filter(product => action.payload !== product._id);
            // let filteredCart = cart.filter(product => {
            //     product.obj !== (action.payload + 1)
            // })
            console.log("payload", action.payload)
            console.log("filteredCart", filteredCart)

            return {
                ...state,
                cart: filteredCart
            }
        case DELETE_ALL_PRODUCTS:
            return {
                ...state,
                cart: []
            }

        case SET_PURCHASE_DETAIL:
            let purchaseDetail;
            state.purchases.map(purchase => {
                if (purchase._id == action.payload) {
                    purchaseDetail = purchase;
                }
            })
            return {
                ...state,
                purchaseDetail
            }
        case SET_CART_PRODUCTS:
            return {
                ...state,
                cart: action.payload
            }
        case FETCH_USER_ADDRESS:
            const addresses = action.payload;
            return {
                ...state,
                addresses
            }

        default: return state;
    }
}