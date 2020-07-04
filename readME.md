# Auto Lead

### Premise

  - MERN stack
  - Answers commonly asked questions about modems and routers using Watson Assistant 
  - Logs all questions to a database
  - Displays all successfully identified questions in a table

### Code Louisville Requirements Fulfilled

  - Retrieve data from an external API and display data in your app (such as with fetch() or with AJAX)
  - Create a form and save the response (on click of Submit button) to an external file or API
  - Implement a regular expression (regex) to ensure a field either a phone number or an email address is always stored and displayed in the same format
  - Analyze text and display information about it (ex: how many words in a paragraph)


### TODO:
  - Export table data to excel upon button click
  - pID in store needs to persist after page refresh
  - Logout button to clear localstorage
  - Fix 5 minute Watson session timeout that throws message_fail erro
  
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
- If "message_fail" alerts, please navigate back to https://radiant-sea-05632.herokuapp.com/ or http://localhost:3000 and refresh. 
- The modem bot can answer a variety of questions about Charter provided internet modems that would be asked by a repair representative during troubleshooting when a customer calls. 
    - Questions currently must be formatted with a question topic (ie speed, wifi capability, port forwarding) and a modem model number.
    - Example Questions: 
        - "How do I login to the CGNM2250?" 
        - "Do I use homeworld for the f@st router?"
        - "What's the max speed for an E31N2V1?"
        - "Where do I set up port forwarding for a DDW36C?" 
        - "Can I port forward 192.168.44.19?"
