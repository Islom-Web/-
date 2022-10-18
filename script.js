"use srtict";

const numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const a = prompt("Один из просмотренных фильмов?", ''),
      b = prompt("На сколько оцентие его?", ''),
      c = prompt("Один из просмотренных фильмов?", ''),
      d = prompt("На сколько оцентие его?", '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);