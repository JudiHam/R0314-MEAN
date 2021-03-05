var fs = require("fs");

// Bring express
var express = require("express");

//Bring body-parser (helps handle form data we get with the POST request)
var bodyParser = require("body-parser");

const { json } = require("express");

var app = express();

//Activate body-parser
app.use(bodyParser.urlencoded({ extended: true }));

//To serve static content from project directory
app.use(express.static("./sivut"));

//Create routes
//1. Frontpage
app.get("/", function(req, res) {
    res.sendFile(__dirname + "\\index.html");
  });

//2. Guestbook messages page
app.get("/guestbook", function(req, res) {
    res.sendFile(__dirname + "\\guestbook.html");
});

//3. New message form
app.get("/newmessage", function(req, res) {
    res.sendFile(__dirname + "\\newmessage.html");
});

//4. AJAX message route
app.get("/ajaxmessage", function(req, res) {
    res.sendFile(__dirname + "\\ajaxmessage.html");
});

//Read json file into variable
var file = fs.readFile("sivut/messages.json", 
  function (err, data) {
    if (err) {
      console.log(err);
    }
    //File empty in the beginning
    console.log(data.toString());
    }
);

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
        username: '"' + username + '"',
        country: '"' + country + '"',
        message: '"' + message + '"',
    };
    console.log("newmsg:" + newmsg);
    //Push the object to the json file
    file.push(newmsg);
});

app.listen(3000, function() {
    console.log("Example app listening on port 3000!");
});

