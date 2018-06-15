import {createLogic} from "redux-logic";
import {
    DELETE_ALL_PRODUCTS,
    DELETE_ALL_PRODUCTS_FAILURE,
    DELETE_ALL_PRODUCTS_SUCCESS,
    GET_PRODUCTS
} from "../constants/products";
import {deleteRequest} from "../requests/requests";

const deleteAllProductsLogic=createLogic({
    type:DELETE_ALL_PRODUCTS,
    latest:true,
    process(_,dispatch,done){
        deleteRequest("products")
            .then(() =>{
                dispatch({
                    type:DELETE_ALL_PRODUCTS_SUCCESS,
                });
                dispatch({
                    type:GET_PRODUCTS
                });
                done();
            })
            .catch(() => {
                dispatch({
                    type:DELETE_ALL_PRODUCTS_FAILURE,
                    error:true
                });

                done();
            });
    }
});

export default deleteAllProductsLogic;