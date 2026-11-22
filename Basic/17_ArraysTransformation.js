//Iteration on array
//forEach

let arr = [10, 20, 30, 40, 50, 5, 15, 25, 35, 45];

arr.forEach((item, index) => {
  console.log(`${item}, ${index}`);
});

console.log("----Array: [map()]-------------------");
const double = (n) => {
  return n * 2;
};

let dubleNumArr = arr.map((n) => {
  // console.log(double(n));
  return n * 2;
});
//dubleNumArr.forEach((n) => console.log(n));
console.log(arr);
console.log(dubleNumArr);

console.log(
  "----Array: [filter(): return all maching numbers]-------------------",
);
let evenNums = arr.filter((n) => n % 2 === 0);
console.log("evenNums: ", evenNums);

console.log(
  "----Array: [find(): return first matching number]-------------------",
);

let numFunund = arr.find((n) => n < 10);
console.log("numFunund: ", numFunund);

console.log(
  "----Array: [indexOf(): return index of matching number]-------------------",
);

let indexOfNum = arr.indexOf(30);
console.log("indexOfNum 30 =>", indexOfNum);

console.log(
  "----Array: [sort(): sort the array based on string , if there is numbers in array then need to pass logic for sorting because it understant it as string]-------------------",
);

let sortedNums = arr.sort((a, b) => a - b);
console.log(sortedNums);

console.log(
  "------------------------Practical Example----------------------------------",
);

const students = [
  { name: "omkar", score: 80 },
  { name: "Aaradhya", score: 60 },
  { name: "Shreya", score: 95 },
];

let passedStudents = students.filter((student) => student.score >= 80);
console.log("passedStudents: ", passedStudents);
console.log(
  "name Of Passed Students: ",
  passedStudents.map((s) => s.name),
);
