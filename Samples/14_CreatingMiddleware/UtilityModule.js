var name = exports.firstName = 'Hitesh';
var secret = 'Shahjee';

exports.lower = function(input){
	return input.toLowerCase();
};

exports.upper = function(input){
	return input.toUpperCase();
};

exports.getName = function(){
	return name;
};

exports.getSecret = function(){
	return secret;
}

