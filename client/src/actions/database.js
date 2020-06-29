import { DATABASE_SUCCESS, DATABASE_FAIL
   } from "./types";
import axios from "axios";
import store from "../store";


// POST message to the bot 
export const sendData = data => async (dispatch) => {
    try{
        console.log("in sendData");
        const body = {};
        const res = axios.post("/stats", body);
        dispatch({type: DATABASE_SUCCESS, payload: (await res).data.output.generic[0].text});
        console.log(res);
    }catch(err){
        dispatch({type: MESSAGE_FAIL});
    };
};