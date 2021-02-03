var http = require("http");
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('<h1>Hi World<h1>');
    response.end('<table style="border: 1px solid black; width: 60%; text-align: left;"><tr><th>Name</th><th>Address</th><th>City</th></tr><tr><td>Matti</td><td><a href="https://www.google.com/maps/place/Timotie/@60.1524935,24.6378404,17z/data=!3m1!4b1!4m5!3m4!1s0x468df4aa333c48e3:0x5d9778ae783ab687!8m2!3d60.1524935!4d24.6400291">Timotie 1 B 3</a></td><td>Tampere</td></tr><tr><td>Maija</td><td><a href="https://www.google.com/maps/place/Asematie,+02700+Kauniainen/@60.2137418,24.7199866,17z/data=!3m1!4b1!4m5!3m4!1s0x468df40f6e3ad177:0x29dbd32fbf23566b!8m2!3d60.2137418!4d24.7199866">Asematie 4 C 21</a></td><td>Oulu</td></tr></table>'); 
}).listen(3000);
console.log('Server running at http://127.0.0.1:3000/');