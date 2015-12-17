const fs = require('fs');
const childProcess = require('child_process');

for(var i=0; i<3; i++)
{
	var workerProcess = childProcess.fork("support.js", [i]);
	workerProcess.on('close', function(code){
		console.log('Child process exited with code ' + code);
	})
}