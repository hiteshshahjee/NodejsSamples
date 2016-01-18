var expect = require('chai').expect;

describe('Name database model', function(){
	var randomNames = require('../lib/namesApp');

	 describe('Get random names', function(){
	 	describe('when given input as 3', function(){
	 		it('should return 3 random names', function(){
	 			var names = randomNames.getRandomNames(3);	 			
	 			expect(names).to.be.an('array').with.length(3);
	 			expect(names[0]).to.be.a('string');
	 		});
	 	});
	 });
});