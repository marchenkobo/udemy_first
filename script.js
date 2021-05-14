"use strict";

const btns = document.querySelectorAll('button'),
    wrapper = document.querySelector('.container');

// btns[0].classList.add('new');
// btns[0].classList.remove('one');
// btns[0].classList.toggle('some');

// if(btns[1].classList.contains('second')){
//     btns[1].classList.add('hand');
// } else{
//     btns[1].classList.add('just-second'); 
// }

// btns[1].addEventListener('click', (e) => {
//     btns[0].classList.toggle('red');
// });


// wrapper.addEventListener('click', (e) => {
//     console.dir(e.target);
//     if (e.target && e.target.className == 'red'){
//         alert("Попавсь!");
//     }
// });

wrapper.addEventListener('click', (e) => {
    console.dir(e.target);
    if (e.target && e.target.classList.contains('one')){
        alert("Нашел!");
    }
});


//Вешаем обработчик на родителя и ловим элемент, по которму происходил клик
wrapper.addEventListener('click', (e) => {
    console.dir(e.target);
    if (e.target && e.target.tagName == 'BUTTON'){
        alert("Попавсь!");
    }
});



//Отработчик будет работать даже с динамически добавленным элементом
const newButton = document.createElement('button');
newButton.textContent = btns.length + 1;
wrapper.append(newButton);


//Рекомендация Google
wrapper.addEventListener('click', (e) => {
    console.dir(e.target);
    if (e.target && e.target.matches('button.google')){
        alert("Я через знакомство");
    }
});