// Map - именнованная коллекци значений, но в отличие от Object ключи могут быть любым типом даже объектами не только  string

let map = new Map(); // create a MAP

map.set('KEY', 'VALUE'); //record key and value into MAP

map.get('KEY'); //get a value by the key! UNDEFINED если ключа нет

map.has("KEY"); // get TRUE if the KEY is exist in the MAP

map.delete("KEY"); // delete value by the KEY / returns TRUE if deleted, and FALSE if not(maybe the value exist)

map.clear(); //delete all the collection of key-values

map.size; // returns the length of map

// set возвращает MAP поэтому можно закидывать значения по цепочке

map.set(1, 'Apple').set(true, 'white').set(87, false);

//Перебор MAP

map.keys();
map.values();
map.entries();

//перебор через FOR...OF
for (let vegetable of recipeMap.keys()) {
    alert(vegetable); // огурец, помидор, лук
}

// перебор по значениям (числа)
for (let amount of recipeMap.values()) {
    alert(amount); // 500, 350, 50
}

// перебор по элементам в формате [ключ, значение]
for (let entry of recipeMap) { // то же самое, что и recipeMap.entries()
    alert(entry); // огурец,500 (и так далее)
}


// можно создать map из объекта
let obj = {
    name: "John",
    age: 30
};

let map = new Map(Object.entries(obj));
// чобы сделать наоборот Объект из Мапа надо
let newObj = Object.fromEntries(map.entries());
