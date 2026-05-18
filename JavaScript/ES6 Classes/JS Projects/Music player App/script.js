const songs = [
  {
    id: 1,
    songName: "Enter Sandman",
    artist: "Metallica",
    genre: "pop",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/c6/9b/1d/c69b1ddb-f873-53b4-9fc9-87ca49af2062/21UMGIM48676.rgb.jpg/440x440bb.jpg",
    audio:
      "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/23/3a/76/233a7642-1e06-d03c-a998-e445068e5c52/mzaf_10269670333044316164.plus.aac.ep.m4a",
  },

  {
    id: 2,
    songName: "Nothing Else Matters",
    artist: "Metallica",
    genre: "rock",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/c6/9b/1d/c69b1ddb-f873-53b4-9fc9-87ca49af2062/21UMGIM48676.rgb.jpg/440x440bb.jpg",
    audio:
      "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/ce/fb/74/cefb74f2-8632-d7ca-ba70-97c5f1775fa6/mzaf_1968547138222951403.plus.aac.ep.m4a",
  },

  {
    id: 3,
    songName: "Master Of Puppets",
    artist: "Metallica",
    genre: "hiphop",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/82/9a/c0/829ac046-9ef9-b027-3257-c2ed6a515707/17UM1IM18688.rgb.jpg/440x440bb.jpg",
    audio:
      "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/28/c0/2f/28c02f20-0978-b752-bd0e-126b563b7c0f/mzaf_5179440639021683422.plus.aac.ep.m4a",
  },

  {
    id: 4,
    songName: "One",
    artist: "Metallica",
    genre: "pop",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/c0/c0/6d/c0c06d9a-16a9-2989-1a24-1f3231fc06f8/18UMGIM34141.rgb.jpg/440x440bb.jpg",
    audio:
      "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/cf/b9/41/cfb9419e-559d-3997-d162-2419a50806bd/mzaf_293219985142213069.plus.aac.ep.m4a",
  },

  {
    id: 5,
    songName: "Welcome Home",
    artist: "Metallica",
    genre: "rock",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/82/9a/c0/829ac046-9ef9-b027-3257-c2ed6a515707/17UM1IM18688.rgb.jpg/440x440bb.jpg",
    audio:
      "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/4d/dd/06/4ddd068a-b4c3-a0b7-f226-1683e349d197/mzaf_15152948116407479086.plus.aac.ep.m4a",
  },

  {
    id: 6,
    songName: "Fade To Black",
    artist: "Metallica",
    genre: "rock",
    image: "https://upload.wikimedia.org/wikipedia/en/5/5c/Ridetl.png",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
];

//Show Song according to Genere
const SelectGenere = document.getElementById("genre-filter");
SelectGenere.addEventListener("change", function () {
  let SelectedGenere = this.value;
  console.log(SelectedGenere);
  const filterSongs = songs.filter(
    (song) => SelectedGenere === song.genre || SelectedGenere === "all",
  );
  console.log(filterSongs);
  displaySongs(filterSongs);
});

//Function to display songs on the webpage
const showSongs = document.getElementById("songs-list");
displaySongs(songs);

function displaySongs(songs) {
  showSongs.innerHTML = "";
  songs.forEach((song) => {
    const sontItem = document.createElement("div");
    sontItem.textContent = `${song.songName} - ${song.artist}`;
    sontItem.classList.add("song-item");
    showSongs.appendChild(sontItem);
  });
}
//End

//Toggle Button Start
const themeColor = document.getElementById("theme_color");
const themeToggleBtn = document.getElementById("theme-toggle-btn");

themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  themeToggleBtn.classList.toggle("theme-toggle-btn-dark");
  themeColor.classList.toggle("theme_color_black");
  if (document.body.classList.contains("dark-mode")) {
    themeColor.textContent = "Light";
  } else {
    themeColor.textContent = "Dark";
  }
});
//Toggle Button End
