//for Loop

//
"use strict";
let arr = [];
for (let i = 0; i < 11; i++) {
  console.log(i);
  arr[i] = i * i;
}
console.log("Array Elements:");

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.log("---------------------------------");
let person = {
  name: "Omkar",
  job: "SE",
  sal: 500,
};
console.log("for loop for object : " + person);

for (let key in person) {
  console.log(key + "   :   " + person[key]);
}

console.log("for loop for array object or string");
let ar = [10, 20, 30, 40, 50];

for (let num of ar) {
  console.log(num);
}

console.log("for loop for array object or string");
let str = "Shyam";

for (let char of str) {
  console.log(char);
}

const students = [
  { name: "Ram", age: 20 },
  { name: "Shyam", age: 10 },
  { name: "Shiv", age: 30 },
];

for (let student of students) {
  console.log(student.name, student.age);
}
