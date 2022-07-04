var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

var b = parseInt(lines[0]);

var x = 0;

while (x < 6) {
  if (b % 2 != 0) {
    console.log(b)
    x++
  }
  b++;
}
