let input = require("fs").readFileSync("stdin","utf8")
let lines = input.split("\n");

let result = parseFloat(lines[0]);

let notas = [100, 50, 20, 10, 5, 2, 1];

console.log(result);

for (let nota of notas) {
    let resultNotas = parseInt(result / nota);
    console.log(`${resultNotas} nota(s) de R$ ${nota},00`)
    result = result % nota;
};