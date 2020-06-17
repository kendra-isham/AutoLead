Premise:
--- MERN stack
--- username authentication before using the app 
--- answers commonly asked questions about modems and routers using watson assistant api
--- collects data about most commonly asked questions and pushes that data to a database 
--- analyze that data to retrieve most commonly asked questions (intents)

Code Louisville Requirements fulfilled: 
--- Retrieve data from an external API and display data in your app (such as with fetch() or with AJAX)
--- Create a form and save the response (on click of Submit button) to an external file or API
--- Analyze text and display information about it (ex: how many words in a paragraph)

TODO: 
--- finish login page 
--- fix "bot" and "user" tags to include pID and no bot
--- connect to mongo db (probably atlas) 
    --- log and count all questions asked by individual pIDs
    --- create button on main chat page to display number of times question has been asked overall 
    --- (if time) generate an email weekly with this data. **I have no clue how to do this.
    --- (if time) display most commonly asked about modem types and questions (ie entities and intents)
--- infinite scroll in the div instead of scrolling the whole page when too many questions are asked 
--- fix issue with not getting sessionID upon first launch of server and having to refresh page. **I have no clue how to do this. 

How to run: 
--- node 12.18.0 
--- npm install 
--- npm run dev 
--- when localhost:3000 starts, please refresh.... it's not a bug it's a feature