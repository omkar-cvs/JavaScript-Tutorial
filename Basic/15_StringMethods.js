//String methods
// length

console.log("--------------------Method: [length]------------------");
let strLen = "omkar";
console.log(strLen.length);

console.log(
  "--------------------Method: [toLowerCase() and toUpperCase()]------------------",
);

let str1 = "OmkaR";
console.log(str1.toLowerCase());
console.log(str1.toUpperCase());
console.log(
  "--------------------Method: [charAt(Number number)]------------------",
);

let str2 = "ABCDEF";
console.log(str2.charAt(4)); // E : it start from 0  so it is E at 4

console.log("--------------------Method: [indexOf(Char ch)]------------------");
console.log(str2.indexOf("D")); //3 // index start from 0 so D is at 3
console.log(str2.indexOf("DE")); // 3

console.log(
  `--------------------Method: [includes(Char ch)]------------------
   is use to check the provided input is available or not returns boolean value[true/false]
  `,
);
console.log(str2.includes("L"));
console.log(str2.includes("D"));

console.log(`---Method: [slice(startIndex,endIndex) rs subString(startIndex,endIndex)]---
    
      1. slice() accept negative value while subString() not
      2. slice() can be used in array while  subString() not
      NOTE: BOTH EXCLUDES LAST INDEX,
      ** slice() is recomended to use
    `);

let str3 = "ABCDEFGHIJK";
console.log("slice(0,3): ", str3.slice(0, 3)); //OUTPUT:[ABC] // A:0, B:1, C:3, D:4
console.log("substring(0,3): ", str3.substring(0, 3)); //OUTPUT:[ABC] // A:0, B:1, C:3, D:4

console.log();
console.log("slice(5,0): ", str3.slice(5, 0)); // OUTPUT: empty
console.log("substring(5,0): ", str3.substring(5, 0)); // OUTPUT:ABCDE

console.log();
console.log("slice(-5): ", str3.slice(-5)); //OUTPUT:GHIJK
console.log("substring(-5): ", str3.substring(-5)); //OUTPUT:ABCDEFGHIJK

console.log();
console.log(
  "--------------------Method: [replace('abc','xyz')]------------------",
);
let str4 = "Omakr Kumar";
console.log(str4.replace("Kumar", "Singh"));

console.log();
console.log("--------------------Method: [split(' ')]------------------");
let str5 = "HTML,CSS,JAVASCRIPT,BOOTSTRAP";
console.log(str5.split(","));

console.log();
console.log("--------------------Method: [trim()]------------------");
let str6 = "   omkar   ";
console.log(str6.trim());

console.log();
console.log("--------------------Method: [concat('singh')]------------------");
let s1 = "omkar";
let s2 = " singh";
let s3 = s1.concat(s2);
console.log(s3);
