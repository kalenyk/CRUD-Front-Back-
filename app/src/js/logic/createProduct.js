import {createLogic} from "redux-logic";
import {ADD_PRODUCT,ADD_PRODUCT_FAILURE,ADD_PRODUCT_SUCCESS} from "../constants/products";
import {postRequest} from "../requests/requests";
import {history} from "../config/history";

const createProductLogic=createLogic({
    type:ADD_PRODUCT,
    latest:true,
    process({action},dispatch,done){
        postRequest("product/new",action.data)
            .then(() =>{
                dispatch({
                    type:ADD_PRODUCT_SUCCESS,
                });
                history.push({pathname:"/"});
                done();
            })
            .catch(() => {
                dispatch({
                    type:ADD_PRODUCT_FAILURE,
                    error:true
                });
                done();
            });
    }
});

export default createProductLogic;