var fs = require("fs");

//Write two separate files
fs.writeFileSync('newfile.txt', 'You are reading the first file.');
fs.writeFileSync('newfile2.txt', 'You are reading the second file.');

//read second file into data variable, display contents on the console
var data = fs.readFileSync('newfile2.txt');
console.log(data.toString());

//Append the contents of data to the first file
fs.appendFileSync('newfile.txt', data);

//Read the first file now that the data has been added to it
var newdata = fs.readFileSync('newfile.txt');
//Display content on the console
console.log('This is the new file content: ' + newdata.toString());


