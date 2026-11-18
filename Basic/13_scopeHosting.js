//Scope
//Global Scope
console.log("---------[Global Scope]-------");

let name = "omkar";
function greet() {
  console.log("Welcome to Global Scope " + name);
}
console.log();
console.log();
console.log("Hello " + name);
greet();

console.log("---------[Local/Function scop]-------");

function greet2() {
  let name2 = "Ram";

  console.log("Welcome to Local Scope  " + name2);
}
//console.log("Hello " + name2);// not accessible

greet2();

console.log();
console.log("---------[Block scope]-------");
//Block scope not applicable on var
{
  let name3 = "Shiv";
  var nameVar = "Block Scope not applicable";
  let x = 10;
  const y = 20;
  console.log("Welcome to Block scope , ", name3);
  console.log(x + " + " + y + " => " + (x + y));
}
console.log(nameVar); // block scope not applicable for var

// Hosting

console.log("---------------------------[Hosting]---------------------------");
console.log(" ------------[1]------------ ");

var a = 10;
console.log(a);
console.log();
console.log(" ------------[2]------------ ");
var b;
console.log(b);
b = 10;

console.log();
console.log(" ------------[3]------------ ");
// let and const //TDZ(Tempered Dead Zone)
//console.log(c);
let c = 10;

//Function Hosting
console.log();
console.log();
console.log(
  "------------------------[Function hosting for normal function] -> Hosting working proper-----------------------",
);
greet();
function greet() {
  console.log("Hello I am normal function so Hosting is applicable every way");
}
greet();
console.log();
console.log();
console.log(
  "------------------------[Function hosting for const function or arrow function] -> Hosting not applicable-----------------------",
);

greet4(); //Here hossting not applicable
const greet4 = function () {
  console.log("Hello arrow function , Here hossting not applicable");
};
