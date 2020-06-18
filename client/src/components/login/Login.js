import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "../../actions/login";

const Login = ({login}) => {
    // allows variable to grab message from user 
    const[pID, setPID] = useState("");

    const handleClick = async(e) => {
        const code = e.keyCode || e.which;
        if(code === 13){
            console.log(pID + " in click event");
            login(pID);
            setPID("");
        };
    };
    return (
        <div className="login">
          <h1>Modem Chat</h1>
          <h5>Please Enter your PID</h5>
          
            <div className="loginBox">
               <input id = "pID" 
                onChange={(e) => setPID(e.target.value)}
                onKeyPress={handleClick}
                value={pID}
                />
            </div>
        </div>
    )
    
};

const mapStateToProps = (state) => ({
    login: state.login.loggedIn
});


// export 
export default connect(mapStateToProps, {login})(Login);