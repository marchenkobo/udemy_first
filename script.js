"use strict";

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?',0);
console.log(numberOfFilms);

const personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};



personaMovieDB.movies[prompt('Один из последних просмотренных фильмов?')] = +prompt('На сколько оценете его?', 0);
personaMovieDB.movies[prompt('Один из последних просмотренных фильмов?')] = +prompt('На сколько оценете его?', 0);
console.log(personaMovieDB.movies);