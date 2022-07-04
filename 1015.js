let input = require("fs").readFileSync("stdin","utf8")
let lines = input.split("\n");

let p1 = lines[0].split(' ');
let p2 = lines[1].split(' ');

let a = parseFloat(p1[0]);
let b = parseFloat(p1[1]);
let c = parseFloat(p2[0]);
let d = parseFloat(p2[1]);

let x = Math.pow(c-a, 2);
let y = Math.pow(d-b, 2);

let k = x + y;

let j = (Math.sqrt(k)).toFixed(4);

console.log(j);

