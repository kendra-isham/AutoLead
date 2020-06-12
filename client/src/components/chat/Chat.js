// dependencies 
import React, { useState } from "react";
import { connect } from "react-redux";
import { userMessage } from "../../actions/watson";

const Chat = ({chat, userMessage}) => {
    //allows variable to grab message from user
    const [message, setMessage] = useState("");

    //will submit user message to api 
    //will only check if user presses enter
    const handleClick = async(e) => {
        const code = e.keyCode || e.which;
        if(code === 13){
            console.log(message);
            userMessage(message);
            setMessage("");
        };
    };

    return (
        <div className = "chat">
            <h1>Modem Chat</h1>
            <div>Put your question here</div>
            <input id = "chatbox" 
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleClick}
                value={message}
            />
        </div>
    )
};

const mapStateToProps = (state) => ({
    chat: state.messages,
});

// export 
export default connect(mapStateToProps, {userMessage})(Chat);