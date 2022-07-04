var input = require("fs").readFileSync("stdin","utf8")
var lines = input.split("\n");

var a = parseFloat(lines[0]);
var b = parseFloat(lines[1]);
var c = parseFloat(lines[2]);

var aa = 2;
var bb = 3;
var cc = 5;

var y = (((aa*a)+(bb*b)+(c*cc))/(aa+bb+cc)).toFixed(1);

console.log(`MEDIA = ${y}`);