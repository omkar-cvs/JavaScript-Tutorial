//Arrays

let arr = ["A", "2", true, "D"];

console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);

console.log(arr);
arr[4] = "Shiv Kumar";
console.log(arr);
arr[1] = 25;
console.log(arr);
console.log("arr.length : ", arr.length);

//push() and pop()
console.log("----------------arrya methods[push('element'), pop()]");

let numArr = [10, 20, 30];
console.log(numArr);
numArr.push(40); // we can push more then one element
console.log("numArr :", numArr);
console.log("Size of numArr : ", numArr.length);
console.log();

let poppedNum = numArr.pop(); // we can only pop last one and only one element at a time
console.log("poppedNum : ", poppedNum);

console.log("numArr :", numArr);
console.log("Size of numArr : ", numArr.length);

console.log();
//push() and pop()
console.log(
  "----------------arrya methods[shift(), unshift(element1,element2)]",
  //shift(): is used to remove element from start only one at a time
  //unshift(): is used to add element form starting of array one or more then one element can be added at once
);

let shifted = numArr.shift(); // we can only pop last one and only one element at a time
console.log("shifted : ", shifted);

console.log("numArr :", numArr);
console.log("Size of numArr : ", numArr.length);
console.log();

let unshifted = numArr.unshift(1, 2); // we can only pop last one and only one element at a time
console.log("shifted : ", shifted);

console.log("numArr :", numArr);
console.log("Size of numArr : ", numArr.length);
