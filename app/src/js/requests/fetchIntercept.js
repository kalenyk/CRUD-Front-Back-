import fetchIntercept from "fetch-intercept";
import {history} from "../config/history";

fetchIntercept.register({
    request:function (path,config) {
        let token=localStorage.getItem("token");
        config.mode="cors";
        if(config.method === "POST" || config.method === "DELETE"){
            config.headers={
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            };
        }
        else {
            config.headers = {
                "Accept": "application/json",
                "Content-Type": "application/json"
            };
        }
        return [path, config];
    },
    response: (response) => {
        if (response.status === 401) {
            localStorage.setItem("token", "");
            history.push("/login");
        }
        return response;
    },
});