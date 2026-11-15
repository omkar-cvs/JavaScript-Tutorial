//Q1.
let name = "Omkar Singh"; //this is my name

console.log("Name: ", name);

//Q2.

let name1 = "omkar";
let name2 = "omkar";
let name3 = `omkar`;

console.log(name1, name2, name3);

let name4 = "Omakr";
console.log(`Hello ${name4}`);

let firstName = "Omkar";
let lastName = "Singh";
console.log(`Hello , ${firstName} ${lastName}`);
console.log(firstName + " " + lastName);

//Q4 Number to string
console.log();
console.log("------------[Q4. Number to string]------------------");
let number1 = 10;
console.log(number1.toString()); // "10"
console.log(String(number1)); // "10"

//Q5. Array Inside Object
console.log();
console.log("------------[Q5. Array Inside Object]------------------");
let person = {
  name: "Omkar",
  age: 20,
  hobbies: ["reading", "writing", "coding", "walking"],
};

console.log("person =>", person);
console.log("person.hobbies[0] =>", person.hobbies[0]);

//Q6. Object inside array
console.log();
console.log("------------[Q6. Object inside array]------------------");

let persons = [
  {
    name: "Ram",
    age: 20,
  },
  {
    name: "Shyam",
    age: 10,
  },
];

console.log("persons=>", persons);
console.log("persons[0].name =>", persons[0].name);
