import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "../../actions/login";
import store from "../../store";
import { Route } from 'react-router-dom';
import Chat from "../chat/Chat";

 
const Login = ({login}) => {
    // allows variable to grab message from user 
    const[pID, setPID] = useState("");

    const handleClick = async(e) => {
        const code = e.keyCode || e.which;
        if(code === 13){
            console.log(pID + " in click event");
            //TODO: set up regex to make sure p and 7 numbers. if not alert to retry 
            login(pID);
            setPID("");
        };
    };

    return (
        <div className="login">
          <h1>Modem Chat</h1>
          <h5>Please Enter your PID</h5>
            {/*handle pID */}      
            <div className="loginBox">
               <input id = "pID" 
                onChange={(e) => setPID(e.target.value)}
                onKeyPress={handleClick}
                value={pID}
                />
            </div>

            <div className="welcome">
            {console.log("logged in: " + store.getState().login.loggedIn[0])} 
                {
                    store.getState().login.loggedIn[0] ?
                    
                    <Route to='/chat' component={Chat}/> : <Route to={'/'}/>
                }
            </div>
        </div>
    )
};

const mapStateToProps = (state) => ({
    login: state.login.loggedIn
});


// export 
export default connect(mapStateToProps, {login})(Login);