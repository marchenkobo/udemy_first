"use strict";
console.group("1");
console.log(document.body); //получаем тег body
console.log(document.head); //получаем тег head
console.log(document.documentElement); //получаем тег html
console.log(document.querySelector('html')); // тоже самое что и document.documentElement
console.groupEnd();

console.group("2");
console.log(document.body.childNodes); //получаем все ноды и узлы (ребёнки) родителя *body
console.log(document.body.firstChild); //получаем первого !узла-ребёнка родителя *body
console.log(document.body.firstElementChild); //получаем первого !элемента-ребёнка родителя *body

console.log(document.body.lastChild); //получаем последнего !узла-ребёнка родителя *body
console.log(document.body.lastElementChild); //получаем последнего !элемента-ребёнка родителя *body
console.groupEnd();

console.group("3");
console.log(document.querySelector('#current').parentNode); //получаем !узел-родителя элемента #current
console.log(document.querySelector('#current').parentNode.parentNode); //получаем !узел-родителя < узла-родителя (прородителя) элемента #current
console.log(document.querySelector('#current').parentElement); //получаем !элемент-родителя элемента #current
console.groupEnd();

console.group("4");
console.log(document.querySelector('[data-current="3"]').nextSibling); //получаем следующий !УЗЕЛ! за элементом с дата атрибутом
console.log(document.querySelector('[data-current="3"]').nextElementSibling); //получаем следующий !ЭЛЕМЕНТ! за элементом с дата атрибутом
console.groupEnd();

console.group("5");
console.log(document.querySelector('[data-current="3"]').previousSibling); //получаем предыдущий !УЗЕЛ! за элементом с дата атрибутом
console.log(document.querySelector('[data-current="3"]').previousElementSibling); //получаем предыдущий !ЭЛЕМЕНТ! за элементом с дата атрибутом
console.groupEnd();

// Для получения !только элементов (аналог childNodes для всех узлов-элементов) создаем ручной отбор элементов:
// Для перебора используется метод for of у которого есть необходимые операторы break и continue
console.group("6");
for (let item of document.body.childNodes){
    if (item.nodeName == "#text"){ //проверяем свойство элемента на пренадлежность
        continue; //пропускаем элемент и переходим к проверке следующего
    }
    console.log(item); //если элемент подходит - выполняем с ним какие-то действия
}
//Внимание! В данном примере мы избавляемся только от текстовых узлов! Другие элементы (комментарии и т.д.) не отсеятся!
console.groupEnd();