var express = require('express');
var multer = require('multer');
var jade = require('jade');
var util = require('util');
var upload = multer({ dest:'uploads/' });
var app = express();

app.set('view engine', 'jade');
app.set('views', './views');

app.get('/signup', function(req, res){
	res.render('signup', {title:'Signup Form'});
});

app.post('/signup', upload.single('profile_images'), function(req, res, next){
	if(req.file){
		console.log(util.inspect(req.file));
		console.log('File uploaded successfully');
	}
	var name = req.body.name;
	var email = req.body.email;
	console.log('Name: ' + name);
	console.log('Email: ' + email);
	console.log(req.body);
	res.json(req.body);
});

app.listen(3000, function(){
	console.log('Express server listening on port: 3000');
});