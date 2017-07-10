console.log("CONNECTED");

// Create an array of movies objects. Each movie shoujld have a title, rating, and a hasWatched property. 
var movieDB = [
    {
        title: "Spider-man: Homecoming",
        rating: 4.5,
        hasWatched: false
    },
    {
        title: "Guardians of the Galaxy: Volume 2",
        rating: 4.2,
        hasWatched: false
    },
    {
        title: "Logan",
        rating: 4,
        hasWatched: true
    }
]

// Iterate through the array and print out a summary
// for (i = 0; i < movieDB.length; i++) {
//     if (movieDB[i].hasWatched = true) {
//         console.log("You have seen " + movieDB[i].title + " - " + movieDB[i].rating + " stars"); 
//     }
//     else
//         console.log("You have not seen " + movieDB[i].title + " - " + movieDB[i].rating + " stars"); 
//     }

// movieDB.forEach(function(movie) {
//     var result = "You have "; 
//     if (movie.hasWatched) {
//         result += "watched ";
//     }
//     else {
//         result += "not seen ";
//     }
//     result += "\"" + movie.title + "\" - ";
//     result += movie.rating + " stars";
//     console.log(result);
// }, this);

// Refactoring
function buildString(movie) {
    var result = "You have "; 
    if (movie.hasWatched) {
        result += "watched ";
    }
    else {
        result += "not seen ";
    }
    result += "\"" + movie.title + "\" - ";
    result += movie.rating + " stars";
    return result;
}

movieDB.forEach(function(movie) {
    console.log(buildString(movie));
}, this);