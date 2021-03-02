//Create a web server with node and express
// Bring express
var express = require("express");

//Bring body-parser (helps handle form data we get with the POST request)
var bodyParser = require("body-parser");

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

//A route called "sendform" that was declared in the html form 
//and reacts to the POST-type request from the form in newmessage.html
//Redirects the user to the guestbook page where they can see their new message
//Maybe an alert that the message was saved would be good when redirecting? The new message will be on the bottom.
app.post("/sendform", function(req, res) {
    res.redirect("/guestbook.html");
   });

app.listen(3000, function() {
    console.log("Example app listening on port 3000!");
});

