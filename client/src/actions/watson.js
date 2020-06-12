//import types
import { INPUT_SUCCESS, INPUT_FAIL,
         SESSION_SUCCESS, SESSION_FAIL,
         MESSAGE_SUCCESS, MESSAGE_FAIL } from "./types";
import axios from "axios";

// handles user message 
export const userMessage = (message) => async (dispatch) => {
    try{
        console.log("in userMessage. message = " + message);
        dispatch({type: INPUT_SUCCESS, payload: message });
    }catch(err){
        dispatch({type: INPUT_FAIL });
    };
};

// creates a session 
// aka api call to backend 
export const createSession = () => async (dispatch) => {
    try{
        const res = await axios.get("http://localhost:5000/watson/session");
        dispatch({type: SESSION_SUCCESS, payload: res.data});
    }catch(err){
        dispatch({type: SESSION_FAIL});
    }
};

// sends message to the bot API call 

