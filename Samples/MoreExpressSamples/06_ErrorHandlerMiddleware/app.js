var http = require('http');
var express = require('express');
var responseTime = require('response-time');
//var errorhandler = require('errorhandler');
var app = express();


app.set('view engine', 'jade');
app.set('views', './views');

app.use(express.static('./public'));
app.use(responseTime());
//app.use(errorhandler());

// handling 404 errors
/*
app.use(function(err, req, res, next) {
  if(err.status !== 404) {
    return next();
  }
 
  res.send(err.message || '** no unicorns here **');
});
*/




app.get('/', function(req, res){
	res.render('index');
});

app.get('/readme', function(req, res){
	readme();
	res.render('index');
});

http.createServer(app).listen(3000, function(){
	console.log('Express server listening at localhost on port 3000');
});

app.use(function(err, req, res, next) {
	if(err)
	{
		console.error(err.stack);
  		res.status(404).send("404 - Page not found");   
	}   
});