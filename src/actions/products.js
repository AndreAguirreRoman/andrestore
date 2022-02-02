import { GET_PRODUCTS, FILTER_PRODUCTS_WITH_QUERY, FILTER_PRODUCTS_WITH_CATEGORY_NAME } from './types';

import axios from 'axios';


export function getProducts() {
    return function (dispatch) {
        axios.get('https://andreaguirre.herokuapp.com/products')
            .then(response => {
                dispatch({
                    type: GET_PRODUCTS,
                    payload: response.data
                })
            })
            .catch(error => {
                console.log(error)
            })
    }
}


export function filterProducts(fields) {
    return ({
        type: FILTER_PRODUCTS_WITH_QUERY,
        payload: fields
    })
}

// export function getProductsWithQuery(query) {
//     return function (dispatch) {
//         axios.get('https://andreaguirre.herokuapp.com/products')
//             .then(response => {
//                 console.log("query is", response.data);
//                 console.log(query)
//                 dispatch({
//                     type: GET_PRODUCTS_WITH_QUERY,
//                     payload: response.data
//                 })
//             })
//             .catch(error => {
//                 console.log(error)
//             })

//     }
// }



// export function getProducts() {
//     return dispatch => {
//       dispatch({
//         type: 'RESET_ACTION_TYPE',
//       });
//     };
//   }

// export function getProducts() {
//     return function (dispatch) {
//         axios.get('https://andreaguirre.herokuapp.com/products')
//         .then(res => {
//             console.log(res);
//             return res.data
//             dispatch({
//                 type: GET_PRODUCTS,
//             })
//         })


    //     .then(function (response) {
    //     // won't get called until the API call completes
    //     console.log(response.data);
    //         dispatch {
    //         type: GET_PRODUCTS,
    //         payload: response.data
    //     };

    // })


// }


// export function getProducts() {
//     return ({
//         type: GET_PRODUCTS,
//         payload: [
//             {
//                 _id: 0,
//                 title: 'JavaScript in the Browser',
//                 description: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.',
//                 price: 1.99,
//                 belongsTo: [0, 1]
//             },
//             {
//                 _id: 1,
//                 title: 'Graph Database',
//                 description: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.',
//                 price: 1.99,
//                 belongsTo: [0, 6]
//             },
//             {
//                 _id: 2,
//                 title: 'Full Stack Development',
//                 description: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.',
//                 price: 1.99,
//                 belongsTo: [0, 1, 4]
//             },
//             {
//                 _id: 3,
//                 title: 'User Interface Design',
//                 description: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.',
//                 price: 1.99,
//                 belongsTo: [0, 2]
//             },
//             {
//                 _id: 4,
//                 title: 'JavaScript Development',
//                 description: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.',
//                 price: 1.99,
//                 belongsTo: [0, 1]
//             },
//             {
//                 _id: 5,
//                 title: 'User Experience Design',
//                 description: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.',
//                 price: 1.99,
//                 belongsTo: [0, 2]
//             },
//             {
//                 _id: 6,
//                 title: 'Advanced OOP',
//                 description: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.',
//                 price: 1.99,
//                 belongsTo: [0, 6]
//             },
//         ]
//     })
// }