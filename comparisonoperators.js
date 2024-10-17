//1

let num = Number(prompt("Enter a number:"));
if(num > 10){
    alert("Greater than 10");
}
else{
    alert("Less or equal to 10.");
} 

//2

let a = Number(prompt("Enter a number 1:"));
let b = Number(prompt("Enter a number 2:"));
if(a > b){
    alert(`${a} is greater`);
}
else if (a < b) {
    alert(`${b} is greater`);
} 
else {
    alert("Both numbers are equal.");
}

//3

let age = Number(prompt("Enter your age:"));
if(age===18){
    alert("You're exactly 18!");
}
else{
    alert("You're not 18.");
}

//4

let value1 = Number(prompt("Enter a number 1:"));
let value2 = Number(prompt("Enter a number 2:"));
if(value1===value2){
    alert("Equal numbers");
}
else{
    alert("Different numbers");
}

//5

let input = Number(prompt("Enter a number:"));
if(input < 0){
    console.log("Negative");
}
else{
    console.log("Non-negative");
}
