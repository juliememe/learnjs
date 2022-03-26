// функция - конструктор объектов должна называться с большой буквы и при ее использовании нужно keyword NEW

function Person(name, age){
    //неявно создается новый объект и он присваивается this = {}

    //к нему добавляются свойства
    this.name = name;
    this.age = age;

    // return this;    неявно
}

let person1 = new Person('Jane', 32);
let person2 = new Person('Kevin', 21);

//методы для объекта в конструкторе

function User(name){
    this.name = name;
    this.sayHi = function (){
        console.log(`Hello, ${this.name}! Have a good day, my friend!`);
    }
}
//Обычно конструкторы ничего не возвращают явно. Их задача – записать все необходимое в this, который в итоге станет результатом.
// Но если return всё же есть, то применяется простое правило:
//
//     При вызове return с объектом, будет возвращён объект, а не this.
//     При вызове return с примитивным значением, примитивное значение будет отброшено.

function Animal(animal){
    this.animal = animal;

    return { animal: 'Lion'};
}

let newAnimal = new Animal('Cat'); // { animal: 'Lion'};

function Animal(animal){
    this.animal = animal;

    return 'Lion'; // будет отброшено
}
let newAnimal1 = new Animal('Cat'); // { animal: 'Cat'};

// Tasks
// Возможно ли создать функции A и B в примере ниже, где объекты равны new A()==new B()?
function A() { ... }
function B() { ... }

let a = new A;
let b = new B;

alert( a == b ); // true

// если обе функции возвращают один и тот же объект
let obj = {};

function A() { return obj; }
function B() { return obj; }

alert( new A() == new B() ); // true

// Task 2
/*Создание калькулятора при помощи конструктора
важность: 5
Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:

    read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
sum() возвращает сумму введённых свойств.
mul() возвращает произведение введённых свойств.*/

function Calculator(){
    this.a;
    this.b;
    this.read = function (){
        this.a = +prompt('Введите первое значение', 0);
        this.b = +prompt('Введите второе значение', 0);
    }

    this.sum = function (){
        alert(this.a + this.b);
    }

    this.mul = function (){
        alert(this.a * this.b);
    }
}

let sum = new Calculator();