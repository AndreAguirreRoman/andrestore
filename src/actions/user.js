import axios from 'axios';

import {
    SET_USER_PURCHASES,
    SET_PURCHASE_DETAIL,
    FETCH_USER_ADDRESS,
    ADD_PRODUCT,
    SET_CART_PRODUCTS,
    DELETE_PRODUCT
} from './types';


export function setPurchaseDetail(_id) {
    return ({
        type: SET_PURCHASE_DETAIL,
        payload: _id
    })
}

export function setCartProducts() {
    return ({
        type: SET_CART_PRODUCTS,
        payload: []
    })
}

export function addProduct(product) {
    return ({
        type: ADD_PRODUCT,
        payload: product
    })
}

export function deleteProduct(product) {
    return ({
        type: DELETE_PRODUCT,
        payload: product
    })
}


export function getAddress() {
    return function (dispatch) {
        axios.get('https://andreaguirre.herokuapp.com/user/addresses')
            .then(response => {
                console.log("dispatcher", response.data);
                dispatch({
                    type: FETCH_USER_ADDRESS,
                    payload: response.data
                })
            })
            .catch(error => {
                console.log(error)
            })
    }
}


export function fetchUserPurchases() {
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 0,
                total: 238.00,
                orderNumber: 'A00000001',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Andre Aguirre',
                    shippingAddress: '1234 Andre st.'
                }
            },
            {
                _id: 1,
                total: 999.00,
                orderNumber: 'A00000023',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Andre Aguirre',
                    shippingAddress: '1234 Andre st.'
                }
            },
            {
                _id: 2,
                total: 214.02,
                orderNumber: 'A00003451',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Andre Aguirre',
                    shippingAddress: '1234 Andre st.'
                }
            },
            {
                _id: 3,
                total: 549.00,
                orderNumber: 'A02300001',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Andre Aguirre',
                    shippingAddress: '1234 Andre st.'
                }
            },
            {
                _id: 4,
                total: 1690.00,
                orderNumber: 'A00022001',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Andre Aguirre',
                    shippingAddress: '1234 Andre st.'
                }
            },
            {
                _id: 5,
                total: 1223.00,
                orderNumber: 'A00230001',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Andre Aguirre',
                    shippingAddress: '1234 Andre st.'
                }
            },
            {
                _id: 6,
                total: 823.99,
                orderNumber: 'A00123001',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Andre Aguirre',
                    shippingAddress: '1234 Andre st.'
                }
            },
            {
                _id: 7,
                total: 338.00,
                orderNumber: 'A22000001',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Andre Aguirre',
                    shippingAddress: '1234 Andre st.'
                }
            },
            {
                _id: 8,
                total: 325.00,
                orderNumber: 'A04500201',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Andre Aguirre',
                    shippingAddress: '1234 Andre st.'
                }
            }


        ]
    })
}

// export const addUser = userObj => {
//     return (dispatch) => {
//         axios.post('https://andreaguirre.herokuapp.com/user', userObj)
//             .then(response => {
//                 dispatch({
//                     type: ADD_USER,
//                     payload: response.data
//                 })
//             })
//             .catch(err => {
//                 console.log(err)
//             });

//     }
// }