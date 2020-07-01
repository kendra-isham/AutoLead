// dependencies 
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const past = requuire("path");

// parse on request bodies 
app.use(express.json());
app.use(cors());

// import routes
const watsonRoutes = require("./routes/watson");
app.use("/watson", watsonRoutes);

// use for production
if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "client", "build", "index.html"));
    });
}

// start server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Server is listening on port ", port);
});