"use strict";

// To String
console.group("To String:");

// 1. Метод String()
console.log(typeof(String(null)));

// 2. Сложение числа и строки
console.log(typeof(5+ ''));
console.log(26 + 'px');
console.log('vk.com/catalog/' + 5);

// Block End
console.groupEnd();


// To Number
console.group("To Number:");

// 1. Метод Number()
console.log(typeof(Number('5'))); //изначально передается строка

// 2. Унарный плюс +
console.log(typeof(+"9")); //изначально передается строка

// 3. Метод parseInt()
console.log(typeof(parseInt('15px', 10)));

// Block End
console.groupEnd();


// To Boolean
console.group("To Boolean:");

// 0, пустая строка '', null, undefined, NaN == false, всё остальное в JS == true (даже пустые массивы и т.д)

// 1. Присвоение
let switcher = null;

if(!switcher){
    alert("Switcher Disabled");
}
switcher = true;
if(switcher){
    console.log("Switcher working...");
}

// 2. Метод Boolean()
console.log(typeof(Boolean(3)));

// 3. С помощью двух знаков отрицания !!
console.log(typeof(!!"44"));

// Block End
console.groupEnd();


