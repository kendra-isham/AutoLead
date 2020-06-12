// dependencies 
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

// parse on request bodies 
app.use(express.json());
app.use(cors());

// import routes
const watsonRoutes = require("./routes/watson");
app.use("/watson", watsonRoutes);

// start server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Server is listening on port ", port);
});