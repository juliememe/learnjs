// Object.keys, values, entries поддерживаются структурами Map, Set, Array
// Object.keys(obj).. возвращают реальный массив в отличие от map.keys() который возвращает итерируемый объект
// Так же, как и цикл for..in, эти методы игнорируют свойства, использующие Symbol(...) в качестве ключей.
// у объектов нет методдов массива, но можно их испольховать если трансформировать объект

let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
};

let doublePrices = Object.fromEntries(
    // преобразовать в массив, затем map, затем fromEntries обратно объект
    Object.entries(prices).map(([key, value]) => [key, value * 2])
);

alert(doublePrices.meat); // 8

//Tasks
/*
Сумма свойств объекта

Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.
    Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.
    Если объект salaries пуст, то результат должен быть 0.*/
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function sumSalaries(salaries){
    return Object.values(salaries).reduce((prevValue, currentValue) => prevValue + currentValue);
}

//Подсчёт количества свойств объекта
// Напишите функцию count(obj), которая возвращает количество свойств объекта:
let user = {
    name: 'John',
    age: 30
};

alert( count(user) ); // 2

function countValues(obj){
    return Object.values(obj).length;
}
