// import types
import { INPUT_SUCCESS, INPUT_FAIL,
         SESSION_SUCCESS, SESSION_FAIL, 
         MESSAGE_SUCCESS, MESSAGE_FAIL,
        } from "../actions/types";

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
            return {
                ...state,
                messages,
            };
        case INPUT_FAIL:
            return {
                ...state,
            };
        case SESSION_SUCCESS:
            // stores session ID in localStorage in browser
            localStorage.setItem("session", payload["session_id"]);
            return {
                ...state,
            };
        case SESSION_FAIL:
            alert("SESSION_FAIL: Please refresh the page"); 
            return {
                ...state,
            };
        case MESSAGE_SUCCESS:
            messages = [...messages, {message:payload, type:"bot"}];
            return {
                ...state,
                messages,
            };
        case MESSAGE_FAIL: 
            alert("Message Fail. Session Expired. Please refresh")
            return {
                ...state,
            };
        default:
            return {
                ...state,
            };  
    };
};