var express = require('express');
var randomNames = require('../lib/namesApp');
var _s = require('underscore.string');
var app = express();
var server;

app.get('/hello', function(req, res){
	res.status(200).send('Hello World!');
});

app.get('/greetings', function(req, res){
	var names = randomNames.getRandomNames(3);
	var greeting = 'Greetings from ' + _s.toSentenceSerial(names) + '!';
	res.status(200).send(greeting);
});

var start = exports.start = function start(port, cb){
	server = app.listen(port, cb);
};

var stop stop = exports.stop = function stop(cb){
	server.close(cb);
};