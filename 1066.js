var input = require("fs").readFileSync("stdin","utf8")
var lines = input.split("\n");

var a = parseInt(lines[0]);
var b = parseInt(lines[1]);
var c = parseInt(lines[2]);
var d = parseInt(lines[3]);
var e = parseInt(lines[4]);

var inicioPar = 0;
var inicioImpar = 0;
var inicioPos = 0;
var inicioNeg = 0;

if (a % 2 == 0){
    inicioPar++
}if (a >= 1){
    inicioPos++
}if (a < 0){
    inicioNeg++
}if (a % 2 != 0){
    inicioImpar++
}if (b % 2 == 0){
    inicioPar++
}if (b >= 1){
    inicioPos++
}if (b < 0){
    inicioNeg++
}if (b % 2 != 0){
    inicioImpar++
}if (c % 2 != 0){
    inicioImpar++
}if (c % 2 == 0){
    inicioPar++
}if (c >= 1){
    inicioPos++
}if (c < 0){
    inicioNeg++
}if (d % 2 == 0){
    inicioPar++
}if (d >= 1){
    inicioPos++
}if (d < 0){
    inicioNeg++
}if (d % 2 != 0){
    inicioImpar++
}if (e % 2 == 0){
    inicioPar++
}if (e >= 1){
    inicioPos++
}if (e < 0){
    inicioNeg++
}if (e % 2 != 0){
    inicioImpar++
}

console.log(`${inicioPar} valor(es) par(es)`);
console.log(`${inicioImpar} valor(es) impar(es)`);
console.log(`${inicioPos} valor(es) positivo(s)`);
console.log(`${inicioNeg} valor(es) negativo(s)`);
