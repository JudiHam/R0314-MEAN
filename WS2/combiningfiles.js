var fs = require("fs");

//Write two separate files
fs.writeFileSync('newfile.txt', 'You are reading the first file. ');
fs.writeFileSync('newfile2.txt', 'You are reading the second file. ');

//read second file into data variable
var data = fs.readFileSync('newfile2.txt');

//Append the contents of data to the first file
fs.appendFileSync('newfile.txt', data);
//Append the text "I wrote this too" to the end of the file
fs.appendFileSync('newfile.txt', 'I wrote this too! ');

//Read file with new contents into a variable
var data2 = fs.readFileSync('newfile.txt');

//Replace the newfile.txt contents with "I wrote this!"
fs.writeFileSync('newfile.txt', 'I wrote this! ')
//Append the rest of the data after that text
fs.appendFileSync('newfile.txt', data2)

//Read the file now that the data has been added to it
var finaldata = fs.readFileSync('newfile.txt');
//Display content on the console
console.log('This is the new file content: ' + finaldata.toString());


