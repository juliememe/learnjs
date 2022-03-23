//Nullish coalescing operator '??' оператор нулевого слияния
// ?? nullish coalescing return operator that is defined (that is not null or undefined
let a = null;
let b = 4;
let c = a ?? b; //b

alert(user ?? "Anonymous"); //if user is not defined it will be 'Anonymous'
// but || also can be used like that BUT there is a difference:
//|| returns the first truthy value.
// ?? returns the first defined value.

//not allowed to use ?? with && and ||
let x = 1 && 2 ?? 3; // Syntax error

//but you may use it with ()
let x = (1 && 2) ?? 3; // Works

// ?? operator has a very low position just a bit higher then ? and !