// objects are stored and copied by reference, it means that the variable just saves the reference on this object,
// but the values itselves save somewhere in the memory

let user={
    name: 'Jhoanna'
}
let admin = user; // copy the reference
//if we modify one object the store of another also will be changed

//comparison by reference
//two objects are equal to each other only if it the same object
let obj1 = {
    1: 'uno'
}
let obj2 = obj1;

obj1 == obj2; //true
obj1 === obj2; //true

//Objects don't have a special method for cloning objects but we can create an empty object and copy properties from the first one
let obj3 = {
    name: 'Anna'
}

let obj4 = Object.assign({}, obj3);// Object.assign({} - en empty obj, as many sources as we need);
// If the copied property name already exists, it gets overwritten:
// if we have nested objects inside object properties, we need to check if the property is an object or not before cloning
