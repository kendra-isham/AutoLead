import { SIGN_IN_SUCCESS, SIGN_IN_FAIL
   } from "../actions/types";
import history from "../history";


// set initial logged in state to false
const initialState = {
    loggedIn : [false, ""]
};

export default (state=initialState, action) => {
    const {type, payload} = action;
    let {loggedIn} = state;
    switch(type){
        case SIGN_IN_SUCCESS:
            loggedIn = [true, payload];
            console.log("YOU ARE SIGNED IN");
            history.push("/chat");
            return {
                loggedIn
            }
        case SIGN_IN_FAIL:
            loggedIn = [false, payload];
            console.log("YOU ARE NOT SIGNED IN");  
            history.push("/");    
            return {
                loggedIn
            }
        default: 
            return initialState
    };
};