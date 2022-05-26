const number0fFilms = +prompt("How much films did you watched?","");


const personalMovieDB = {
    count:number0fFilms,
    movies:{},
    actors:{},
    ganres:[],
    privat:false
};

const a=prompt("One of lsat seen films",""),
      b=prompt("Rate it",""),
      c=prompt("One of last seen films",""),
      d=prompt("Rate it","");
      
personalMovieDB.movies[a]=b;
personalMovieDB.movies[c]=d;

console.log(personalMovieDB);



