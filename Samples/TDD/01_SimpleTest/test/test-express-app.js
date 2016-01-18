var expect = require('chai').expect;
var superagent = require('superagent');

describe('Sample web application', function(){
	
	var expressApp = require('../lib/express-app');
	var port = 3000;
	var baseUrl = 'http://localhost:' + port;

/*
	before(function(done){
		expressApp.start(port, done);
	});

	after(function(done){
		expressApp.stop(done);
	});

*/
	describe('when requested at /hello', function() {
	
		it('should say hello', function(done){
			superagent.get(baseUrl + '/hello').end(function(err, res){
				expect(err).to.be.not.ok;
				expect(res).to.have.property('status', 200);
				expect(res.text).to.be.equal('Hello World!');
				done();
			});
		});

	});
});