// while and do while loop

let i = 0;
while (i < 6) {
  console.log(i);
  i++;
}
console.log("----------------[do - while loop]----------------------");

let j = 5;
do {
  console.log(j);
  j++;
} while (j < 5);

//Real life example
//belo code will run on browser and prompt for enter a password

let password = "";
let currectPassword = "admin";

do {
  password = prompt("Enter your passowrd");
} while (password != currectPassword);
console.log("Access Granted!");
