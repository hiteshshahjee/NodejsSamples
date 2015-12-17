var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});

app.use(express.static('public'));

/*
app.get('/', function(req,res){
	res.send('Hello World');
});
*/


app.get('/process_get', function(req, res){
	response = {
		firstName:req.query.firstName,
		lastName:req.query.lastName
	};
	console.log(response);
	res.end(JSON.stringify(response));
})

app.get('/', function(req,res){
	console.log("Got a GET request for the homepage");
	res.send('Hello GET');
});

app.post('/', function(req,res){
	console.log("Got a POST request for the homepage");
	res.send('Hello POST');
});

app.post('/process_post', urlencodedParser, function(req, res){
	response = {
		firstName:req.body.firstName,
		lastName:req.body.lastName
	}
	console.log(response);
	res.end(JSON.stringify(response));
});

app.delete('/del_user', function(req,res){
	console.log("Got a DELETE request for /del_user page");
	res.send('Hello DELETE');
});

app.get('/list_user', function(req,res){
	console.log("Got a GET request for /list_user page");
	res.send('Page Listing');
});

app.get('/ab*cd', function(req,res){
	console.log("Got a GET request for /ac*cd page");
	res.send('Page Pattern Match');
});

var server = app.listen(8081, function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log("Server listening at http://%s:%s", host, port);
})
