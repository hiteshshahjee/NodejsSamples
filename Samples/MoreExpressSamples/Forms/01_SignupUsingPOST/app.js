var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//Create application/x-ww-form-urlencoded parser
var urlEncodedParser = bodyParser.urlencoded({ extended:true });

app.set('view engine', 'jade');
app.set('views', './views');

app.get('/signup', function(req, res){
	res.render('signup', {title:'Signup Form'});
});

app.post('/signup', urlEncodedParser, function(req, res){
	var name = req.body.name;
	var email = req.body.email;
	console.log('Name: ' + name);
	console.log('Email: ' + email);
	res.json(req.body);
});

app.listen(3000, function(){
	console.log('Express server listening on port: 3000');
});