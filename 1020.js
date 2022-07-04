let input = require("fs").readFileSync("stdin","utf8")
let lines = input.split("\n");

let result = parseFloat(lines[0]);

let a = [365, 30, 1];
let b = [];

for (let aa of a) {
    b.push(parseInt(result / aa))
    result = result % aa
};

console.log(`${b[0]} ano(s)`);
console.log(`${b[1]} mes(es)`);
console.log(`${b[2]} dia(s)`);