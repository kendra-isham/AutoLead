// dependencies 
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import combineReducers from "./reducers";

// connect app to redux dev tools to let chrome dev tool work 
import {composeWithDevTools} from "redux-devtools-extension";

// set up state
const intitialState = {};

// get middleware (thunk)
const middleware = [thunk];

// set up store 
const store = createStore(
    combineReducers, 
    intitialState, 
    composeWithDevTools(applyMiddleware(...middleware))
    );

// export 
export default store;