//dependencies 
import { combineReducers } from "redux";

//reducers 
import watson from "./watson";
import login from "./login";

//combine the reducers
const combinedReducers = combineReducers({
    watson,
    login
})

//export
export default combinedReducers;