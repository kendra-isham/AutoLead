import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "../../actions/login";
import store from "../../store";
//import { Link } from 'react-router';



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
                {store.getState().loggedIn ? 
                    <button className="signedIn" to="/chat">Click Here</button>
                    :
                    <button className="signIn" to="/">Please Sign In</button>}
            </div>
            {/* <div className="welcomeContainer">
                {/* displays a login message when logged in
                <div className="maxHeight">
                    {login.length === 0 ? ""
                    : login.map((pID, index) => <div className={login.pId} key={login.pID}>Hello, {login.pID}</div>)}
                </div>
            </div> */}

        </div>
    )
    
};

const mapStateToProps = (state) => ({
    login: state.login.loggedIn
});


// export 
export default connect(mapStateToProps, {login})(Login);