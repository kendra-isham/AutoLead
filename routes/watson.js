// dependencies
const express = require("express");
const router = express.Router();
const parser = require("body-parser");
const AssistantV2 = require("ibm-watson/assistant/v2");
const { IamAuthenticator } = require("ibm-watson/auth");
require("dotenv").config();

// creates instance of assistance
    // authenticate 
const authenticator = new IamAuthenticator({
    apikey: process.env.WATSON_ASSISTANT_APIKEY,
});
    // connect 
const assistant = new AssistantV2({
    version: "2020-06-01",
    authenticator: authenticator,
    url: process.env.WATSON_ASSISTANT_URL,
});

// route to session tokens                             
    // GET 
router.get("/session", async (req, res) => {
    try{
        const session = await assistant.createSession({
            assistantId: process.env.WATSON_ASSISTANT_ID
        });
        res.send(session["result"]);
    }catch(err){
        console.log(process.env.WATSON_ASSISTANT_ID);
        res.send("There was an error connecting");
        console.log(err);
        
    };
});

// handle messages
    //parse the body 
    router.use(parser.urlencoded({extended: false}));
    router.use(parser.json());

    // POST
    router.post("/message", async (req, res) => {
        // Construct payload
        payload = {
            assistantId: process.env.WATSON_ASSISTANT_ID,
            sessionId: req.headers.session_id,
            input: {
              message_type: "text",
              text: req.body.input,
            },
          };
        
        try {
          const message = await assistant.message(payload);
          console.log(payload);
          res.json(message["result"]);
        } catch (err) {
          res.send("There was an error with the payload.");
          console.log(err);
        }
    });

// export routes
module.exports = router;