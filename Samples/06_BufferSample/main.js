var buf = new Buffer(256);
len = buf.write("Simple Easy Node Learning");
console.log("Octets written: " + len);


console.log("Read from buffer sample");

bufRead = new Buffer(26);
for(var i=0; i < 26; i++){
	buf[i] = i+97;
}

console.log(bu.toString('ascii'));
console.log(buf.toString('ascii', 0, 5));
console.log(buf.toString('utf8', 0, 9));
console.log(buf.toString(undefined, 0, 7));


//Convert buffer to JSON
var json = bug