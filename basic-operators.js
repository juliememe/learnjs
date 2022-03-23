// + addition
// * multiplication
// - subtraction
// / division
// % remainder  5 % 2 = 1
// ** exponentiation 2 ** 3 = 8


//unary operator just for one operand: -2
// binary operator has two operands: 2+2

//string concatenation +
let a = 'Hello' + 'world';
// + with string and not a string makes string
let b = 'Hello' + 111; // 'Hello111'

// unary + converts string/boolean into a number
let c  = +'123' + 1; // 124

//unary + has the biggest priority
// = has one of the smallest priority that's why we can start with it
let d = 2 + 2 / 3 ** 7;

//modify in place
let e = 1;
e += 45; //46
e *= 2; // 90


// ++ increment increases a variable by 1, can be applied only to variables not with numbers
let f =1;

// variable++ when we want to increase the value, but to use its previous value
f++; //1

// ++variable when we want to increase it immediately and use
++f; //3

// -- decrement

// , into expression throw away everything but the last value, but it's bad for readability
let g = (1 + 2, 3 + 4);


// Tasks
let a = 1, b = 1;

let c = ++a; // 2
let d = b++; // 1

//-------
let a = 2;

let x = 1 + (a *= 2); //5

//_____
"" + 1 + 0      // 10
"" - 1 + 0      // -1
true + false    // 1
6 / "3"         //2
"2" * "3"       //6
4 + 5 + "px"    //'9px'
"$" + 4 + 5     //'$45'
"4" - 2         //2
"4px" - 2       //NaN
"  -9  " + 5    // '   -9   5'
"  -9  " - 5    // -14
null + 1        // 1
undefined + 1   // NaN
" \t \n" - 2    // -2


//____ The result should be 3.
let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(+a + +b); // 12




