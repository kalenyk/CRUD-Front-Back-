import {LOGIN_USER} from "../constants/user";

export const loginUser = (data) => ({
    type:LOGIN_USER,
    data
});