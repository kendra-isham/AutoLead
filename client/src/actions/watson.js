//import types
import { INPUT_SUCCESS, INPUT_FAIL } from "./types";

// handles user message 
export const userMessage = (message) => async (dispatch) => {
    try{
        dispatch({type: INPUT_SUCCESS, payload: message });
    }catch(err){
        dispatch({type: INPUT_FAIL });
    }
}


// creates a session 
// aka api call to backend 


// sends message to the bot API call 

