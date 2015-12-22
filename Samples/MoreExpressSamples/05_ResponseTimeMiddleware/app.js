var http = require('http');
var express = require('express');
var responseTime = require('response-time');
var app = express();


app.set('view engine', 'jade');
app.set('views', './views');

app.use(express.static('./public'));
app.use(responseTime());

app.get('/', function(req, res){
	res.render('index');
});

http.createServer(app).listen(3000, function(){
	console.log('Express server listening at localhost on port 3000');
});