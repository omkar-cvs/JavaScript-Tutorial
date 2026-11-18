//If-Else or else if

//if-else statement

let ageNum = 10;
if (ageNum > 18) {
  console.log("You are adult");
} else {
  console.log("You are minor");
}

console.log();
console.log("-------------------------[if else if]-------------------------");

let mark = 50;
if (mark >= 80) {
  console.log("You have passed with distinction");
} else if (mark >= 60) {
  console.log("You have passed");
} else if (mark >= 40) {
  console.log("You have promoted");
} else {
  console.log("You have failed");
}

console.log();
console.log("-------------------------[switch]-------------------------");

let day = 5;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saterday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid Input");
}

console.log();
console.log(
  "-------------------------[Tenery Operator]-------------------------",
);

let x = 10;

let result = x > 10 ? "Number id Greater Then 10" : "Number id Less Then 10";

console.log("result: ", result);

//realife example
let isLogin = false;

let message = isLogin ? "Welcome back" : "Please Login";

console.log("Message : ", message);

let age = 10;

let resultValue =
  age < 18
    ? "You are minor"
    : age < 60
      ? "You are adult"
      : "You are senior citizen";

console.log("Reslut Value : ", resultValue);
