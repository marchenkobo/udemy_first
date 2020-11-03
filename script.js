"use strict";

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?',0);
while(numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms) ){
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?',0);
}





const personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function rememberMyFilms(){
    for(let i = 0; i < 2; i++){
        let movieTitle = prompt("Один из последних просмотренных фильмов?");
        let movieRate = +prompt("На сколько оценете его?", 0);
        if(movieTitle != null && movieTitle != '' && !isNaN(movieRate) && movieRate != ''){
            personaMovieDB.movies[movieTitle] = movieRate; 
            console.log("Done");
        } else{
            console.log("Error");
            i--;
        }
    } 
}

function detectPersonalLevel(){
    if(personaMovieDB.count < 10){
        console.log("Просмотрено мало фильмов");
    } else if(personaMovieDB.count >= 10 && personaMovieDB.count < 30){
        console.log("Вы классический зритель");
    } else if(personaMovieDB.count >= 30){
        console.log("Вы Киноман");
    } else{
        console.log("Произошла ошибка");
    }
}

function showMyDB(){
    if(!personaMovieDB.privat){
        console.log(personaMovieDB);
    }
}
showMyDB();

function writeYouGenres(){
    for(let i = 0; i < 3; i++){
        let genre = prompt(`Ваш любимый жанр под номером ${i + 1}`);
        if(genre == "" || genre == null){
            i--;   
        } else {
            personaMovieDB.genres.push(genre);  
        }
    }
}
writeYouGenres();
console.log(personaMovieDB);