var express = require('express');
var app = express();

var port = 3000;

app.get('/json', function(req, res){
	res.status(200).json({ message:'Hello welcome to JSON response!!!' });
});

app.listen(port, function(){
	console.log('Express server listening on port: ' + port);
});