const http = require('http');

http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("Hello I am Purushottam kumar and App developer wow, \n");
    response.end('Purushottam');
}).listen(4800);

console.log("Server running on http://localhost:4800");