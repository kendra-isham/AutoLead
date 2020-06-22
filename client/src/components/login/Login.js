import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "../../actions/login";
import store from "../../store";
import Chat from "../chat/Chat";

const Login = ({login}) => {
    // allows variable to grab message from user 
    const[pID, setPID] = useState("");
    const regex = /^[p|P]+[0-9]{7}$/;

    const handleClick = async(e) => {
        const code = e.keyCode || e.which;
        if(code === 13){
            console.log(pID + " in click event");
            if(regex.test(pID)){
                login(pID);
                setPID("");
            }else{
                alert("Please enter p followed by 7 numbers")
            };
            
        };
    };

    return (
        <div className="container">
        <div className="login" id={store.getState().login.loggedIn[0] ? "logged" : "guest"}>
          <h1>Modem Chat</h1>
          <h5>Please Enter your PID</h5>
            {/*handle pID */}      
            <div className="loginBox" id="loginBox">
               <input id = "pID" 
                onChange={(e) => setPID(e.target.value)}
                onKeyPress={handleClick}
                value={pID}
                />
            </div>
        </div>

            <div className="welcome">
            {console.log("logged in: " + store.getState().login.loggedIn[0])} 
                {
                    store.getState().login.loggedIn[0] 
                    ?
                    <Chat /> 
                    :
                    null
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