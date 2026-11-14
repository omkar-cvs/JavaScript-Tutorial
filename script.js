/***********************[1]***************************/

/*
var x = 70;
var x = 50;
x = 100;
console.log(x); // output: 100
*/

/***********************[2]***************************/

/*
let x = 70;
//let x = 50; // redeclare not allowed here as(let x=50)
x = 100;
console.log(x);
*/

/***********************[3]***************************/
/*
const x = 70;
// const x = 50; // redeclare not allowed here as(const x=50)
// x = 100; // re asign is not allowed here as(x=100)
console.log(x);
*/

/***********************[4.1]***************************/
/*
console.log(x); // undefined
var x = 5;
*/

/*
var x;
console.log(x); // undefined
x = 5;
*/
/***********************[4.1]***************************/

/*
console.log(x); // Cannot access 'x' before initialization
let x = 5;
*/

/*
let x;
console.log(x); // undefined
x = 5;
*/
/***********************[4.2]***************************/

/*
const x;
console.log(x); // Missing initializer in const declaration
x = 5;
*/

/*
console.log(x); // Cannot access 'x' before initialization
const x = 5;
*/

//currect is:
//const x = 5;
//console.log(x);
