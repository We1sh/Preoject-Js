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
if (personalMovieDB.count<10){
    console.log('You watched less films than I expected');
} else if(personalMovieDB.count>=   10 && personalMovieDB.count<30){
    console.log("You are clasic film enjoyer");
} else if(personalMovieDB.count>=30){
    console.log("You are big film fan");
} else{
    console.log("It was something wrong");
}
console.log(personalMovieDB);



