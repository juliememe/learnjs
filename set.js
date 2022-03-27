// особая коллекция где множество значений хранится без ключейб и может встречаться только раз

let set = new Set();

set.add('Apple');

set.delete('1');

set.has(true);

set.clear();
set.size;

// перебор элементов
let set = new Set(["апельсин", "яблоко", "банан"]);

for (let value of set) alert(value);

// то же самое с forEach:
set.forEach((value, valueAgain, set) => {
    alert(value);
});