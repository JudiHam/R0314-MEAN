var http = require("http");
var fs = require("fs");

http.createServer(function (request, response) {
    if (request.url === "/") {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Nothing to see here!");
    } else if (request.url === "/frontpage") {
        response.writeHead(200, {"Content-Type": "text/html"});
        var frontpage = fs.readFileSync("./frontpage.html");
        response.write(frontpage);
    } else if (request.url === "/contact") {
        response.writeHead(200, {"Content-Type": "text/html"});
        var contact = fs.readFileSync("./contact.html");
        response.write(contact);
    } else if (request.url === "/plaintext") {
        response.writeHead(200, {"Content-Type": "text/plain"});
        var txt = fs.readFileSync("./example.txt");
        response.write(txt);
    } else if (request.url === "/json") {
        response.writeHead(200, {"Content-Type": "text/json"});
        var json = require("./sampledata.json");
        response.write(JSON.stringify(json));
    }
    response.end();
}).listen(3000);

console.log("Server running at http://127.0.0.1:3000/");