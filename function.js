//1

let userName = prompt("Enter your name:");

function greet(name) {
    console.log(`Hello, ${name}!`);
}

greet(userName);

//2

function add(a, b) {
    return a + b;
  }
  
let result = add(1, 2);
alert( result );

//3

function isEven(number) {
    return number % 2 === 0; 
}

let number = (prompt("Enter a number:"));
console.log(isEven(number));

//4

function square(num) {
    return num**2;
}
let num = (prompt("Enter a number:"));
console.log(square(num));

//5

function double(numb){
    return  numb*2;
}
let numb = (prompt("Enter a number:"));
console.log(double(numb));
