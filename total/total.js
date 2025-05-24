let readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

let x, y;

rl.on("line", (line) => {
  let tmp = line.split("");
  x = parseInt(tmp[0]);
  y = parseInt(tmp[1]);
  let z = x + y;
  console.log(z);
});
