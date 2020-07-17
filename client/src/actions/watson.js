// import types
import { INPUT_SUCCESS, INPUT_FAIL,
         SESSION_SUCCESS, SESSION_FAIL,
         MESSAGE_SUCCESS,
        } from "./types";
import axios from "axios";
import store from "../store";

// handles user message 
export const userMessage = (message) => async (dispatch) => {
    try{
        console.log("in userMessage. message = " + message);
        const array = message.split(/\\n/g);
        dispatch({type: INPUT_SUCCESS, payload: array });
    }catch(err){
        dispatch({type: INPUT_FAIL });
    };
};

// GET a session 
export const createSession = () => async (dispatch) => {
    try{
        const res = await axios.get("/watson/session");
        console.log(res.data);
        dispatch({type: SESSION_SUCCESS, payload: res.data});
    }catch(err){
        dispatch({type: SESSION_FAIL});
    }
};

// export const deleteHeaders = () => {
//     delete axios.defaults.headers.common["session_id"];
//     axios.defaults.headers.common["session_id"] = localStorage.session;
// }
// POST message to the bot 

//this gets a new session ID in the catch block. it matches localstorage and the newly created session id in the server
export const sendMessage = message => async (dispatch) => {
    try{
        const body = {input:message, pID: store.getState().login.loggedIn[1]};
        const res = axios.post("/watson/message", body);

        //stringifies return object, removes quotes, splits on the \n 
        const temp = JSON.stringify((await res).data.output.generic[0].text).replace(/['"]+/g, '');
        const array = temp.split(/\\n/g);
        
        dispatch({type: MESSAGE_SUCCESS, payload: array});

    }catch(err){
        //need to try to get a new session if message fails to post 
        //session_ID expires after 5 minutes of inactivity which throws a message fail error 
            console.log("in message fail catch about to get")
            //this works but calls an extra session ID
            delete axios.defaults.headers.common["session_id"];
            axios.defaults.headers.common["session_id"] = localStorage.session;
            store.dispatch(createSession()).then(
                 //store.dispatch(userMessage(message)).then(
                     store.dispatch(sendMessage(message))
                 //)
            )

        //dispatch({type: MESSAGE_FAIL})
      
    };
};

