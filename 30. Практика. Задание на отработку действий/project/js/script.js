/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

document.querySelector('.promo__adv').remove();
document.querySelector('.promo__genre').textContent = 'драма';
document.querySelector('.promo__bg').style.cssText = 'background: url("img/bg.jpg") center center/cover no-repeat';

let moviesSort = movieDB.movies.sort();
let listForRemove = document.querySelectorAll('.promo__interactive-item');

listForRemove.forEach(function(item){
    item.remove();
});

// Вариант автора:
// const movieList = document.querySelector('.promo__interactive-list');
// movieList.innerHTML('');




for(let i = 0; i < movieDB.movies.length; i++){
    document.querySelector('.promo__interactive-list').insertAdjacentHTML('beforeend', `
        <li class="promo__interactive-item"> ${i+1 + '. ' + moviesSort[i]}
            <div class="delete"></div>
        </li>
    `);
}

// Вариант автора:

// const movieList = document.querySelector('.promo__interactive-list');
// movieDB.movies.forEach((film, i) => {
//     movieList.innerHTML += `
//     <li class="promo__interactive-item"> ${i+1} ${film}
//         <div class="delete"></div>
//     </li>
//     `
// });