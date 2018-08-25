// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//routes

app.get("/", function(req, res) {

    res.sendFile(path.join(__dirname, "index.html"));

});
  
app.get("/add", function(req, res) { //need actual route!!!!
    
    res.sendFile(path.join(__dirname, "add.html"));
});
  