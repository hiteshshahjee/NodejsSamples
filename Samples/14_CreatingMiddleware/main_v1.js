var mod = require('./UtilityModule_V1.js');
var reverse = require('./reverse.js');
console.log(mod.name);
console.log(mod.lower('APPLE'));
console.log(mod.upper('mango'));
console.log(mod.getName());
console.log(mod.getSecret());
console.log(mod.secret);

console.log('Reversed Name is: ' + reverse(mod.name));