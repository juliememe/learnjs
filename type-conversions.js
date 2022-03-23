//alert automatically converts data in it into string
let b = 445;
// alert(b);
let v = String(676); //String() converts also into string '676'
let s = String(false); // 'false'
let a = String(null); // 'null'


//mathematical operations convert values to numbers
let c = '6' / '2' // number 3
let cc = Number('345'); //number 345
let ccc = Number('Hello world!'); //NaN
let ab = Number(false); // 0
let ac = Number(true); // 1
let abc = Number(''); //0
let ccb = Number('    777   '); //777
let bcc = Number(undefined); //NaN


// Boolean conversion
let f = Boolean(''); //false
let ff = Boolean('hjh'); //true
let fff = Boolean(0); //false
let ffff = Boolean(-333); // true
let fffff = Boolean(undefined); // false
let ffffff = Boolean(NaN); // false

