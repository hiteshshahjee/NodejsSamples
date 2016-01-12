var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.status(404).send('Forced 404 error response');
});

app.listen(3000, function(){
	console.log('Express server listening at port: 3000');
});