module.exports = function(app){
	app.get('/', function(req,res){
		res.send('Welcome to home page!');
	});

	app.get('/hello.text', function(req,res){
		res.send('Welcome to hello hola!');
	});

	app.get('/contact', function(req,res){
		res.send('contact');
	});
};