//dependencies 
import { combineReducers } from "redux";

//reducers 
import watson from "./watson";
import login from "./login";
import database from "./database";

//combine the reducers
const combinedReducers = combineReducers({
    watson,
    login,
    database
})

//export
export default combinedReducers;