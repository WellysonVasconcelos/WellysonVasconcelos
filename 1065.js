var input = require("fs").readFileSync("stdin","utf8")
var lines = input.split("\n");

var a = parseInt(lines[0]);
var b = parseInt(lines[1]);
var c = parseInt(lines[2]);
var d = parseInt(lines[3]);
var e = parseInt(lines[4]);

var total = 0

if (a % 2 == 0){
    total++
}if (b % 2 == 0){
    total++
}if (c % 2 == 0){
    total++
}if (d % 2 == 0){
    total++
}if (e % 2 == 0){
    total++
}

console.log(`${total} valores pares`);