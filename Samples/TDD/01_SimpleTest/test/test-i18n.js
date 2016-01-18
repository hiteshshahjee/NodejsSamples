var assert = require('chai').assert;
var i18n = require('../lib/i18n');

describe('i18n', function(){
	it('should return correct translation if available', function(){
		assert.equal(i18n('hello'), 'hello');
		assert.equal(i18n('hello', 'en'), 'hello');
		assert.equal(i18n('hello', 'es'), 'hola');
		assert.equal(i18n('beer','en'), 'beer');
		assert.equal(i18n('beer', 'es'), 'cervesa');
	});

	it('should return the input for missing phrase', function(){
		assert.equal(i18n('foobar'), 'foobar');
		assert.equal(i18n('foobar', 'es'), 'foobar');
		assert.equal(i18n('beer', 'jp'), 'beer')
	});

	it('should handle the mixed cases', function(){
		assert.equal(i18n('Beer'), 'beer');
	})
});