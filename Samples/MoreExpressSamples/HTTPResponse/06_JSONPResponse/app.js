var express = require('express');
var app = express();

var port = 3000;

app.get('/jsonp', function(req, res){
	res.status(200).jsonp({ message:'Hello welcome to JSON response!!!' });
});

app.listen(port, function(){
	console.log('Express server listening on port: ' + port);
});