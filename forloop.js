//1

for(let a = 1; a <= 10 ; a++){
   console.log(a); 
}

//2

for(let b = 2; b <= 20 ; b+=2){
    console.log(b);
}

//3

for(let c = 10; c >= 1 ; c--){
    console.log(c);
}

//4

for(let i = 0; i <= 50 ; i+=3){
    console.log(i);
}

//5

let sum = 0;

for (let d = 0; d < 5; d++) {
    let number = (prompt("Enter a number:")); 
    sum += number; 
}

console.log("The sum of the numbers is: " + sum);