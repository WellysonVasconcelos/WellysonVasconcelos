var input = require("fs").readFileSync("stdin","utf8")
var lines = input.split("\n");
var p1 = lines[0].split(' ');

var a = parseFloat(p1[0]);
var b = parseFloat(p1[1]);

if (a<b){
    var tempo = b - a
    console.log(`O JOGO DUROU ${tempo} HORA(S)`);
}else if(a>b){
    var tempo = (24 - a) + b
    console.log(`O JOGO DUROU ${tempo} HORA(S)`)
}else if(a === b){
    console.log('O JOGO DUROU 24 HORA(S)')
}