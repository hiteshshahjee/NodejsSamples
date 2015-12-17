var os = require('os');

console.log('endianness : ' + os.endianness());

console.log('OS type : ' + os.type());

console.log('OS platform : ' + os.platform());

console.log('Hostname : ' + os.hostname());

console.log('Release : ' + os.release());

console.log('Total memory : ' + os.totalmem());

console.log('free memory : ' + os.freemem());