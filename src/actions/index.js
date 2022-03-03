import {
    setHeaderLinks,
    setNavbarLinks,
    changeNavbarActive,
} from './headerNavBar';

import {
    fetchUserPurchases,
    setPurchaseDetail,
    addUser,
    getAddress,
    setCartProducts,
    addProduct,
    deleteProduct,
    deleteAllProducts,
    fetchUserName,
    purchase,
    fetchAddressToEdit,
    editAddress,
    editName,
    editUserName
} from './user';

import {
    fetchShopCategories,
    fetchProducts,
} from './shop'

import {
    getProducts,
    getProductsWithQuery,
    filterProducts,
} from './products';

export {
    setHeaderLinks,
    setNavbarLinks,
    changeNavbarActive,

    fetchUserPurchases,
    setPurchaseDetail,
    fetchShopCategories,
    fetchProducts,
    filterProducts,

    addUser,
    getProducts,
    getProductsWithQuery,
    getAddress,
    setCartProducts,
    addProduct,
    deleteProduct,
    deleteAllProducts,
    fetchUserName,
    purchase,
    fetchAddressToEdit,
    editAddress,
    editName,
    editUserName
}