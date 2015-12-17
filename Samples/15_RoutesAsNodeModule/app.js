var http = require('http');
var express = require('express');
var app = express();
var routes = require('./routes.js')(app);

http.createServer(app).listen(3000, function(){
	console.log('Express app listening on port: ' + 3000);
});