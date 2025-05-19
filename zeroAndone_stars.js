let zero = [["***"], ["*.*"], ["***"]];
let one = [[".*."], [".*."], [".*."]];

let zeroAndone = {
  0: zero,
  1: one,
};

let input = "0101";

let output = ["", "", ""];

for (let n = 0; n < input.length; n++) {
  let digit = input[n];
  let lines = zeroAndone[digit];
  for (let line = 0; line < 3; line++) {
    output[line] += lines[line][0];
  }
}
// logger
console.log(output[0]);
console.log(output[1]);
console.log(output[2]);
