Premise:
--- MERN stack
--- username authentication before using the app 
--- answers commonly asked questions about modems and routers using watson assistant api
--- collects data about most commonly asked questions and pushes that data to a database 
--- display data to determine the most frequently asked questions per user and overall

Code Louisville Requirements fulfilled: 
--- Retrieve data from an external API and display data in your app (such as with fetch() or with AJAX)
--- Create a form and save the response (on click of Submit button) to an external file or API
--- Implement a regular expression (regex) to ensure a field either a phone number or an email address is always stored and displayed in the same format
--- Analyze text and display information about it (ex: how many words in a paragraph)

TODO: 
--- Database: 
    --- /stats needs to display info from database based off user input 
    --- (if time) generate an email weekly with this data in excel form. **I have no clue how to do this.
--- infinite scroll in the div instead of scrolling the whole page when too many questions are asked 
--- set up hosting with heroku 
--- figure out localstorage to have a persistant logged in state
--- set /chat and /stats as private routes so only logged in users have access 

How to run: 
--- will have to be hosted unless i share api key info i think
