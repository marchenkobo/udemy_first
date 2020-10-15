"use strict";

const num = 30;

if (num > 50){
    console.log('Больше 50-ти');
} else if (num < 10){
    console.log('Больше 10-ти');
} else{
    console.log(`Равно ${num}-ти`);
}


num > 10 ? console.log("Больше 10-ти") : console.log("Меньше 10-ти");

switch(num + 1){
    case num < 10:
        console.log("Меньше 10");
        break;
    case num > 60:
        console.log("Больше 60-ти");
        break;
    default:
        console.log("Между 10 и 60");
        // если default последний или гарантированно совпадёт с как-то вариантом выше *break можно не использовать
}