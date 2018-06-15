import {LOGIN_USER,LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS} from "../constants/user";
import {createLogic} from "redux-logic";
import {postRequest} from "../requests/requests";
import {history} from "../config/history";


const loginUserLogic = createLogic({
    type:LOGIN_USER,
    latest:true,
    process({action},dispatch,done){
        postRequest("login_check",action.data)
            .then((res)=>{
                localStorage.setItem("token",res.token);
                dispatch({
                    type:LOGIN_USER_SUCCESS,
                    payload:res.token
                });
                history.push({pathname: "/"});
                done();
            })
            .catch(() => {
                dispatch({
                    type:LOGIN_USER_FAILURE,
                    error:true
                });
                done();
            });
    }
});

export default loginUserLogic;