let zero = ['***', '*.*', '***'];
let one = ['.*.', '.*.', '.*.'];

// Equivalents
let zeroAndone = {
  0: zero,
  1: one,
};

// sample
let input = '1010';

let output = ['', '', ''];

for (let n = 0; n < input.length; n++) {
  let digit = input[n]; // get character
  let lines = zeroAndone[digit]; // Equivalent to the zeros and ones

  for (let line = 0; line <= 3; line++) {
    output[line] += lines[line];
  }
}
// logger
console.log(output[0]);
console.log(output[1]);
console.log(output[2]);
