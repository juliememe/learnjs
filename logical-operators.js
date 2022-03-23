// Logic operators converts everything in boolean (any value)
// OR || finds first truthy and then stops and send the value

let a = true || false; // true
let aa = true || true; // true
let aaa = false || true; //true
let aaaa = false || false; // false

let hour = 9;
(hour < 9 || hour > 18) ? 'Office is closed' : "We're open!";
true || alert("not printed");
false || alert("printed");

// AND &&  finds first falsy value, and bring the result, if everything is true it shows up the last one
// && higher then ||
let b = true && false; // false
let bb = true && true; // true
let bbb = false && true; // false
let bbab = false && false; // false

alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

alert( 1 && 2 && null && 3 ); // null

let x = 1;
(x > 0) && alert( 'Greater than zero!' ); // not readable

// NOT ! convert an operand into boolean of the opposite meaning - reverse
let c = !9; // false
let cc = !-98; //true

// if use !! we just convert variable into boolean
let ccc = !!8; // true

//?? also exists but later

// Tasks
alert( null || 2 || undefined ); //2

// Task 2
alert( alert(1) || 2 || alert(3) ); //alert(1) 2

alert( 1 && null && 2 ); // null

alert( alert(1) && alert(2) ); //1

alert( null || 2 && 3 || 4 ); // 3

let age = 61;
if (age >= 14 && age <= 90){
    alert('yep')
}
//Write an if condition to check that age is NOT between 14 and 90 inclusively.
// Create two variants: the first one using NOT !, the second one – without it.
if ( !(age >= 14 && age <= 90));
if (age < 14 || age > 90);


//__
if (-1 || 0) alert( 'first' ); //alert
if (-1 && 0) alert( 'second' ); // no alert
if (null || -1 && 1) alert( 'third' ); // alert

//--
//Write the code which asks for a login with prompt.
let password;
let login = prompt("Who's there?");
if (login === 'Admin'){
    password = prompt('Put the password');
    if (password === null || password === '' ){
        alert('Canceled');
    }else if (password=== 'TheMaster'){
        alert('Welcome');
    } else{
        alert('Wrong password');
    }
} else if (login === null || login === ''){
    alert('Canceled!');
} else {
    alert("I don't know you!");
}
