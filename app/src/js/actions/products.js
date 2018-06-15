import {GET_PRODUCTS,DELETE_PRODUCT,ADD_PRODUCT,DELETE_ALL_PRODUCTS} from "../constants/products";

export const getProducts = () => ({
    type:GET_PRODUCTS
});

export const deleteProduct = (id) => ({
    type:DELETE_PRODUCT,
    id
});

export const deleteAllProducts = () => ({
    type:DELETE_ALL_PRODUCTS
});

export const createProduct = (data) => ({
    type:ADD_PRODUCT,
    data
});