// import types
import { REGISTER_SUCCESS, REGISTER_FAIL,
        LOGIN_SUCCESS, LOGIN_FAIL,
        LOAD_USER, AUTH_ERROR,
        } from "../actions/types";


const initialState = {
    token: localStorage.gitItem("token"),
    ableToLogin : false,
    error: {}
}

const login = (state=initialState) => {
    const {type, payload} = action;
    switch(type){

        default: 
            return state;
    }
} 

export default login;