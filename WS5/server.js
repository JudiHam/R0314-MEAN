var express = require("express");
var app = express();

app.set("view engine", "ejs");

var data = {users: [
    {name: "Judith", age: 23},
    {name: "Kristoffer", age: 20},
    {name: "Martta", age: 46}
]};

app.get("/", function (req, res) {
    res.render("pages/index", {
        new_heading: "This was passed from the server.js file.",
        new_paragraph: "Lorem Ipsum..."
    });
});

app.get("/users", function (req, res) {
    res.render("pages/users", data);
});

app.listen(3000);
