var express = require('express');
var jade = require('jade');
var app = express();

var port = 3000;

app.set('view engine', 'jade');
app.set('views', './views');

app.use(express.static('./public'));

app.get('/', function(req, res){
	res.render('index');	
});

app.get('/error', function(req, res){
	junk();
});

app.get('/say-hello', function(req, res){
	res.render('hello');
});

app.get('/aboutus', function(req ,res){
	res.send('<h2>Welcome to aboutus page!!!</h2>');
});

app.listen(port, function(){
	console.log('Express server listening on port: ' + port);
});

app.use(function(req, res, next){
	res.status(400);
	res.render('404.jade', 
	{
		title:'404',
		message: 'File not found'
	});
});

app.use(function(error, req, res, next){
	res.status(500);
	res.render('500.jade', 
	{
		title: '500',
		message: 'Server error'
	});
});