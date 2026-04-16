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

const seats = document.querySelectorAll("#seatCont .seat");
// console.log(seats);
let selectedSeats = [];
seats.forEach((seat, i) => {
  seat.addEventListener("click", function () {
    if (!seat.classList.contains("occupied")) {
      seat.classList.toggle("selected");
      seat.style.backgroundColor = seat.classList.contains("selected")
        ? "lightgreen"
        : "";

      const noOfSeats = document.getElementById("numberOfSeat");
      noOfSeats.textContent =
        document.querySelectorAll(".seat.selected").length - 1;

      const seatid = i + 1;
      if (seat.classList.contains("selected")) {
        selectedSeats.push(seatid);
      } else {
        selectedSeats = selectedSeats.filter((id) => id !== seatid);
      }

      let seatHolder = document.getElementById("selectedSeatsHolder");
      seatHolder.innerHTML = "";
      selectedSeats.forEach((id) => {
        const takenSeat = document.createElement("div");
        takenSeat.classList.add("selectedSeat");
        takenSeat.innerHTML = id;
        seatHolder.appendChild(takenSeat);
      });

      let totalPrice =
        noOfSeats.textContent * parseFloat(price.textContent.slice(2));
      document.getElementById("totalPrice").textContent = "$ " + totalPrice;
    }
  });
});
let proceedBtn = document.getElementById("proceedBtn");
proceedBtn.addEventListener("click", function () {
  if (selectedSeats.length > 0) {
    alert("Yayy! Your Seats have been booked.");
    document.querySelectorAll(".seat.selected").forEach((seat) => {
      seat.classList.remove("selected");
      seat.classList.add("occupied");
      seat.style.backgroundColor = "";
      document.getElementById("numberOfSeat").textContent = 0;

      document.getElementById("totalPrice").textContent = "$ " + 0;
      document.getElementById("selectedSeatsHolder").innerHTML =
        "<div class='noSelected'>No Seat Selected</div>";
    });
  } else {
    alert("Oops no seat Selected.");
  }
});

let cancelBtn = document.getElementById("cancelBtn");
cancelBtn.addEventListener("click", function () {
  selectedSeats = [];
  document.querySelectorAll(".seat.selected").forEach((seat) => {
    seat.classList.remove("selected");
    // seat.classList.add("occupied");
    seat.style.backgroundColor = "";
    document.getElementById("numberOfSeat").textContent = 0;
    document.getElementById("totalPrice").textContent = "$ " + 0;
    document.getElementById("selectedSeatsHolder").innerHTML =
      "<div class='noSelected'>No Seat Selected</div>";
  });
});
//Add eventLister to each unoccupied seat
//Add eventLsiter to continue Button
//Add eventListerner to Cancel Button
