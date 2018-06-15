import {createLogic} from "redux-logic";
import {DELETE_PRODUCT, DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_SUCCESS, GET_PRODUCTS} from "../constants/products";
import {deleteRequest} from "../requests/requests";

const deleteProductLogic=createLogic({
    type:DELETE_PRODUCT,
    latest:true,
    process({action},dispatch,done){
        deleteRequest(`product/${action.id}`)
            .then(() =>{
                dispatch({
                    type:DELETE_PRODUCT_SUCCESS,
                });
                dispatch({
                    type:GET_PRODUCTS
                });
                done();
            })
            .catch(() => {
                dispatch({
                    type:DELETE_PRODUCT_FAILURE,
                    error:true
                });
                dispatch({
                    type:GET_PRODUCTS
                });
                done();
            });
    }
});

export default deleteProductLogic;