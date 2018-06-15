import {GET_PRODUCTS,GET_PRODUCTS_FAILURE,GET_PRODUCTS_SUCCESS} from "../constants/products";

const initialState={
    loading:false,
    loaded:false,
    data:[]
};

export default function (state=initialState,action) {
    switch (action.type){
    case GET_PRODUCTS:{
        return{
            ...state,
            loading:true
        };
    }
    case GET_PRODUCTS_SUCCESS:{
        return{
            ...state,
            loading:false,
            loaded:true,
            data:action.payload
        };
    }
    case GET_PRODUCTS_FAILURE:{
        return{
            ...state,
            loading:false,
            loaded:false,
            data:[]
        };
    }
    default:{
        return state;
    }
    }
}