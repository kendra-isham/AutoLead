// dependencies 
import React, { useState } from "react";
import { connect } from "react-redux";
import { userMessage, sendMessage } from "../../actions/watson";
import { Link } from "react-router-dom";

const Chat = ({chat, userMessage, sendMessage}) => {
    // allows variable to grab message from user
    const [message, setMessage] = useState("");
    // will submit user message to api 
    // will only check if user presses enter
    const handleClick = async(e) => {
        const code = e.keyCode || e.which;
        if(code === 13){
            console.log(message + " in click event");
            userMessage(message);
            sendMessage(message);
            setMessage("");
            console.log("dealing with message complete. back in chat.js")
        };
    };


    return (
        <div className="chat">
          <h1>Modem Chat</h1>
          <h5>Please reference the model number for the modem in question.</h5>
          <h5>I can answer questions about modem creditials, GUI vs CLI, Homeworld vs IPC, speed compliance, wifi capability, and port forwarding.</h5>
          <h6>Ex: "Does the DG1670 have wifi?"</h6>
          {/* view stats */}
            <div className="stats">
                <Link to="/stats" className="button">View Stats</Link>
            </div>

            {/* msg === "redirect" ? <Redirect to="/" /> : */}
            <div className="historyContainer">
                {/* Handle Messages */}
                <div className="maxHeight">
                    {chat.length === 0 ? ""
                    : chat.map((msg, index) =>  <div className={msg.type} key={index}> {msg.message}</div>)}
                </div>
            </div>
            {/* get messages */}
            <input id = "chatbox" 
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleClick}
                value={message}
            /> 
        </div>
    )
    
};


const mapStateToProps = (state) => ({
    chat: state.watson.messages
});

// export 
export default connect(mapStateToProps, {userMessage, sendMessage})(Chat);