// import types
import { INPUT_SUCCESS, INPUT_FAIL,
         SESSION_SUCCESS, SESSION_FAIL,
         MESSAGE_SUCCESS, MESSAGE_FAIL } from "../actions/types";

// set initial state to message que
const initialState = {
    messages: [],
};

// switch statement to tell how to update state 
export default (state=initialState, action) => {
    const {type, payload} = action;
    console.log(type);
    let {messages} = state;

    switch(type){
        case INPUT_SUCCESS: 
            messages = [...messages, { message:payload, type:"user" }];
            console.log("inside switch input success");
            return {
                ...state,
                messages,
            };
        case INPUT_FAIL:
            return {
                ...state,
            };
        case SESSION_SUCCESS:
            //stores session ID in localStorage in browser
            localStorage.setItem("session", payload["session_id"]);
            console.log("inside switch session success");
            return {
                ...state,
            };
        case SESSION_FAIL: 
            return {
                ...state,
            };
        default:
            return {
                ...state,
            };  
    };
};