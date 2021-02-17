var fs = require('fs');

//Write first file
fs.writeFile('newfile.txt', 'You are reading the first file.', function (err) {
    if (err) {
        console.log('Error!')
    }
    console.log('New file written.');
  }); 

//Write second file
fs.writeFile('newfile2.txt', 'Second file contents.', function (err) {
    if (err) {
        console.log('Error!')
    }
    console.log('Second file written.');
  }); 

//Read the second file's contents into the data variable
var data = fs.readFile('newfile2.txt', 
    function (err, data) {
        if (err) {
            console.log('Error');
        }
        console.log(data.toString());
  });

//Append data from second file to first file
fs.appendFile('newfile.txt', data, 
    function (err) {
        if (err) throw err;
    console.log('Updated!');
  }); 

//Display the results on the console
var newdata = fs.readFile('newfile.txt', 
    function (err, data) {
        if (err) {
            console.log('Error');
        }
        console.log(newdata.toString());
  });
