// if statement and conditional operator ? 'question mark'
// ternary operator

let state = true;
let result = state ? 'yes' : 'no';


// Multiple ? operator

let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
    (age < 18) ? 'Hello!' :
        (age < 100) ? 'Greetings!' :
            'What an unusual age!';

alert( message );

// Task
if ("0") {
    alert( 'Hello' ); //will be alert
}

// Task 2
//Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’
//If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!”
let jsName = prompt('What is the “official” name of JavaScript?');
jsName === 'ECMAScript' ? alert('Right!') : alert("You don’t know? ECMAScript!");

// Task 3
//Using if..else, write the code which gets a number via prompt and then shows in alert:
//1, if the value is greater than zero,
 //   -1, if less than zero,
 //   0, if equals zero.

let num = prompt('Write a number here');
if (num > 0){
    alert(1);
} else if(num < 0 ){
    alert(-1);
} else if(num === 0){
    alert(0);
}

//Task 3
// Rewrite if..else using multiple ternary operators '?'.
// For readability, it’s recommended to split the code into multiple lines.
let message;

if (login == 'Employee') {
    message = 'Hello';
} else if (login == 'Director') {
    message = 'Greetings';
} else if (login == '') {
    message = 'No login';
} else {
    message = '';
}

let message = login == 'Employee' ? 'Hello' : login == 'Director' ? 'Greetings' :
    login == '' ? 'No login' : '';