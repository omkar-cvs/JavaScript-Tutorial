//function declaration

function greet(name) {
  return `Hello ${name}!`;
}
console.log(greet("Omkar Singh"));

const greet2 = function (name) {
  return `Hello ${name}!`;
};

console.log(greet2("Omkar const function"));

const greet3 = (name) => {
  return `Hello ${name}!`;
};

console.log(greet3("Omkar arrow function"));

const greet4 = (name) => `Hello ${name}!`; // if parameter is single the no required the backet

console.log(greet4("Omkar arrow function in single line"));
