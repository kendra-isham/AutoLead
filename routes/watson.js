// dependencies
const express = require("express");
const router = express.Router();
const parser = require("body-parser");
const AssistantV2 = require("ibm-watson/assistant/v2");
const { IamAuthenticator } = require("ibm-watson/auth");

require("dotenv").config();
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

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
        console.error(err);
    };
});

// handle messages
// connect to and post to database
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
            }
          };
        
        try {
          const message = await assistant.message(payload);
          console.log(payload);
          MongoClient.connect(process.env.MONGO_URL, { useUnifiedTopology: true })
          .then((client) => {
              console.log("connected to the database");
              try{
                client.db().collection('userInput').insertOne({pID: `${req.body.pID}`, input: `${req.body.input}`});
                console.log("userInput added to userInput collection")
              }catch(err){
                  console.error(err);
              }
            })
        
          //database connection and logging
            MongoClient.connect(process.env.MONGO_URL, { useUnifiedTopology: true })
            .then((client) => {
                console.log("connected to the database");
                try{
                    //get intent and entity for database
                    let intent = message.result.output.intents[0].intent;
                    let entity = message.result.output.entities[0].value;
                    let pID = req.body.pID;
                    client.db().collection('messages').insertOne({pID: `${pID}`, intent: `${intent}`, entity: `${entity}`});
                    
                    console.log("data added");
                }catch(err){
                   console.error(err);
                }
            })
            .catch(err => {
                console.error(err);
                client.close();
            })
          res.json(message["result"]);
        } catch (err) {
          res.send("There was an error with the payload.");
          console.error(err);
        }
    });

//GET data from database 
router.get("/data", async (req, res) => { 
    const data = [];   
    try{
        console.log("get request to database received")
        MongoClient.connect(process.env.MONGO_URL, { useUnifiedTopology: true }) 
        .then((client) => {
            //gets the database collection and finds every document 
            client.db().collection('messages').find({}).forEach( doc => {
                    data.push(doc);
                }).then(() => {
                    res.send(data);
                    client.close();
                }) 
            })
    }catch(err){
       console.error(err);
   }
})

module.exports = router;