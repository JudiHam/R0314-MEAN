var fs = require("fs");

var data = fs.readFile('example.txt', results);

function results(err, data){
    if (err) return console.error (err);
console.log("The following text is read from the first file:");
console.log(data.toString());
}

var data2 = fs.readFile('example2.txt', results2);

function results2(err, data2){
    if (err) return console.error (err);
    console.log("The following text is from the second file:");
    console.log(data2.toString());
}
