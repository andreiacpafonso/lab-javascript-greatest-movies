// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(function (movie) {
        return movie.director;
    });
    .filter(function (director, index, sourceArray) {
        return sourceArray.indexOf(director) === index;
    });


}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArr.filter(function (movie) {
        return (
          movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
        );
      }).length;
    }




// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
//can't figure it out this one
    

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(function (movie) {
        return movie.genre.includes("Drama");
      });
    
      return ratesAverage(dramaMovies);

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    return moviesArray.map(function (movie) {
      return movie;
    })
    .sort(function (a, b) {
      if (a.year === b.year) {
        return a.title.localeCompare(b.title);
      }

      return a.year - b.year;
    });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const onlyTitles = moviesArr.map(function (movie) {
        return movie.title;
      });
    
      onlyTitles.sort(function (a, b) {
        return a.localeCompare(b);
      });
    
      const top20 = onlyTitles.splice(0, 20);
    
      return top20;

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {


}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}