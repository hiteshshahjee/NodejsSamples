module.exports = function(input){
	var reversed = '';
	var i = input.length-1;
	while(i>-1)
	{
		var letter = input[i];
		reversed += letter;
		i--;
	}

	return reversed;
};