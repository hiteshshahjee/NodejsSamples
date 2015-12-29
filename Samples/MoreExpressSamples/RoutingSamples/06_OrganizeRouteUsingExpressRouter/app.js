var express = require('express');
var app = express();
var articleRouter = express.Router();
var oldRouter_2013 = express.Router();

//Every request to article router will go thru this middleware
articleRouter.use(function(req, res, next){
	console.log(req.method, req.url);
	next();
});

//Validate id for article router
articleRouter.param('id', function(req, res, next, id){
	console.log('Doing validaton on param value: ' + id);
	req.id = id;
	next();
});

//Any request to server will go thru below middleware
app.use(function(req, res, next){
	console.log(req.method, req.url);
	next();
});

articleRouter.get('/', function(req, res){
	res.send('Article home page');
});

articleRouter.get('/new', function(req, res){
	res.send('Add new article');
});

articleRouter.get('/edit/:id', function(req, res){
	res.send('Edit existing article: ' + req.id);
});

articleRouter.get('/delete/:id', function(req, res){
	res.send('Delete article with ID: ' + req.id);
});

oldRouter_2013.get('/', function(req, res){
	res.send('Reading old article');
});

oldRouter_2013.get('/new', function(req, res){
	res.send('Create new article for 2013');
});

app.use('/article', articleRouter);
articleRouter.use('/2013', oldRouter_2013);

app.listen(3000, function(){
	console.log('Express server listening on port: 3000');
});