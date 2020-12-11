"use strict";

let goods = 'milk, bread, meat';

let goodsArr = goods.split(', '); // создать массив из строки (указав разделитель)
console.log(goodsArr);
console.log(goodsArr.join('; ')); // создать строку из массива (с розделителем)

let arr = [1,4,6,8,9];

arr.forEach(function(item, counter, arr){
    console.log(`In position ${counter} we can see item: ${item} wich placed in ${arr} massive`);
});