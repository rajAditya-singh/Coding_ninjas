const movie = {
    Title: "Marvel's The Avengers",
    Year: 2012,
    Rated: "PG-13",
    Gener: ["Action", "Adventure", "Sci-Fi"],
    Director: "Joss Whedon",
    cast: {
        lead: "Robert Downey Jr.",
        support: "Chris Evans",
        villain: "Tom Hiddleston"
    },
    Actors: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo", "Chris Hemsworth"],
    BoxOffice: "$623,357,910",
    getDetails: function () {
        console.log(
            `${this.Title}\nYear: ${this.Year},\nDirected by: ${this.Director}.\nStarring: ${this.Actors.join(", ")}.\nBox Office: ${this.BoxOffice}.`
        );
    },

    getMovieDetails: function (details) {
        console.log(movie[details])
    }
}
movie.getDetails();

const details = 'Title';
movie.getMovieDetails(details);

console.log(movie.cast.villain)