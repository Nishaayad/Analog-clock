console.log("Welcome to Spotify");

// Initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('MasterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "Ram siya ram", filepath: "songs/1.mp3", coverpath: "covers/1.jpg" },
    { songName: "let me love you", filepath: "songs/2.mp3", coverpath: "covers/2.jpg" },
    { songName: "Waareya", filepath: "songs/3.mp3", coverpath: "covers/3.jpg" },
    { songName: "Chaleya", filepath: "songs/4.mp3", coverpath: "covers/4.jpg" },
    { songName: "Dil jhoom", filepath: "songs/5.mp3", coverpath: "covers/5.jpg" },
];

songItems.forEach((element, i) => {
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
});

// Listen to Events
audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    // Update seekbar
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    console.log(progress);
    myProgressBar
.value = progress;
});

myProgressBar.addEventListener('input', () => {
    // Update audio playback time when the user changes the progress bar
    audioElement.currentTime = (myProgressBar
    .value / 100) * audioElement.duration;
});
