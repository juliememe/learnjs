let user = {
    name: 'Jhoe',
    age: 34,
    sayHi(){
        console.log(`Hello, my name is ${this.name}`)
    }
};

user.sayHi();

let admin = {
    name: 'Fen',
    age: 35
};

admin.sayHi = user.sayHi;
admin.sayHi();

//this это объект перед точкой, который использовался во время вызова метода
//this не привязывается к объекту, а вычисляется во время выполнения кодаб и высчитывается соответственно тоже в этот момент
//Когда функция вызывается синтаксисом «метода» – object.method(), значением this во время вызова является объект перед точкой.
var name;

let obj1 = {
    name: 'Pete'
};
let obj2 = {
    name: 'David'
};

function sayHi(){
    console.log(`Hello, I'm ${this.name}`);
}

sayHi();
obj1.foo = sayHi;
obj2.foo = sayHi;

obj1.foo();
obj2.foo();
//стрелочные функции не имеют своего  this и берут его из внешней функции
let user1 = {
    name: 'Kate',
    sayHi(){
        let hey = () => console.log(`hello, ${this.name}`);
        hey();
    }
}

user.sayHi(); // hello, Kate

//Для работы вызовов типа user.hi(), JavaScript использует трюк – точка '.' возвращает не саму функцию,
// а специальное значение «ссылочного типа», называемого Reference Type.
// Этот ссылочный тип (Reference Type) является внутренним типом. Мы не можем явно использовать его, но он используется внутри языка

