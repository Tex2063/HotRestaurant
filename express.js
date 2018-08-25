// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

//Variables
//===============================================================

var tables = [];

var waitlist = [];

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.get("/", function (req, res) {

    console.log("home page requested");

    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function (req, res) {

    console.log("table page requested");

    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function (req, res) {

    console.log("reservation page requested");

    res.sendFile(path.join(__dirname, "reserve.html"));
});


// POST section
//================================================================

// Create new reservations - takes in JSON input
app.post("/reserve", function (req, res) { //need actual route!!

    // req.body hosts is equal to the JSON post sent from the user
    var newReservation = req.body;

    console.log(newReservation);

    //  IF-ELSE statement for pushing user input to either tables or waitlist array
    if(tables.length <= 5) {

        // We then add the json the user sent to the waitlist array
        waitlist.push(newReservation);

        // We then display the JSON to the users
        res.json(newReservation);


    }
    else {

        // We then add the json the user sent to the tables array
        tables.push(newReservation);

        // We then display the JSON to the users
        res.json(newReservation);

    }
});

// LISTEN section
// =============================================================

app.listen(PORT, function () {

    console.log("App listening on PORT " + PORT);

});