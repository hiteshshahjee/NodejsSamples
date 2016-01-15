var express = require('express');
var app = express();

var port = 3000;

app.set('view engine', 'jade');
app.set('views', './views');

app.use(express.static('./public'));

//HTML should be prettified. By default its not pretty.
app.locals.pretty = true;

app.get('/', function(req, res){
	res.render('index');
});

app.get('/say-hello', function(req, res){
	res.render('hello');
});

app.get('/aboutus', function(req, res){
	res.send('<h2>Welcome to About us page!</h2>');
});

app.listen(port, function(){
	console.log('Express server listening on port: ' + port);
})