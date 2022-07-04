var input = require("fs").readFileSync("stdin","utf8")
var lines = input.split("\n");


var a = parseFloat(lines[0]);
var b = parseFloat(lines[1]);

var aa = 3.5;
var bb = 7.5;

var y = (((aa*a)+(bb*b))/(aa+bb)).toFixed(5);

console.log(`MEDIA = ${y}`);