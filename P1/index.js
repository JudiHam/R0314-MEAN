//Create a web server with node and express
// Bring express
var express = require("express");
var app = express();

//Create routes
//1. Frontpage
app.get("/", function(req, res) {
    res.send("/frontpage.html");
  });

//2. Guestbook messages page
app.get("/guestbook", function(req, res) {
    res.send("/guestbook.html");
});

//3. New message form
app.get("/newmessage", function(req, res) {
    res.send("/newmessage.html");
});

//4. AJAX message route
app.get("/ajaxmessage", function(req, res) {
    res.send("/ajaxmessage.html");
});

//
app.listen(3000, function() {
    console.log("Example app listening on port 3000!");
});

