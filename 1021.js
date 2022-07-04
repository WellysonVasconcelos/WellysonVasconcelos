let input = require("fs").readFileSync("stdin","utf8")
let lines = input.split("\n");

let result = parseFloat(lines[0]);

const notas = [100.00, 50.00, 20.00, 10.00, 5.00, 2.00];
const moedas = [1, 0.50, 0.25, 0.10, 0.05, 0.01];

console.log("NOTAS:")
for (let nota of notas) {
    let resultNotas = parseInt(result / nota);
    console.log(`${resultNotas} nota(s) de R$ ${nota}.00`)
    result = result % nota;
}
console.log("MOEDAS:")
for (let moeda of moedas) {
    let resultMoedas = parseInt(result / moeda);
    console.log(`${resultMoedas} moeda(s) de R$ ${moeda.toFixed(2)}`)
    result = result % moeda
}