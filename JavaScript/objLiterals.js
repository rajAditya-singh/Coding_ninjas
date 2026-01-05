const movie = {
  Title: "Marvel's The Avengers",
  Year: 2012,
  Rated: "PG-13",
  Gener: ["Action", "Adventure", "Sci-Fi"],
  Director: "Joss Whedon",
  cast: {
    lead: "Robert Downey Jr.",
    support: "Chris Evans",
    villain: "Tom Hiddleston",
  },

  Actors: [
    "Robert Downey Jr.",
    "Chris Evans",
    "Mark Ruffalo",
    "Chris Hemsworth"
  ],

  BoxOffice: "$623,357,910",
  
  getDetails() {
    console.log(
      `${movie.Title}
      Year: ${movie.Year},
      Directed by: ${movie.Director},
      Starring: ${movie.Actors},
      Box Office: ${movie.BoxOffice}.`
    );
  },

  getMovieDetails(details) {
    console.log(movie[details]);
  },
};
movie.getDetails();

const details = "Title";
movie.getMovieDetails(details);

console.log(movie.cast.villain);
