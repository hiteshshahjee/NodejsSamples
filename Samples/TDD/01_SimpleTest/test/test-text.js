var assert = require('chai').assert;
var translate = require('../lib/text');

describe('text module', function(){
	
	it('should return correct translation from a file', function(done){
		
		translate(__dirname + '/phrases.json', 'es', function(err, data){
			if(err) {
				return done(err);
			}

			assert.equal(data.length, 3);
			assert.deepEqual(data, ['hola', 'cervesa', 'i like beer']);
			done();
		});

	});
});