//API KEY http://www.omdbapi.com/?t=hangover&apikey=b4f5e62f

const PORT = process.env.PORT || 5000;

//Create the request
var request = require("request");

var express = require("express");
var app = express();

app.set("view engine", "ejs");

var dirtydancing;
var nana;
var foodwars;

var favs = [];
var data;

//Dirty dancing request
request(
    "http://www.omdbapi.com/?s=dirty+dancing&apikey=b4f5e62f",
    {json:true},
    (err, res, body) => {
        if (err) {
            return console.log(err);
        }
        dirtydancing = {
            title: body.Search[0].Title, 
            year: body.Search[0].Year, 
            postersrc: body.Search[0].Poster
        };
        favs.push(dirtydancing);
});

//NANA request
request(
    "http://www.omdbapi.com/?s=nana&apikey=b4f5e62f",
    {json:true},
    (err, res, body) => {
        if (err) {
            return console.log(err);
        }
        nana = {
            title: body.Search[1].Title, 
            year: body.Search[1].Year, 
            postersrc: body.Search[1].Poster
        };
        favs.push(nana);
});

//Food wars request
request(
    "http://www.omdbapi.com/?s=food+wars&apikey=b4f5e62f",
    {json:true},
    (err, res, body) => {
        if (err) {
            return console.log(err);
        }
        foodwars = {
            title: body.Search[0].Title, 
            year: body.Search[0].Year, 
            postersrc: body.Search[0].Poster
        };
        
        favs.push(foodwars);
        data = JSON.stringify(favs);
        console.log("Data is:" + data);
});

console.log("returned: " + data);

app.listen(PORT, function() {
    console.log("App listening on port 5000!");
});

