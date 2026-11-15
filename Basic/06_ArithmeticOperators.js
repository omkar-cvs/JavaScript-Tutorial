//Aritmetic Operators

let a = 10;
let b = 5;

//1. Additon
console.log(
  "-------------------------[1. Arithmetic Operator]-------------------------",
);

console.log("Additon : ", a + b);
console.log("Subtraction : ", a - b);
console.log("Multiplication : ", a * b);
console.log("Division : ", a / b);
console.log("Modulo : ", a % b);
console.log("Exponent : ", a ** b);

console.log("Increment : ", ++a);
console.log("Decrement : ", --b);

//2. Logical
console.log(
  "-------------------------[2. Logical Operator]-------------------------",
);

let x = true;
let y = false;

console.log("Logica AND [ture && false] = ", x && y);
console.log("Logica OR [ture || false] = ", x || y);
console.log("Logica NOT [!ture] = ", !x);

//practical example
console.log("--------------practical example-----------------");

let age = 20;
let userId = true;
if (age >= 18 && userId) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible to vote");
}
