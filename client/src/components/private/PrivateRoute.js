import React from "react";
import {Redirect, Route} from "react-router-dom";

//should probably pull loggedIn from store 

const PrivateRoute = ({component: Component, ...rest}) => {

    let loggedIn = false;
    if((localStorage.pID) && (localStorage.getItem("pID") !== "")) {
        loggedIn = true;
    }
return(
    <Route {...rest} render={props => 
    loggedIn ? 
        ( <Component {...props}/> ) :
        ( <Redirect to = {{
            pathname: "/"}
        } />)
    }
    />
)
};

export default (PrivateRoute);