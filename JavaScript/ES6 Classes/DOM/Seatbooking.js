//Create you project here from scratch
const moviesList = [
  { movieName: "Flash", price: 7 },
  { movieName: "Spiderman", price: 5 },
  { movieName: "Batman", price: 4 },
];
// Use moviesList array for displaing the Name in the dropdown menu
const dropDown = document.getElementById("selectMovie");
const mName = document.getElementById("movieName");
const price = document.getElementById("moviePrice");

moviesList.forEach((movies) => {
  const option = document.createElement("option");
  option.value = movies.movieName;
  option.textContent = movies.movieName + " $" + movies.price;
  dropDown.appendChild(option);
});

dropDown.addEventListener("change", (e) => {
  const selectedMovie = moviesList.find(
    (movie) => movie.movieName === e.target.value,
  );
  if (selectedMovie) {
    mName.textContent = selectedMovie.movieName;
    price.textContent = "$ " + selectedMovie.price;
  }
});

//Add eventLister to each unoccupied seat
//Add eventLsiter to continue Button
//Add eventListerner to Cancel Button
