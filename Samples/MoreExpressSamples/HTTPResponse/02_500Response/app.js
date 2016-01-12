var express = require('express');
var app = express();

app.get('/', function(req ,res){
	res.status(500).send('Forced 500 error response');
});

app.get('/about', function(req ,res){
	res.send(500, 'Forced 500 error response for route about');
});

app.listen(3000, function(req ,res){
	console.log('Express server listening on port: 3000');
});