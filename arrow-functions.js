let sum = (a, b) => a + b;


// if only one param
let double = n => n * 2;


// if no args
let sayHi = () => alert("Hello!");

sayHi();
// arrow func can be use as a function expression as an argument in ternary operator
let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
    () => alert('Hello') :
    () => alert("Greetings!");

welcome();

// Sometimes we need something a little bit more complex, like multiple expressions or statements.
// It is also possible, but we should enclose them in curly braces. Then use a normal return within them.

let sum = (a, b) => {  // the curly brace opens a multiline function
    let result = a + b;
    return result; // if we use curly braces, then we need an explicit "return"
};

alert( sum(1, 2) ); // 3


//Task
function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

ask(
    "Do you agree?",
    ()=>  alert("You agreed."),
    ()=>  alert("You canceled the execution.")
);