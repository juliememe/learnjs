// Function Expression
let sayHi = function(){
    alert('Hi!');
}
sayHi();

// function is a special value and it can be copy to another variable
function sayHi(){
    alert('Hi~');
}

let hello = sayHi;

//callback functions we can put as an argument even the whole different function

// the dif between function declaration and function expression, is:
// Function declaration can be called earlier before it's defined, cause Function Declaration is GLOBAL function
// and it can be visible from anywhere in script
// When JavaScript prepares to run the script, it first looks
// for global Function Declarations in it and creates the functions. We can think of it as an “initialization stage”.

sayHi("John"); // Hello, John

function sayHi(name) {
    alert( `Hello, ${name}` );
}
// but if Function Declaration is declared somewhere inside the code block, we cannot execute it from the outer place

// A Function Expression is created when the execution reaches it and is usable only from that moment.
// If the function is created as a part of an expression, it’s called a “Function Expression”.
//and we can use it to have acces from the outer
// Function Declarations are processed before the code block is executed. They are visible everywhere in the block.
    // Function Expressions are created when the execution flow reaches them.
let age = prompt("What is your age?", 18);

let welcome;

if (age < 18) {


    welcome = function() {
        alert("Hello!");
    };

} else {

    welcome = function() {
        alert("Greetings!");
    };

}

welcome(); // ok now

// also it's cool to use