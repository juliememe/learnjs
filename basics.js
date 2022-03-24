// Objects are used to store keyed collections of various data and more complex entities.
//Objects are associative arrays with several special features.
// Property keys must be strings or symbols (usually strings).
// Values can be of any type.

let obj = {};
let obj1 = new Object();

//KEY (property) : VALUE

// to add a new property we may use object name DOT property name = value; or ['value']
obj.name = 'Jane';

// to delete property from the obj
delete obj.name;

// if multiwords property to put in ['']
obj['music sound'] = 'jazz';

// also the way
let key = "likes birds";

// same as user["likes birds"] = true;
user[key] = true;

//computed properties
let greeting = 'Hello';
let obj1 = {
    [greeting] : 'Hola'
}
//the key for obj can be anything, but if it's a num it will be converted into string any reserved word like FOR
let obj = {
    0: "test" // same as "0": "test"
};

//except of __proto__
//reading non-existing property just returns 'undefined'
//also the operator IN
//key in obj
let obj3 = {
    name: "victor",
    age: '34'
}

"name" in obj3; // true
'city' in obj3; //false

//loop for objects FOR...IN
for (let key in obj3){
    console.log(`${key} ${obj3[key]}`);
}

//order in objects if it's numeric it's goes by order from 1 to infinity
let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    // ..,
    "1": "USA"
};

for (let code in codes) {
    alert(code); // 1, 41, 44, 49
}
//to stop this order we can put in the beginning of the numeric key any sign
// if the keys are not numeric they  are listed in the creation order

// Tasks
//Hello, object
/*Write the code, one line for each action:

    Create an empty object user.
    Add the property name with the value John.
    Add the property surname with the value Smith.
    Change the value of the name to Pete.
    Remove the property name from the object.*/
let user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

// Task 2
/*Check for emptiness
    importance: 5
Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
    Should work like that:
    let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false*/
function isEmpty ( obj ){
    for (let key in obj){
        return false;
    }
    return true;
}

// Sum object properties
// importance: 5
// We have an object storing salaries of our team:
// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
//  If salaries is empty, then the result must be 0.
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

function sumUp(obj){
    let sum = 0;
    for (let key in obj){
        sum += obj[key];
    }
    return sum;
}

//Multiply numeric property values by 2
// importance: 3
// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);

// after the call
menu = {
    width: 400,
    height: 600,
    title: "My menu"
};
function multiplyNumeric(obj){
    for (let key in obj){
        if (typeof obj[key] === 'number'){
            obj[key]*=2;
        }
    }
}

