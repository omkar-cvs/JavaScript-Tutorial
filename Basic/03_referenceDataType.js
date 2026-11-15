//Reference Data Type

//1. Object
console.log("---------1 [DataType: Object]--------------");
let person = {
  name: "omker",
  age: 20,
  city: "Pune",
};

console.log(person.name); //output: Omkar
console.log(person.age); //output: 20
console.log(person.city); //output: Pune
console.log(typeof person); //output: object

//2. Array
console.log("---------2 [DataType: array] --------------");

let fruits = ["Apple", "Bananas", "Mango", "Orange", "Pappya"];
console.log("fruits = ", fruits);

console.log(typeof fruits);

console.log("------------------------------------------------------");
console.log("for (let i = 0; i < fruits.length; i++)");
for (let i = 0; i < fruits.length; i++) {
  console.log(i, fruits[i]);
}

console.log("for (item of fruits) console.log(item);");
for (item of fruits) console.log(item);

console.log("------------------------------------------------------");
console.log("for (const [index, fruit] of fruits.entries())");

for (const [index, fruit] of fruits.entries()) {
  console.log(index, fruit);
  // Output:
  // 0 'apple'
  // 1 'banana'
  // 2 'mango'
}

//3. Function
console.log("---------2 [DataType: array] --------------");

function greet() {
  console.log("Hello Omkar on JavaScript tutorial");
}

console.log(greet); //[Function: greet]
console.log(typeof greet); //function
console.log(
  "----------------------[console.log(greet());]--------------------------------",
);

console.log(greet());
