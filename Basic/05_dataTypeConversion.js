//Data Type Convesion
//-----------------------------------------
let num = "123";
console.log(num);
console.log(typeof num);
console.log("-----------------------------------------");

let valueToNumber = Number(num);
console.log(valueToNumber); //123
console.log(typeof valueToNumber); // string

console.log("----------------[ num2 = '123xyz']-------------------------");
let num2 = "123xyz";
let valueToNumber2 = Number(num2);
console.log(valueToNumber2); // NaN
console.log(typeof valueToNumber2); // number

console.log("----------------[ num3 = true ]-------------------------");
let num3 = true;
let valueToNumber3 = Number(num3);
console.log(valueToNumber3); // 1
console.log(typeof valueToNumber3); // number

console.log("----------------[ num4 = null ]-------------------------");
let num4 = null;
let valueToNumber4 = Number(num4);
console.log(valueToNumber4); // 0
console.log(typeof valueToNumber4); // number

// 2. Boolean
console.log(
  "----------------[ boolean = null ] ->false -------------------------",
);
let bool = null;
let ValueToBoolean = Boolean(bool);
console.log("ValueToBoolean : ", ValueToBoolean); //false
console.log(typeof ValueToBoolean); // boolean

//3 String
console.log("----------------[ string = true ] -> 1 -------------------------");
let str = true;
let ValueToString = String(str);
console.log("ValueToString : ", ValueToString); //true
console.log(typeof ValueToString); // string
