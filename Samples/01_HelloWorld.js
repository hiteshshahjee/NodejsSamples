var http = require('http');

http.createServer(function (request, response) {
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Hello, Node! \n');
	console.log('Request accepted from client!');
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');

