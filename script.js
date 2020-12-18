"use strict";

const div = document.createElement('div');
const span = document.createElement('span');
const p = document.createElement('p');
const button = document.createElement('button');
// Создаёт HTML элемент !но только в самом скрипте!

// document.createTextNode("Создать текст");

document.body.append(div);
// Помещает созданный элемент в HTML файл ( в конец укзанного места *body)

document.body.prepend(span);
// Помещает созданный элемент в HTML файл ( в начало укзанного места *body)

document.querySelector("span").after(p);
// Помещает созданный элемент в HTML файл (в место после указаного элемента *span)

document.querySelector("div").before(button);


document.querySelector('div').style.height = "200px";
document.querySelector('div').style.background= "#f1f1f1";
// Назначение CSS свойств, отдельно по каждому параметру


document.querySelector('button').style.cssText = "padding: 8px; width: 100px; margin-bottom: 12px";  
document.querySelector('div').style.cssText = "padding: 16px; color: #fff; height: 225px; background-color: #000;"; 
// Групповое назначение CSS свойств одной командой
// *! Перебивает стили, которые указаны отдельными парметрами


// div.textContent = "Hello";
//Вставляет ТОЛЬКО текст внутрь указанного элемента

div.innerHTML = "<h3>Hello!</h3>"; 
// Вставляет код / текст внутрь указанного элемента

div.insertAdjacentHTML('afterend', 'Is it the END???');
// Вставляет код / текст с указанием позиции относительно конкретного элемента (в примере позиция указывается относительно div)
// Несколько вариантов позиции: afterbegin, afterend, beforebegin, beforeend