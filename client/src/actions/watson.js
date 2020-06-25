// import types
import { INPUT_SUCCESS, INPUT_FAIL,
         SESSION_SUCCESS, SESSION_FAIL,
         MESSAGE_SUCCESS, MESSAGE_FAIL,
        } from "./types";
import axios from "axios";
import store from "../store";

// handles user message 
export const userMessage = (message) => async (dispatch) => {
    try{
        console.log("in userMessage. message = " + message);
        dispatch({type: INPUT_SUCCESS, payload: message });
    }catch(err){
        dispatch({type: INPUT_FAIL });
    };
};

// GET a session 
export const createSession = () => async (dispatch) => {
    try{
        console.log("in createSession");
        const res = await axios.get("/watson/session");
        dispatch({type: SESSION_SUCCESS, payload: res.data});
    }catch(err){
        dispatch({type: SESSION_FAIL});
    }
};

// POST message to the bot 
export const sendMessage = message => async (dispatch) => {
    try{
        console.log("in createMessage");
        const body = {input:message, pID: store.getState().login.loggedIn[1]};
        const res = axios.post("/watson/message", body);
        dispatch({type: MESSAGE_SUCCESS, payload: (await res).data.output.generic[0].text});
        console.log(res);
    }catch(err){
        dispatch({type: MESSAGE_FAIL});
    };
};

