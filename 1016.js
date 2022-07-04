let input = require("fs").readFileSync("stdin","utf8")
let lines = input.split("\n");

let x = parseFloat(lines[0]);

let y = x * 2;

console.log(`${y} minutos`);