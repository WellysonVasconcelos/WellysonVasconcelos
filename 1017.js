let input = require("fs").readFileSync("stdin","utf8")
let lines = input.split("\n");

let a = parseFloat(lines[0]);
let b = parseFloat(lines[1]);

let x = ((a*b) / 12).toFixed(3);
console.log(x);