"use strict";

const btn2 = document.querySelector('#button--2');


btn2.onclick = function(){
    alert('Вариант отработки 2');
};
// btn2.onclick = alert('Сработало событие onclick-2'); Работает также.


const btn3 = document.querySelector('#button--3');
btn3.addEventListener('click', function(){
    alert('Вариант отработки 3.0 ');
});
// btn3.addEventListener('click', alert(...); Работает иначе!

//Можно добавлять события на одно и то же действие:
btn3.addEventListener('click', function(){
    alert('Вариант отработки 3.1');
});

//Использование обьекста события "event" *(e)
btn3.addEventListener('click', function(e){
    console.log(e); //Вывод объекта события с полной информацией о событии 
    e.target.textContent = 'Содержимое изменилось'; //Использование свойств обьекта события 
});



// Чтобы удалить событие оно должно сслыаться на одно и то же событие, а так же на ту же функцию (А НЕ НА ЕЕ КЛОН!)
const btn4 = document.querySelector('#button--4');
// Выносим функцию в отдельную переменную
const someFunc = (e) => {
    alert('Я не должен был сработать!');
};

btn4.addEventListener('click', someFunc); // !Если вместо ссылки на функции будет такой же код функции (клон) это не сработает
btn4.removeEventListener('click', someFunc); // !Если вместо ссылки на функции будет такой же код функции (клон) это не сработает



// Удаление события после одного выполнения
const btn5 = document.querySelector('#button--5');
let i = 0;
const funcFor5 = (e) => {
    console.log(e.target);
    i++;
    if(i == 1){
        btn5.removeEventListener('click', funcFor5);
    }
};
btn5.addEventListener('click', funcFor5);

// Отмена стандартного события/поведения элемента
const link = document.querySelector('a');
link.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("Мы отменили переход по ссылке");
});


//Обьект опций (3-й аргумент .addEventListener):
const btn6 = document.querySelector('#button--6');
btn6.addEventListener('click', (e) =>{
    console.log("Больше это не сработает");
}, {once: true});