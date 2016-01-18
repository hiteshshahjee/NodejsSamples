/*
//Option 1
var mk = require('mortalkombat');

exports.getRandomNames = function getRandomNames(num) {
	var randomNames = [];

	for(var i=0; i<num; i++) {
		randomNames.push(mk.get());
	}
	
	return randomNames;
};
*/

/*
//Option 2
var _ = require('lodash');
var mk = require('mortalkombat');

exports.getRandomNames = function getRandomNames(num){
	var randomNames = [];

	_.times(num, function getRandomMKNames(){
		randomNames.push(mk.get());
	});
	return randomNames;
};
*/

/*
//Option 3
var _ = require('lodash');
var mk = require('mortalkombat');

exports.getRandomNames = function getRandomNames(num){
	var randomNames = _.times(num, function() { return mk.get(); });
	return randomNames;
};
*/

//Option 4
var _= require('lodash');
var mk = require('mortalkombat');

exports.getRandomNames = function getRandomNames(num) {
	return _.times(num, function() { return mk.get(); });
};