var path = require('path');

console.log('Normalization : ' + path.normalize('/test/test1//2slashes/1slash/tab/..'));

console.log('Join Path : ' + path.join('/test', 'test1', '2slashes/1slash', 'tab', '..'));

console.log('Resolve : ' + path.resolve('main.js'));

console.log('Extension Name : ' + path.extname('main.js'));