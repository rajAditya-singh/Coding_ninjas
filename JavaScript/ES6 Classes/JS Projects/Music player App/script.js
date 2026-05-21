const songs = [
    {
        id: 1,
        songName: "Enter Sandman",
        artist: "Metallica 1",
        genre: "pop",
        image:
            "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/c6/9b/1d/c69b1ddb-f873-53b4-9fc9-87ca49af2062/21UMGIM48676.rgb.jpg/440x440bb.jpg",
        audio:
            "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/23/3a/76/233a7642-1e06-d03c-a998-e445068e5c52/mzaf_10269670333044316164.plus.aac.ep.m4a",
    },

    {
        id: 2,
        songName: "Nothing Else Matters",
        artist: "Metallica 2",
        genre: "rock",
        image:
            "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/c6/9b/1d/c69b1ddb-f873-53b4-9fc9-87ca49af2062/21UMGIM48676.rgb.jpg/440x440bb.jpg",
        audio:
            "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/ce/fb/74/cefb74f2-8632-d7ca-ba70-97c5f1775fa6/mzaf_1968547138222951403.plus.aac.ep.m4a",
    },

    {
        id: 3,
        songName: "Master Of Puppets",
        artist: "Metallica 3",
        genre: "hiphop",
        image:
            "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/82/9a/c0/829ac046-9ef9-b027-3257-c2ed6a515707/17UM1IM18688.rgb.jpg/440x440bb.jpg",
        audio:
            "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/28/c0/2f/28c02f20-0978-b752-bd0e-126b563b7c0f/mzaf_5179440639021683422.plus.aac.ep.m4a",
    },

    {
        id: 4,
        songName: "One",
        artist: "Metallica 4",
        genre: "pop",
        image:
            "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/c0/c0/6d/c0c06d9a-16a9-2989-1a24-1f3231fc06f8/18UMGIM34141.rgb.jpg/440x440bb.jpg",
        audio:
            "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/cf/b9/41/cfb9419e-559d-3997-d162-2419a50806bd/mzaf_293219985142213069.plus.aac.ep.m4a",
    },

    {
        id: 5,
        songName: "Welcome Home",
        artist: "Metallica 5",
        genre: "rock",
        image:
            "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/82/9a/c0/829ac046-9ef9-b027-3257-c2ed6a515707/17UM1IM18688.rgb.jpg/440x440bb.jpg",
        audio:
            "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/4d/dd/06/4ddd068a-b4c3-a0b7-f226-1683e349d197/mzaf_15152948116407479086.plus.aac.ep.m4a",
    },

    {
        id: 6,
        songName: "Fade To Black",
        artist: "Metallica 6",
        genre: "rock",
        image:
            "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/c0/c0/6d/c0c06d9a-16a9-2989-1a24-1f3231fc06f8/18UMGIM34141.rgb.jpg/440x440bb.jpg",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    },
];

//Toggle Button Start --------------------------
const themeColor = document.getElementById("theme_color");
const themeToggleBtn = document.getElementById("theme-toggle-btn");

function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    themeToggleBtn.classList.toggle("theme-toggle-btn-dark");
    themeColor.classList.toggle("theme_color_black");
    if (document.body.classList.contains("dark-mode")) {
        themeColor.textContent = "Light";
    } else {
        themeColor.textContent = "Dark";
    }
}
themeToggleBtn.addEventListener("click", toggleTheme);

//Toggle Button End----------------------------------

//Show Song according to Genere
const show_Songs = document.getElementById("songs-list");
const SelectGenere = document.getElementById("genre-filter");
showSongs();
// let SelectedGenere = "all";
SelectGenere.addEventListener("change", showSongs);

let currentSongIndex = 0;
//--------------Show Song Start--------------------
function showSongs() {
    let SelectedGenere = SelectGenere.value;
    let isPlaying = false;
    console.log(SelectedGenere);
    const filterSongs = songs.filter(
        (song) => SelectedGenere === "all" || SelectedGenere === song.genre,
    );
    //   console.log(filterSongs);
    show_Songs.innerHTML = "";

    filterSongs.forEach((song) => {
        const sontItem = document.createElement("div");
        sontItem.textContent = `${song.songName} - ${song.artist}`;
        sontItem.classList.add("song-item");
        show_Songs.appendChild(sontItem);

        //Song Display in song Cart-----------------------
        sontItem.addEventListener("click", function () {
            isPlaying = true;
            play_btn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
            renderCurrentSong(song);
            return (currentSongIndex = song.id - 1);
        });
        //--------------End------------------------
    });

    // CONTROL BUTTONS ----------------------------------
    const next_btn = document.getElementById("next-btn");
    const play_btn = document.getElementById("play-btn");
    const prev_btn = document.getElementById("prev-btn");
    const audio_player = document.getElementById("audio-player");
    //   let Current_song = filterSongs[currentSongIndex];

    next_btn.addEventListener("click", () => {
        currentSongIndex++;
        if (currentSongIndex >= filterSongs.length) {
            currentSongIndex = 0;
        }
        isPlaying = true;
        play_btn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
        let Current_song = filterSongs[currentSongIndex];
        renderCurrentSong(Current_song);
    });

    play_btn.addEventListener("click", function () {
        if (!isPlaying) {
            isPlaying = true;
            audio_player.play();
            play_btn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
        } else {
            isPlaying = false;
            audio_player.pause();
            play_btn.innerHTML = `<i class="fa-solid fa-play"></i>`;
        }
    });

    prev_btn.addEventListener("click", function () {
        if (currentSongIndex === 0) {
            let Current_song = filterSongs[currentSongIndex];
            renderCurrentSong(Current_song);
        } else {
            currentSongIndex--;
            isPlaying = true;
            play_btn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
            let Current_song = filterSongs[currentSongIndex];
            renderCurrentSong(Current_song);
        }
    });

    
    const add_to_playlist_btn = document.getElementById("add-to-playlist-btn")
    const Playlist_songs_list =  document.getElementById("Playlist-songs-list")
    add_to_playlist_btn.addEventListener("click", function () {
        let Current_song = filterSongs[currentSongIndex];
        const AddedSong = document.createElement("div")
        AddedSong.classList.add("Playlist-song-item")
        AddedSong.textContent = `${Current_song.songName} - ${Current_song.artist}`;
        Playlist_songs_list.appendChild(AddedSong)
    })

}

//--------------Show Song End--------------------

//Render Current Song Start------------------------
function renderCurrentSong(current) {
    const song_image = document.querySelector(".song-image");
    song_image.src = current.image;

    const current_song_name = document.getElementById("current-song-name");
    current_song_name.textContent = current.songName;

    const current_song_artist = document.getElementById("current-song-artist");
    current_song_artist.textContent = current.artist;
    const audio_player = document.getElementById("audio-player");
    audio_player.src = current.audio;

    audio_player.play();
}

//Render Current Song end------------------------

// create Playlist 

const playList_name = document.getElementById("playlist-input")
const create_playlist_btn = document.getElementById("create-playlist-btn")
const All_playlist = document.getElementById("playlist-list")

function createPlaylist() {
    const newPlaylist = document.createElement("div")
    newPlaylist.classList.add("song-item")
    newPlaylist.textContent = playList_name.value;
    All_playlist.appendChild(newPlaylist)
    playList_name.value = ""
}

create_playlist_btn.addEventListener("click", createPlaylist)
