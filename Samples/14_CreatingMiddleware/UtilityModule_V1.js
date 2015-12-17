var secret = 'Shahjee';

module.exports = {
	name: 'Hitesh',

	lower: function(input){
		return input.toLowerCase();
	},

	upper: function(input){
		return input.toUpperCase();
	},

	getName: function(){
		return this.name;
	},

	getSecret: function(){
		return secret;
	}

};