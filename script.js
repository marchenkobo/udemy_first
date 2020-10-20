"use strict";

let num = 10;

while(num > 8){
    console.log(num + ' while');
    num--;
};


do{
    console.log(num + ' do/while'); //Код выполняется до проверки условия
    num++;
} while (num < 11);


for (let i = 0; i < 10; i++){
    if(i === 6){
        break;  // break - завершает выполнения цикла при заданном условии
    }
    if( i === 3){
        continue; // continue - позволяет "пропустить шаг" при заданном условии
    }
    console.log(i + ' for');
}