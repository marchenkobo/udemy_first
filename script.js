"use strict";

const now = new Date();
console.log(Date.parse('2020-05-01'));
console.log(now);

//Получение компонентов даты:

console.log(now.getFullYear()); // Текущий год (Всегда передается 4-х значным числом)
console.log(now.getMonth()); //Текущий месяц (Отсчет с 0)
console.log(now.getDate()); // Текущий день месяца (Отсечт с 1)
console.log(now.getDay()); // Текущий день недели (Отсечт с 0 - Воскресенье)

console.log(now.getHours()); //Часы. Местное время
console.log(now.getUTCHours()); //Часы. Время по UTC
console.log(now.getTimezoneOffset()); //Разница в минутах между UTC и метным временем

console.log(now.getTime()); //Количество милисекунд *тамймстамп* прошедших с 1970г.(точки отсчета)



const testDate = new Date(2012, 0, 1);

function getWeekDay(date){
let day = date.getDay();
if(day == 0){
    console.log(7);
} else{
    console.log(day);
}
}
getWeekDay(testDate);
