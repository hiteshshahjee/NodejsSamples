var express = require('express');
var app = express();
var iniparser = require('iniparser')
var config = iniparser.parseSync('./config.ini')

app.set('view engine', 'jade');
app.set('views', './views');

app.use(express.static('./public'));


app.get('/', function(req, res){
	res.render('index', {title:config.title, message:config.message});
});

app.listen(config.port, function(){
	console.log('Express server listening at localhost on port: ' + config.port);
});

