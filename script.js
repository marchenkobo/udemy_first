"use strict";

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?',0);

const personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

// for(let i = 0; i < 3; i++){
//     let movieTitle;
//     let movieRate;

//     do{
//         movieTitle = prompt("Один из последних просмотренных фильмов?");
//     } 
//     while(movieTitle === null || movieTitle.length == 0 || movieTitle.length > 50);
    
//     do{
//         movieRate = +prompt("На сколько оценете его?",0);
//     } 
//     while(isNaN(movieRate));
    
//     personaMovieDB.movies[movieTitle] = movieRate;
// }   


for(let i = 0; i < 2; i++){
    let movieTitle = prompt("Один из последних просмотренных фильмов?");
    let movieRate = +prompt("На сколько оценете его?", 0);
    if(movieTitle != null && movieTitle != '' && !isNaN(movieRate && movieRate != '')){
        personaMovieDB.movies[movieTitle] = movieRate; 
        console.log("Done");
    } else{
        console.log("Error");
        i--;
    }
}

if(personaMovieDB.count < 10){
    console.log("Просмотрено мало фильмов");
} else if(personaMovieDB.count >= 10 && personaMovieDB.count < 30){
    console.log("Вы классический зритель");
} else if(personaMovieDB.count >= 30){
    console.log("Вы Киноман");
} else{
    console.log("Произошла ошибка");
}


console.log(personaMovieDB.movies);