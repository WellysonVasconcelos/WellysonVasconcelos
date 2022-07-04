let input = require("fs").readFileSync("stdin","utf8")
let lines = input.split("\n");

let result = parseFloat(lines[0]);

let a = [3600, 60, 1];
let total = [];

for (var aa of a) {
    total.push(parseInt(result / aa))
    result = result % aa
};

console.log(`${total[0]}:${total[1]}:${total[2]}`)

