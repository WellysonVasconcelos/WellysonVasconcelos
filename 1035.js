let input = require("fs").readFileSync("stdin","utf8")
let lines = input.split("\n");

let p1 = lines[0].split(' ');

let a = parseInt(p1[0]);
let b = parseInt(p1[1]);


if (b > c && d > a && (c + d) > (a + b) && (a % 2 === 0)){
    console.log("Valores aceitos")
} else {
    console.log("Valores nao aceitos")
}