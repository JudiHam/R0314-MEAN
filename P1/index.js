var fs = require("fs");

// Bring express
var express = require("express");

//Bring body-parser (helps handle form data we get with the POST request)
var bodyParser = require("body-parser");

var app = express();

//Activate body-parser
app.use(bodyParser.urlencoded({ extended: true }));

//To serve static content from project directory
app.use(express.static("./sivut"));

//Read json file into variable
var file = fs.readFileSync("sivut/messages.json");

//Parsing the file to json.format
var jsondata = JSON.parse(file);


//Create routes
//1. Frontpage
app.get("/", function(req, res) {
    res.sendFile(__dirname + "\\index.html");
  });

//2. Guestbook messages page
app.get("/guestbook", function(req, res) {
    //Display json message data into table

    console.log(file);
});

//3. New message form
app.get("/newmessage", function(req, res) {
    res.sendFile(__dirname + "\\newmessage.html");
});

//4. AJAX message route
app.get("/ajaxmessage", function(req, res) {
    res.sendFile(__dirname + "\\ajaxmessage.html");
});


//Next is a route called "sendform" that was declared in the newmessage.html form 
//and reacts to the POST-type request from the form.
app.post("/sendform", function(req, res) {
    console.log(req.body);
    var username = req.body.username;
    var country = req.body.country;
    var message = req.body.message;
    console.log(username + country + message);
    //Create a new JS object
    var newmsg = {
        username: username,
        country: country,
        message: message,
    };
    console.log("newmsg:" + newmsg);
    //Push the object to the json file
    jsondata.push(newmsg);
    //Convert to string format 
    var data = JSON.stringify(jsondata, "", 1);
    //Add new data to json file
    fs.writeFileSync("sivut/messages.json", data);
    res.redirect("newmessage.html");
});

app.listen(3000, function() {
    console.log("Example app listening on port 3000!");
});

