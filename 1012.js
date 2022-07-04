var input = require("fs").readFileSync("stdin","utf8")
var lines = input.split("\n");

var p1 = lines[0].split(' ');

var a = parseFloat(p1[0]);
var b = parseFloat(p1[1]);
var c = parseFloat(p1[2]);
var pi = 3.14159;

var t = ((a * c )/2).toFixed(3);

var cir = (pi * (c * c)).toFixed(3);

var tra = (((a+b)*c)/2).toFixed(3);

var q = (b * b).toFixed(3);

var r = (a * b).toFixed(3);

console.log(`TRIANGULO: ${t}`);
console.log(`CIRCULO: ${cir}`);
console.log(`TRAPEZIO: ${tra}`);
console.log(`QUADRADO: ${q}`);
console.log(`RETANGULO: ${r}`);
