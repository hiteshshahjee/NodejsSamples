var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.status(200);
	res.set('X-One', 'One');
	res.set('X-Two', 'Two');
	res.set('Content-Type', 'text/plain');
	res.send('<h1>Sending plain text to client</h1>');
});

app.get('/about', function(req ,res){
	res.status(200);
	res.set('X-One', 'One');
	res.set('X-Two', 'Two');
	res.set('Content-Type', 'text/html'); //Default is text/html
	res.send('<h1>Sending plain text to client</h1>');
});

app.listen(3000, function(){
	console.log('Express server listening on port: 3000');
});