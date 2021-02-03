var http = require("http");
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    if (request.url === '/helloworld') {
        response.end('Hello World'); 
    } else if (request.url === '/homepage') {
        response.end('Homepage');
    } else {
        response.end('Error');
    }
}).listen(3000);
console.log('Server running at http://127.0.0.1:3000/');