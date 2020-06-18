import { SIGN_IN_SUCCESS, SIGN_IN_FAIL
   } from "../actions/types";

// set initial state to message que
const initialState = {
    loggedIn : false
};

export default (state=initialState, action) => {
    const {payload} = action;
    //console.log(action);
    let {loggedIn} = state;
    switch(action.type){
        case SIGN_IN_SUCCESS:
            loggedIn = [true, {loggedIn: payload}];
            console.log("YOU ARE SIGNED IN");
            return {
                state,
                loggedIn
            }
        case SIGN_IN_FAIL:
            loggedIn = false;
            console.log("YOU ARE NOT SIGNED IN");      
            return {
                state,
                loggedIn
            }
        default: 
            return state
    };
};

//export default isLogged;