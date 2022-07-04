var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

var array = lines.map(x=>parseInt(x))

var entrada = 0;
var saida = 0;

for (i=1; i <= array[0]; i++){
  if (array[i]>=10 && array[i]<=20) {
    entrada++;
  } else {
    saida++;
  }
}
console.log(`${entrada} in`);
console.log(`${saida} out`);
