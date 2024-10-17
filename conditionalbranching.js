//1

let userInput = Number(prompt("Enter a number:"));
if(userInput > 20){
    console.log("Big Number");
}
else{
    console.log("Small Number");
}

//2

let num = Number(prompt("Enter a number:"));
if(num/2){
    console.log("Even Number");
}
else{
    console.log("Odd Number");
}

//3

let temp = prompt("Enter the temperature:")
if(temp > 30){
    alert("It's hot!");
}
else if(temp<10){
    alert("It's cold!");
}
else{
    alert("It's moderate.");
}

//4

let score = prompt("Enter the score:");
if(score >= 90){
    console.log("A grade");
}
else if(score < 90 && score >= 70 ){
    console.log("B grade");
}
else{
    console.log("C grade");;
}

//5

let userName = prompt("Enter your name:");
if(userName = " "){
    console.log("Name is required.")
}

