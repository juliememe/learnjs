// the main purposes of functions: to avoid code duplication.
// Function Declaration
function showMessage() {
    alert( 'Hello everyone!' );
}
// functions can work with inner variables and with outer variables as well
// If a same-named variable is declared inside the function then it shadows the outer one.
let name ='Jhon'; // global variable

function callByName(){
    let name = "Kate";  // local variable
    console.log('Hello ' + name);
}
//We can pass arbitrary (произвольный) data to functions using parameters. it s called argument
function showMessage(from, text) { // parameters: from, text
    alert(from + ': ' + text);
}

showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
showMessage('Ann', "What's up?"); // Ann: What's up? (**)

// we can pass default values, cause if there's no values it will be undefined
function showMessage(from, text = "no text given") {
    alert( from + ": " + text );
}

showMessage("Ann"); // Ann: no text given

// also we can pass functions as a default value
function showMessage(from, text = anotherFunction()) {
    // anotherFunction() only executed if no text given
    // its result becomes the value of text
}

// Alternative default parameters

function showMessage(text){
    if(text=== undefined){
        text= 'No text';
        alert(text);
    }
}

// or we can use ||

function sayHiTo(name){
    name = name || 'Anybody';
    alert (`Hello, ${name}`);
}

// or we can use modern operator ??

function sayHello (name){
    alert(`Hello, ${name ?? 'You!'}`);
}
//Returning a value
function sum(a, b) {
    return a + b;
}

let result = sum(1, 2);
alert( result ); // 3
// If a function does not return a value, it is the same as if it returns undefined:
function doNothing() { /* empty */ }

alert( doNothing() === undefined ); // true

// Tasks
// Rewrite the function using '?' or '||'

function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Did parents allow you?');
    }
}

function checkAge(age){
    return (age > 18) ? true : confirm('Did parents allow you?');
}

 function checkAge(age){
    return (age > 18) || confirm('Did parents allow you?');
 }

 //Function min(a, b)

function min(a, b){
    return a < b ? a : b;
}
min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1

//Function pow(x,n)

function pow(x, n){
    return x ** n;
}