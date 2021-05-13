"use strict";

//touchstart - прикосновения к элементу
//touchmove - движение по элементу
//touchend - убираем палец с элемента

//touchenter - вхождение в область элемента при скольжении пальца
//touchleave - выход за пределы элемента




window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.container');

    box.addEventListener('touchstart',(e) =>{
        e.preventDefault();

        box.style.cssText = 'background-color: #0f0';
        alert(e.touches.length);
    });

});

//Свойства объекта события е.touches:
//length - количество пальцев на элементе
//target - элемент на котором произошло событие
// плюс координаты, углы и т.д.

//targetTouches
//changedTouches
