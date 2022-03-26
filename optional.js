// безопасное обращение к свойству объекта даже если его нет

let user = {
    name: 'Jane',
    age: 23,
    say(){
        console.log('hey')
    }
};

console.log(user?.address); //if it doesn't exist the result will be undefined
console.log(user?.age)
console.log(user.say?.()) // to check if the mmethod  exists
