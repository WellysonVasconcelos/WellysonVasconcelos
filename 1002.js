var input = require("fs").readFileSync("stdin","utf8")
var lines = input.split("\n");


var b = parseFloat(lines[0]);

var n = 3.14159;
var x = b * b

var y = (n * x).toFixed(4);

console.log(`A = ${y}`);