//Heap vs Stack
//Heap Memory used for dynamic memory allocation, while stack memory  used for static memory allocation
//Heap Memory is managed by programmer, while stack memory is managed by computer

//Heap Memory Example:
let person1 = {
  name: "Ram",
  job: "SE",
  sal: 100,
};

let person2 = person1;

person2.name = "Shyam";

console.log(person1.name);
console.log(person2.name);

//stack memory example

let a = 10;
let b = a;

b = 20;
console.log("a = ", a); // outpiut a=10
console.log("b= ", b); //  outpiut b=20
