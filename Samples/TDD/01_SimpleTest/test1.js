var assert = require('assert');
var expected, current;

describe('String#helper_NEW', function(){
	
	before(function(){
		expected = ['a', 'b', 'c'];
	});
	beforeEach(function(){
		current = 'a,b,c'.split(',');
	});

	it('should return an array', function(){
		assert(Array.isArray(current));
	});
	
	
	it('should return the same array', function(){
		assert.equal(expected.length, current.length, 'Array length are not equal');
		for(var i=0; i<expected.length; i++) {
			assert.equal(expected[i], current[i], i + ' element is not equal');
		}
	});
});