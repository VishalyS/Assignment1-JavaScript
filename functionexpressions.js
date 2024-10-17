//1

let subtract = function(a, b) {
    return a - b; 
};

let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");
console.log(`The difference is: ${subtract(num1, num2)}`); 

//2

let multiply = function(a, b) {
    return a * b; 
};

let a = prompt("Enter the first number:");
let b = prompt("Enter the second number:");
console.log(`The difference is: ${multiply(a, b)}`); 

//3

let division = function(x, y) {
    return x / y; 
};

let x = prompt("Enter the first number:");
let y = prompt("Enter the second number:");
console.log(`The quotient is: ${division(x, y)}`);

//4

let isPositive = function(number) {
    return number > 0;
};

let numb = prompt("Enter a number:");
console.log(`Is the number positive? ${isPositive(numb)}`);

//5

let greetPerson = function(name) {
    console.log(`Welcome, ${name}!`); 
};

let userName = prompt("Enter your name:");
greetPerson(userName); 



 
