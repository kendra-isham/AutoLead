import { SIGN_IN_SUCCESS, SIGN_IN_FAIL
   } from "../actions/types";

let logged = false;
if(localStorage.pID){
    logged=true;
}

// set initial loggedIn state values in localstorage
const initialState = {
    //loggedIn : [false, ""]
    loggedIn : [`${logged}`,localStorage.pID.replace(/"/g,"") ]
};

export default (state=initialState, action) => {
    const {type, payload} = action;
    let {loggedIn} = state;
    switch(type){

        case SIGN_IN_SUCCESS:
            loggedIn = [true, payload];
            console.log("YOU ARE SIGNED IN");
            return {
                ...state,
                loggedIn
            }
        case SIGN_IN_FAIL:
            loggedIn = [false, payload];
            console.log("YOU ARE NOT SIGNED IN");  
            return {
                ...state,
                loggedIn
            }
        default: 
            return state
    };
};