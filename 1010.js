var input = require("fs").readFileSync("stdin","utf8")
var lines = input.split("\n");

var p1 = lines[0].split(' ');
var p2 = lines[1].split(' ');

var a = parseInt(p1[0]);
var b = parseInt(p1[1]);
var c = parseFloat(p1[2]);

var d = parseInt(p2[0]);
var e = parseInt(p2[1]);
var f = parseFloat(p2[2]);

var x = ((b*c)+(e*f)).toFixed(2);

console.log(`VALOR A PAGAR: R$ ${x}`);



