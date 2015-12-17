var express = require('express');
var app = express();
var fs = require('fs');

var user = {
	"user4" : {
      "name" : "hitesh",
	  "password" : "password4",
	  "profession" : "software engineer",
	  "id": 4
   }
}

app.get('/addUser', function(req, res){
	fs.readFile(__dirname + "/" + "users.json", 'utf8', function(err, data){
		if(err)
			console.log(err);
		else
		{
			data = JSON.parse(data);
			data["user4"] = user["user4"];
			console.log(data);
			res.end(JSON.stringify(data));
			//res.end(data);
		}
	});
});

app.get('/deleteUser', function(req, res){
	fs.readFile(__dirname + "/" + "users.json", 'utf8', function(err,data){
		if(err)
			console.log(err);
		else
		{
			data = JSON.parse(data);
			delete data["user" + 2];
			console.log(data);
			res.end(JSON.stringify(data));
		}
	});
});

app.get('/listUsers', function(req, res){
	fs.readFile(__dirname + "/" + "users.json", 'utf8', function(err, data){
		if(err)
			console.log(err);
		else
		{
			console.log(data);
			res.end(data);
		}
	});
});

app.get('/:id', function(req, res){
	console.log("id selected");
	fs.readFile(__dirname + "/" + "users.json", 'utf8', function(err,data){
		if(err)
			console.log(err);
		else
		{
			users = JSON.parse(data);
			var selectedUser = users["user" + req.params.id];
			console.log(selectedUser);
			res.end(JSON.stringify(selectedUser));
		}
	});
});

var server = app.listen(8081, function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log("Server listening at http://%s:%s", host, port);
})