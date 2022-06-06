"use strict";
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



first:for (let i=0;i>2;i++){
    const a=prompt("One of lsat seen films",""),
          b=prompt("Rate it","");
    if (a!=null && b!=null && a!='' && b!='' && a.length<50){
        personalMovieDB.movies[a]=b;
        console.log("Done");
    } else {
        console.log('Error');
        i--;
    }
    

}

console.log(personalMovieDB);



