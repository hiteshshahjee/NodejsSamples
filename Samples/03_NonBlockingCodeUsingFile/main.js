var fs = require('fs');
fs.readFile('input1.txt', function(error, data){
	if(error)
		return console.error(error);
	console.log(data.toString());
});
console.log('Program ended');