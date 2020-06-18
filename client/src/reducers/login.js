import { SIGN_IN_SUCCESS, SIGN_IN_FAIL
   } from "../actions/types";

// set initial logged in state to false
const initialState = {
    loggedIn : false
};

export default (state=initialState, action) => {
    const {type, payload} = action;
    let {loggedIn} = state;
    switch(type){
        case SIGN_IN_SUCCESS:
            loggedIn = [true, {pID: payload}];
            console.log("YOU ARE SIGNED IN");
            return {
                loggedIn
            }
        case SIGN_IN_FAIL:
            loggedIn = false;
            console.log("YOU ARE NOT SIGNED IN");      
            return {
                loggedIn
            }
        default: 
            return state
    };
};