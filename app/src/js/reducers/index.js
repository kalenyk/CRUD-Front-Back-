import {combineReducers} from "redux";

import { reducer as formReducer } from "redux-form";

import products from "./products";
import user from "./user";

const reducers=combineReducers({
    form: formReducer,
    products,
    user

});
export default reducers;