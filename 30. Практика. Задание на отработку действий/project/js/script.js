/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
    ]
};

document.querySelector('.promo__adv').remove();
document.querySelector('.promo__genre').textContent = 'драма';
document.querySelector('.promo__bg').style.cssText = 'background: url("img/bg.jpg") center center/cover no-repeat';


let listForRemove = document.querySelectorAll('.promo__interactive-item');

listForRemove.forEach(function(item){
    item.remove();
});

const formButton = document.querySelector('form.add>button');
const newFilmInput = document.querySelector('.adding__input');
const filmList = document.querySelector('.promo__interactive-list');


function createFilmsList(){
    let moviesSort = movieDB.movies.sort(function (a, b) {
        return a.localeCompare(b);
    });
    filmList.innerHTML = "";
    for(let i = 0; i < movieDB.movies.length; i++){
        let insertMovie = moviesSort[i];
        if (insertMovie.length > 21){
            insertMovie = insertMovie.slice(0, 21) + '...';
        }
        document.querySelector('.promo__interactive-list').insertAdjacentHTML('beforeend', `
            <li class="promo__interactive-item"> ${i + 1}. ${insertMovie}
                <div class="delete"></div>
            </li>
        `);
    }
    refreshDeleteButtons();
}
createFilmsList();


formButton.addEventListener('click', (e) =>{
    e.preventDefault();
    let newFilmName = newFilmInput.value.replace(/<[^>]*>/g, '');
    let newFilmCheckbox = document.querySelector('form.add > input[type=checkbox]');
    if(newFilmName != ""){
        movieDB.movies.push(newFilmName);
        newFilmInput.value = "";
        filmList.innerHTML = "";
        createFilmsList();
        if(newFilmCheckbox.checked){
            console.log("Добавляем любимый фильм");
            newFilmCheckbox.checked = false;
        }
    }
    else{
        alert("Введите название фильма");
    }
});

function refreshDeleteButtons(){
    let deleteFilmButton = filmList.querySelectorAll('.delete');
    deleteFilmButton.forEach((item, key) =>{
        item.addEventListener('click', (e) => {
            item.parentElement.remove();
            movieDB.movies.splice(key, 1);
            createFilmsList();
        });
    }); 
}

