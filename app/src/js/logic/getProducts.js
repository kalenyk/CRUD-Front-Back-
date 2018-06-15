import {createLogic} from "redux-logic";
import {GET_PRODUCTS,GET_PRODUCTS_FAILURE,GET_PRODUCTS_SUCCESS} from "../constants/products";
import {getRequest} from "../requests/requests";

const getProductsLogic=createLogic({
    type:GET_PRODUCTS,
    latest:true,
    process(_,dispatch,done){
        getRequest("products")
            .then(res =>{
                dispatch({
                    type:GET_PRODUCTS_SUCCESS,
                    payload:res
                });
                done();
            })
            .catch(() => {
                dispatch({
                    type:GET_PRODUCTS_FAILURE,
                    error:true
                });
                done();
            });
    }
});

export default getProductsLogic;