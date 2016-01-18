var assert = require('chai').assert;
var superagent = require('superagent');
var server = require('../lib/httpserver');

describe('server', function(){
	beforeEach(function(done){
		server.listen(4000, function(err){
			done(err);
		});
	});

	afterEach(function(done){
		server.close(function(err){
			done(err);
		});
	});

	it('should return hello world at /', function(done){
		superagent.get('http://localhost:4000').end(function(err, res){
			if(err) {
				return done(err);
			}

			assert.equal(res.status, 200);
			assert.equal(res.text, '<h1>Hello World!</h1>');
			done();
		});
	});

	it('should return a 404 error at /foo', function(done){
		superagent.get('http://localhost:4000/foo').end(function(err, res){
			//console.log(res.status);
			if(err){				
				assert.equal(err.message, 'Not Found');
				assert.equal(res.status, 404);
				assert.equal(res.text, 'Not Found');
				return done();
			}

			done(new Error('Request to /foo should have failed'));
		});
	});
});