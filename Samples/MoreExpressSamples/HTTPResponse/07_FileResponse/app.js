var express = require('express');
var app = express();

var port = 3000;

app.get('/sendfile', function(req, res){
	res.sendfile('./help.jpg', function(err){
		if(err) {
			console.log(err);
		}
		else {
			console.log('file sent successfully');
		}
	});
});

app.get('/download', function(req, res){
	res.download('./help.jpg', function(err){
		if(err) {
			console.log(err);
		}
		else {
			console.log('File downloaded successfully');
		}
	});
});

app.listen(port, function(){
	console.log('Express server listening on port: ' + port);
});