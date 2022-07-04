var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

var a = parseInt(lines[0]);
var b = parseFloat(lines[1]);

soma = 0;

if (a < b) {
  for (i = a; i < b; i++) {
    if (i % 2 != 0) {
      soma += i;
    }
  }
} else {
  for (i = b + 1; i < a; i++) {
    if (i % 2 != 0) {
      soma += i;
    }
  }
}

console.log(soma);
