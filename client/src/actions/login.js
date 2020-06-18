import { SIGN_IN_SUCCESS, SIGN_IN_FAIL } from "./types";

export const login = (pID) => async (dispatch) => {
    try{
        console.log("in login action");
        dispatch({type: SIGN_IN_SUCCESS, payload: pID});
    }catch(err){
        dispatch({type: SIGN_IN_FAIL});
    }
}