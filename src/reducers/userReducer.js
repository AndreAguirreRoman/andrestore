import {
    SET_USER_PURCHASES,
    SET_PURCHASE_DETAIL,
    FETCH_USER_ADDRESS
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
    users: []
}



export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_USER_PURCHASES:
            return {
                ...state,
                purchases: action.payload
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
        case FETCH_USER_ADDRESS:
            const addresses = action.payload;
            return {
                ...state,
                addresses
            }

        default: return state;
    }
}