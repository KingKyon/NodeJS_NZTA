// This is a containerized backend application written by Zane Tait
// this application is a backend API created to test connectivity on desired port

// ENTER YOUR LISTENING PORT IN THE TESTPORT VARIBALE BELOW:
var testport = "443"
// Dependencies
var express = require("express");
// app variable
var app = express();

app.listen(testport, () => {
 console.log("Server listening on port " + testport);
});

app.get("/test", (req, res, next) => {
    res.json(["If you receive this response, you are successfully communicating with Zane's Test API via port " + testport]);
   });