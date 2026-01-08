const movie1 = {
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
      `${this.Title}
      Year: ${this.Year},
      Directed by: ${this.Director},
      Starring: ${this.Actors},
      Box Office: ${this.BoxOffice}.`
    );
  },

  // getMovieDetails(details) {
  //   console.log(movie1[details]);
  // },
};
movie1.getDetails();

// const details = "Title";
// movie1.getMovieDetails(details);

// console.log(movie1.cast.villain);


const movie2 = {
  Title: "Movie2",
  Year: 2020,
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
      `${this.Title}
      Year: ${this.Year},
      Directed by: ${this.Director},
      Starring: ${this.Actors},
      Box Office: ${this.BoxOffice}.`
    );
  },

  // getMovieDetails(details) {
  //   console.log(movie[details]);
  // },
};
movie2.getDetails();