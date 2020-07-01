Premise:
--- MERN stack
--- username authentication before using the app 
--- answers commonly asked questions about modems and routers using Watson Assistant api
--- logs to a database both the questions asked that Watson could not identify and identified 
--- displays all Watson identified questions in a table 

Code Louisville Requirements fulfilled: 
--- Retrieve data from an external API and display data in your app (such as with fetch() or with AJAX)
--- Create a form and save the response (on click of Submit button) to an external file or API
--- Implement a regular expression (regex) to ensure a field either a phone number or an email address is always stored and displayed in the same format
--- Analyze text and display information about it (ex: how many words in a paragraph)

TODO: 
--- Database: 
    --- export db form to excel 
--- set /chat and /stats as private routes so only logged in users have access 
--- set up redux persist for username so we redirect from / to /chat automatically 

How to run: 
--- Navigate to https://radiant-sea-05632.herokuapp.com/ in your browser 

--- Please login with p0000000 for database tracking purposes. 
    --- the form will allow any p+7 numbers
--- If "message_fail" alerts, please navigate back to https://radiant-sea-05632.herokuapp.com/ and refresh. I am actively troubleshooting this bug.
--- The modem bot can answer a variety of questions about Charter provided internet modems that would be asked by a repair representative during troubleshooting when a customer calls in. 
    --- Questions currently must be formatted with a question topic (ie speed, wifi capability, port forwarding) and a modem model number.
    --- Example questions to ask: 
        --- "How do I login to the CGNM2250?" 
        --- "Do I use homeworld for the f@st router?" 
        --- "What's the max speed for an E31N2V1?"
        --- "Where do I set up port forwarding for a DDW36C?" 

--- To run locally; 
    --- Install dependencies for server
        npm install

    --- Install dependencies for client
        npm run client-install

    --- Run the client & server with concurrently
        npm run dev

    --- Set up .env 
        I will provide .env file for Code Louisville grading purposes 
        
        Required variables in .env: 
            WATSON_ASSISTANT_APIKEY
            WATSON_ASSISTANT_URL
            WATSON_ASSISTANT_ID

            **Watson keys are found under your Watson Assistant settings -> API details 

            MONGO_URL

            **Can be your local URL if running the mongo server or hosted URL. 

    --- Run the Express server only
        npm run server

    --- Run the React client only
        npm run client

    *** Server runs on http://localhost:5000 and client on http://localhost:3000
    *** Built using npm version 6.14.4
