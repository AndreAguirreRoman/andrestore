import {
    // SET_SHOP_CATEGORIES
    SET_NAVBAR_LINKS,
    FILTER_PRODUCTS_WITH_CATEGORY_ID,
    SET_SHOP_CATEGORIES
} from './types';

export function filterProductsWithCategoryId(_id) {
    console.log(_id)
    return ({
        type: FILTER_PRODUCTS_WITH_CATEGORY_ID,
        payload: _id
    })
}



export function fetchShopCategories() {
    return ({
        type: SET_SHOP_CATEGORIES,
        payload: [
            {
                _id: 0,
                title: 'All',
                path: '/products',
                active: false,
            },
            {
                _id: 1,
                title: 'Phones',
                path: '/products/phones',
                active: false,
            },
            {
                _id: 2,
                title: 'Cameras',
                path: '/products/cameras',
                active: false,
            },
            {
                _id: 3,
                title: "TV's",
                path: '/products/tv',
                active: false,
            },
            {
                _id: 4,
                title: 'Computers',
                path: '/products/computers',
                active: false,
            },
            {
                _id: 5,
                title: 'Video Games',
                path: '/products/video-games',
                active: false,
            },
            {
                _id: 6,
                title: 'Headphones',
                path: '/products/headphones',
                active: false,
            },

        ]
    })
}