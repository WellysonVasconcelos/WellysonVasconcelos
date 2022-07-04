var input = require("fs").readFileSync("stdin","utf8")
var lines = input.split("\n");
var p1 = lines[0].split(' ');

var a = parseFloat(p1[0]);
var b = parseFloat(p1[1]);


if (a === 1) {
    var conta = b * 4.00
    console.log(`Total: R$ ${conta.toFixed(2)}`)
}else if (a === 2){
    var conta = b * 4.50
    console.log(`Total: R$ ${conta.toFixed(2)}`)
}else if (a === 3){
    var conta = b * 5.00
    console.log(`Total: R$ ${conta.toFixed(2)}`)
}else if (a === 4){
    var conta = b * 2.00
    console.log(`Total: R$ ${conta.toFixed(2)}`)
}else if (a === 5){
    var conta = b * 1.50
    console.log(`Total: R$ ${conta.toFixed(2)}`)
};