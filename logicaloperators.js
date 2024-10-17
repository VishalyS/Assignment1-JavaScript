//1

let a = Number(prompt("Enter a number 1:"));
let b = Number(prompt("Enter a number 2:"));
if(a && b > 10){
    console.log ("Both numbers are big");
}
else{
    console.log ("One or both are small");
}

//2

let age = prompt("Enter your age:");
let license = prompt("Do you have a driver's license? (yes/no)");
if (age > 18 && license === "yes") {
    console.log("You can drive.");
} 
else {
    console.log("You cannot drive.");
}

//3

let temp = prompt("Enter the temperature:");
let weather = prompt("Enter the weather condition (rainy/sunny):");
if(temp > 30 && weather === "sunny"){
    console.log("It's a perfect day.")
}

//4

let num = Number(prompt("Enter a number:"));
if(num >= 10){
    console.log("Valid number");
}
else{
    console.log("Negative number");
}

//5

let password = prompt("Enter your password:");
let confirmation = prompt("Confirm your password:");
if(password === confirmation && password !== " "){
    console.log("Passwords match.");
}
else{
    console.log("Password don't match!");
}