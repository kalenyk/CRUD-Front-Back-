import {LOGIN_USER,LOGIN_USER_FAILURE,LOGIN_USER_SUCCESS} from "../constants/user";

const initialState={
    loading:false,
    loaded:false,
    token:"",
    isLoggedIn:false
};

export default function (state=initialState,action) {
    switch (action.type){
    case LOGIN_USER:{
        return{
            ...state,
            loading:true
        };
    }
    case LOGIN_USER_SUCCESS:{
        return{
            ...state,
            loading:false,
            loaded:true,
            token:action.payload,
            isLoggedIn:true
        };
    }
    case LOGIN_USER_FAILURE:{
        return{
            ...state,
            loading:false,
            loaded:false,
            token:"",
            isLoggedIn:false
        };
    }
    default:{
        return state;
    }
    }
}