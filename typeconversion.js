//1

let userInput = prompt("Enter a number:");
let number = Number(userInput);
let square = number * number;

console.log("The square of " + number + " is " + square + ".");

//2

let Input = prompt("Enter your height in centimeters:");
let heightInCm = Number(Input);
let heightInMeters = heightInCm / 100;

console.log("Your height in meters is " + heightInMeters + " m.");

//3

let user_input = prompt("Enter your year of birth:");
let yearOfBirth = Number(user_input);
let currentYear = new Date().getFullYear();
let age = currentYear - yearOfBirth;

console.log(`You are ${age} years old.`)

//4

let numString = "123";
let num = Number(numString);
let result = num * 2;

console.log(`The result is ${result}.`)

//5

let value = prompt("Enter a boolean value (true or false):");
value = Boolean(value);

console.log(`You entered ${value}`);






