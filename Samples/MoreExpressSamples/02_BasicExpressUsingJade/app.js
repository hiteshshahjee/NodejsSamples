var http = require('http');
var express = require('express');
var app = express();

app.set('view engine', 'jade');
app.set('views', './views');

app.get('/', function(req, res){
	res.render('index');
});

app.get('/say-hello', function(req, res){
	res.render('hello');
});

app.get('/aboutus', function(req, res){
	res.send('<h2>Welcome to Aboutus page!</h2>');
})

http.createServer(app).listen(3000, function(){
	console.log('Express server listening on localhost at port 3000');
});