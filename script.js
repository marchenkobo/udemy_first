"use strict";

let obj = {
    a: 0,
    b: 1,
    c: 2,
    d: {
        e: 5,
        f: 6
    }
};

// Создание (поверхностной) копии объекта через цикл:
let objCopy = {};
for(let prop in obj){
    objCopy[prop] = obj[prop];
}

objCopy.d.e = 5.5; // !!! Меняет и вложеный (глубокий) объект объекта "obj"
objCopy.g = 7; // Изменение только в скопированном объекте

console.log(obj);
console.log(objCopy);


// Создание (поверхностной) копии объекта через обьъеденение объектов:
let objClone = Object.assign({}, obj);
console.log(objClone);

objClone.d.e = 5.6; // Изменение вложенног объекта также редактируют оригинал
objClone.j = 8; 
console.log(obj);
console.log(objClone);


// Создание копии массива (!помиомо цикла)
let arr = ['a', 'b', 'c'];

let newArr = arr.slice();
newArr.push('d');
console.log(arr);
console.log(newArr);


// Spread оператор (*оператор разворота) позволяет "разобрать" массив на отдельные элементы 
let video = ['yourube', 'vimeo', 'coub'],
    socials = ['vk', 'facebook', 'instagram'],
    internet = [...video, ...socials, 'telegram', 'viber'];

console.log(internet);

let arrayClone = [...arr]; //Создание копии массива с помощью spread оператора
arrayClone.push('newValue')
console.log(arrayClone);


//Копирование объекта с помощью Spread оператора
let newObj = {...obj}; 
console.log(newObj);