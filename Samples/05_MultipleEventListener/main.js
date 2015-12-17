var events = require('events');
var eventsEmitter = new events.EventEmitter();

var listener1 = function listener1(){
	console.log('Listener1 executed');
}

var listener2 = function listener2(){
	console.log('Listener2 executed');
}


eventsEmitter.addListener('connection', listener1);
eventsEmitter.on('connection', listener2);

var eventsListners = require('events').EventEmitter.listenerCount(eventsEmitter, 'connection');
console.log(eventsListners + " Listener's listening to connection event");

eventsEmitter.emit('connection');

eventsEmitter.removeListener('connection', listener1);
console.log('Listener1 wont listen now');

eventsEmitter.emit('connection');

eventsListners = require('events').EventEmitter.listenerCount(eventsEmitter, 'connection');
console.log(eventsListners + " Listener's listening to connection event");

console.log('Program ended');