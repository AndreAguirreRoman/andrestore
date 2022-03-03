import axios from 'axios';

import {
    SET_USER_PURCHASES,
    SET_PURCHASE_DETAIL,
    FETCH_USER_ADDRESS,
    ADD_PRODUCT,
    SET_CART_PRODUCTS,
    DELETE_PRODUCT,
    DELETE_ALL_PRODUCTS,
    FETCH_USER_NAME,
    MAKE_PURCHASE,
    ADDRESS_EDIT,
    EDIT_ADDRESS,
    EDIT_NAME
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

export function deleteProduct(_id) {
    return ({
        type: DELETE_PRODUCT,
        payload: _id
    })
}
export function deleteAllProducts(product) {
    return ({
        type: DELETE_ALL_PRODUCTS,
        payload: product
    })
}

export function purchase(fields) {
    return ({
        type: MAKE_PURCHASE,
        payload: fields
    })
}
export function editAddress(fields) {
    const data = fields
    return function (dispatch) {
        axios.put('https://andreaguirre.herokuapp.com/user/address/1', data)
            .then(res => {
                dispatch({
                    type: EDIT_ADDRESS,
                    payload: fields
                })
            }).catch(err => {
                console.log(err)
            })
    }

}
export function editName(fields) {
    const data = fields
    return function (dispatch) {
        axios.put('https://andreaguirre.herokuapp.com/user/1', data)
            .then(res => {
                dispatch({
                    type: EDIT_NAME,
                    payload: data
                })
            }).catch(err => {
                console.log(err)
            })
    }

}


export function getAddress() {
    return function (dispatch) {
        axios.get('https://andreaguirre.herokuapp.com/user/address/1')
            .then(response => {
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


export function fetchUserName() {
    return function (dispatch) {
        axios.get('https://andreaguirre.herokuapp.com/user/1')
            .then(response => {
                dispatch({
                    type: FETCH_USER_NAME,
                    payload: response.data
                })
            }).catch(error => {
                console.log(error)
            })
    }
}

export function fetchAddressToEdit() {
    return function (dispatch) {
        axios.get('https://andreaguirre.herokuapp.com/user/address/1')
            .then(response => {
                dispatch({
                    type: ADDRESS_EDIT,
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