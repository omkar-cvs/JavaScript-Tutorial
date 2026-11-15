//Comparison Operators
let a = 10;
let b = "10";
console.log(
  "----------------------[1. Comparison Operators]----------------------",
);

console.log("[10 == '10' ] = ", a == b);
console.log("[10 === '10' ] = ", a === b);

console.log("[10 != '10' ] = ", a != b);
console.log("[10 !== '10' ] = ", a !== b);

console.log("[10 > '10' ] = ", a > b);
console.log("[10 < '10' ] = ", a < b);

console.log("[10 >= '10' ] = ", a >= b);
console.log("[10 <= '10' ] = ", a <= b);
console.log();
console.log(
  "----------------------[1. Assignment Operators]----------------------",
);

let x = 10;
console.log(" [x] => ", x);
console.log(" [x += 5] =>", (x += 5)); //15
console.log(" [x -= 5] =>", (x -= 5)); // 10
console.log(" [x *= 5] =>", (x *= 5)); //50
console.log(" [x /= 5] =>", (x /= 5)); // 10
console.log(" [x %= 5] =>", (x %= 5)); //0
console.log(" [x **= 5] =>", (x **= 5)); //0
