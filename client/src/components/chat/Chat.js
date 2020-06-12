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
            console.log(message + " in click event");
            userMessage(message);
            setMessage("");
        };
    };

    return (
        <div className="chat">
          <h1>Modem Chat</h1>

            {/* Handle Messages */}
            {chat.length === 0 ? ""
            : chat.map((msg, index) => <div className={msg.type} key={index}>{msg.message}</div>)}

            {/* get messages */}
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
    chat: state.watson.messages
});

// export 
export default connect(mapStateToProps, {userMessage})(Chat);