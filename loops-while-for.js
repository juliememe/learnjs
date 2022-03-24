// Loops are the way to repeat code several times
while (condition) {
    // code
    // so-called "loop body"
}
// while the condition is truthy, the code from the loop body  is executed
// the single execution of a loop body called an iteration
//f the loop body has a single statement, we can omit the curly braces {…}:
let i = 3;
while (i) alert(i--);

//the DO... WHILE loop
do {
    // loop body
} while (condition);

//the FOR loop
for (let i = 0; i < 5; i++){
    alert(i);
}

// breaking the loop to exit the loop
let sum = 0;

while (true) {
    let value = +prompt("Enter a number", '');
    if (!value) break; // (*)
    sum += value;
}
alert( 'Sum: ' + sum );

// CONTINUE to skip some iterations
for (let i = 0; i < 10; i++){
    if (i % 2 !== 0) continue;
    console.log(i)
}
// BREAK, CONTINUE to the right side of the ternary operator
// (i > 5) ? alert(i) : continue; // continue isn't allowed here

// Tasks
//What is the last value alerted by this code? Why?
let i = 3;

while (i) {
    alert( i-- );
} //1

//__Use the for loop to output even numbers from 2 to 10.
for (let i = 0; i<=10; i++){
    if (i % 2 !== 0) continue;
    console.log(i);
}

// Replace "for" with "while"
for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
}
let i = 0;
while(i<3){
    alert( `number ${i}!` );
    i++;
}

//Repeat until the input is correct
// Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.
    // The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.
    // Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.

let num;
do {
    num = prompt('Put the number greater then 100', 0);
  } while ((num < 100 && num));
