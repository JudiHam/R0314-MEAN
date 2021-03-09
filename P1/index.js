var fs = require("fs");

// Bring express
var express = require("express");

var app = express();

//Bring body-parser (helps handle form data we get with the POST request)
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//To serve static content from project directory
app.use(express.static("./sivut"));

//Read json file into variable
var file = fs.readFileSync("sivut/messages.json");

//When receiving data from a web server, the data is a string.
//Parse the data with JSON.parse(), and the data becomes a JS object.
var jsondata = JSON.parse(file);

//Create routes
//Routes not working if the url doesn't have .html, why?

//1. Frontpage
app.get("/", function(req, res) {
    res.sendFile(__dirname + "\\index.html");
});

//2. New message form
app.get("/newmessage", function(req, res) {
    res.sendFile(__dirname + "\\newmessage.html");
});

//3. Next is a route called "sendform" that was declared in the newmessage.html form 
//and reacts to the POST-type request from the form when the send-button is pushed.
app.post("/sendform", function(req, res) {
    //Save response elements as variables 
    console.log(req.body);
    var username = req.body.username;
    var country = req.body.country;
    var message = req.body.message;
    var date = new Date();
    var d = date.toDateString();
    console.log(username + country + message + d);
    //Create a new JS message object 
    var newmsg = {
        username: username,
        country: country,
        message: message,
        date: d,
    };
    console.log("newmsg:" + newmsg);
    //Push the object to the parsed json file
    jsondata.push(newmsg);
    //When sending data back to the server, the data has to be a string.
    //Convert the jsondata JS object into a string with JSON.stringify() and add parameters to format it.
    var data = JSON.stringify(jsondata, "", 1);
    //Add new data to json file
    fs.writeFileSync("sivut/messages.json", data);
    //HOW TO SEND DATA TO GUESTBOOK.HTML?
    res.redirect("newmessage.html");
});

//3. Guestbook messages page
app.get("/guestbook", function(req, res) {
    //How do I add guestbook.html to the response with the table? Also in order to get pure css styling
    var table = '<table class="pure-table">' + '<th>' + "Username" + '</th>' + '<th>' + "Country" + '</th>' + '<th>' + "Message" + '</th>';

    for(var i=0; i<jsondata.length; i++) {
        table += 
        '<tr>' + 
        '<td>' + jsondata[i].username + '</td>' +
        '<td>' + jsondata[i].country + '</td>' +
        '<td>' + jsondata[i].message + '</td>' +
        '<td>' + jsondata[i].date + '</td>'
        '</tr>';
    }
    res.send(table);
});

//5. Route that reacts to ajaxmessage.html ajax request when the send-button is pushed
app.post("/sendajaxform", function(req, res) { 
    //Save form data that ajax has sent to same json file from before
    console.log(req.body);
    //These below aren't working
    var username = req.body.username;
    var country = req.body.country;
    var message = req.body.message;
    console.log(username + country + message);
});

//6. New AJAX message form
app.get("/ajaxmessage", function(req, res) {
    res.sendFile(__dirname + "\\ajaxmessage.html");
});

app.listen(3000, function() {
    console.log("Example app listening on port 3000!");
});

