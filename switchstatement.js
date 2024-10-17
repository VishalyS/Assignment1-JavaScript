//1

let dayNumber = parseInt(prompt("Enter a day number (1-7):")); // Convert input to an integer
let dayName;

switch (dayNumber) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid!";
}

console.log(`${dayNumber} = "${dayName}"`);

//2

let grade = prompt("Enter a grade (A, B, C, D, E, F):"); 
let message;

switch (grade) {
    case 'A':
        message = "A = Excellent";
        break;
    case 'B':
        message = "B = Good";
        break;
    case 'C':
        message = "C = Fair";
        break;
    case 'D':
        message = "D = Poor";
        break;
    case 'E':
        message = "E = Failing";
        break;
    case 'F':
        message = "F = Failing";
        break;
    default:
        message = "Invalid grade!";
}

console.log(message);

//3

let number = parseInt (prompt("Enter a number between 1 and 3:")); 
let result;

switch (number) {
    case 1:
        result= "One";
        break;
    case 2:
        result = "Two";
        break;
    case 3:
        result = "Three";
        break;
    default:
        result = "Invalid input!";
}

console.log(result);

//4

let monthNumber = parseInt(prompt("Enter a month number (1-12):")); 
let monthName;

switch (monthNumber) {
    case 1:
        monthName = "January";
        break;
    case 2:
        monthName = "February";
        break;
    case 3:
        monthName = "March";
        break;
    case 4:
        monthName = "April";
        break;
    case 5:
        monthName = "May";
        break;
    case 6:
        monthName = "June";
        break;
    case 7:
        monthName = "July";
        break;
    case 8:
        monthName = "August";
        break;
    case 9:
        monthName = "September";
        break;
    case 10:
        monthName = "October";
        break;
    case 11:
        monthName = "November";
        break;
    case 12:
        monthName = "December";
        break;
    default:
        dayName = "Invalid!";
}

console.log(`${monthNumber} = "${monthName}"`);

//5

let color = prompt("Enter a color (red, green, blue):"); 
let c;

switch (color) {
    case 'red':
        c = "Red";
        break;
    case 'green':
        c = "Green";
        break;
    case 'blue':
        c = "Blue";
        break;
    default:
        c = "Invalid color!";
}

console.log(c);
