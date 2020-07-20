# Auto Lead

### Premise

  - MERN stack
  - Answers commonly asked questions about modems and routers using Watson Assistant 
  - Logs all questions to a database
  - Displays all successfully identified questions in a table

### Code Louisville Requirements Fulfilled

  - Retrieve data from an external API and display data in your app (such as with fetch() or with AJAX)
    - Uses IBM Watson Assitant API to receive the appropriate answer from user generator questions
  - Create a form and save the response (on click of Submit button) to an external file or API
    - Uses IBM Watson Assistant API to send user input from browser. 
    - Logs all user generated questions to a mongo database in two collections: successfully and unsuccessfully answered questions
  - Implement a regular expression (regex) to ensure a field either a phone number or an email address is always stored and displayed in the same format
    - Utilized regex to ensure valid PID is entered upon login 
    - Utilitzed regex to clean Watson API response data to be viewed in the browser 
  - Analyze text and display information about it (ex: how many words in a paragraph)
    - Displays all successfully answered intents and entities along with the pID of the user 


### TODO

  - Export table data to excel upon button click
  - Logout button to clear localstorage
  - Fix extra sessionID fetch
  
### Installation
Auto Lead was built with [Node.js](https://nodejs.org/) v12.18.2

Set up .env file
  * I will provide .env file for grading purposes
  * Required .env variables:
    `WATSON_ASSISTANT_APIKEY`
    `WATSON_ASSISTANT_URL`
    `WATSON_ASSISTANT_ID`
    `MONGO_URL`

Install the dependencies for the server in the root file
```sh
$ npm install
```

Install the dependencies for the client
```sh
$ cd client
$ npm install
```

Run the client & server concurrently 
```sh
$ npm run dev
```
Server runs on http://localhost:5000 and client on http://localhost:3000

### How to use
- Please login with p0000000 for database tracking purposes. 
- If "message_fail" alerts, please refresh. 
- The modem bot can answer a variety of questions about Charter provided internet modems that would be asked by a repair representative during troubleshooting when a customer calls. 
    - Questions currently must be formatted with a question topic (ie speed, wifi capability, port forwarding) and a modem model number.
    - Example Questions: 
        - "How do I login to the CGNM2250?" 
        - "Where do I generate the config for TWC?"
        - "What's the max speed for an E31N2V1?"
        - "Where do I set up port forwarding for a DDW36C?" 
        - "Can I port forward 192.168.44.19?"
        - "How do I configure a DG1670?"
        - "How do I utilize tunnels?"