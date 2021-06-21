let A = 4;
let B = 7;
let recorder;

recorder = A;
A = B;
B = recorder;

console.log(`A = ${A}`);
console.log(`B = ${B}`);