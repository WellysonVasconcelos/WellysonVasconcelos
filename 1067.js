var input = require("fs").readFileSync("stdin","utf8")
var lines = input.split("\n");

var b = parseInt(lines[0])

var a = 1

while(a<=b){
    if (a%2 != 0){
        console.log(a)
    }
    a++
}

