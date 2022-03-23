// >  <  >=   <=   ==   ===  !==    !=    !  the result is always a boolean

//String comparison - it compares every letter one by one uses the unicode (dictionary order) of every symbol,
// and if the letters are not equal it shows the result
let a = 'Apple' > 'Cherry';
// 0 is always false but '0' is always true

//when compare different types it converts into numbers
// ==  use type conversion when === compares values without type conversion it's a strict  equality

let b = (0 == false); // true
let bb = ( 0 === false); // false

alert( undefined > 0 ); // false (1)
alert( undefined < 0 ); // false (2)
alert( undefined == 0 ); // false (3)


alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true

alert( null === undefined ); // false
alert( null == undefined ); // true

//Checking for null/undefined separately is a good idea.

// Task
5 > 4                   // true
"apple" > "pineapple"   // false
"2" > "12"              // true
undefined == null       // true
undefined === null      // false
null == "\n0\n"         // false
null === +"\n0\n"       // false
