var fs = require("fs");

console.log("Program started.");

//Read file function and name the callback function that we will define separately.
fs.readFile('example.txt', results);

//Introduce the function to deal with the fileread results
function results(err, data){
    if (err) return console.error(err);
    console.log("Results of fileread: ");
    console.log(data.toString());
}

for(var i=0; i<150; i++){
    console.log("Node just keeps on going while the file is being read.." + i);
}
