import { DATABASE_SUCCESS, DATABASE_FAIL
   } from "./types";
import axios from "axios";

export const getData = () => async (dispatch) => {
    try{
        console.log("in getData");
        const res = axios.get("/watson/data");
        dispatch({type: DATABASE_SUCCESS, payload: (await res).data});
        console.log(res);   
    }catch(err){
        dispatch({type: DATABASE_FAIL});
    };
};