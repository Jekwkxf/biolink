// Define your playlist of songs
const playlist = [
    { src: '1.mp3', type: 'audio/mp3', title: '...'  },
    // Add more songs as needed
];

// Get references to necessary elements
const audioPlayer = document.getElementById('audioPlayer');
const currentSongTitle = document.getElementById('currentSongTitle');


let currentSongIndex = 0; // Index to keep track of current song in playlist

// Function to play the next song in the playlist
function playNextSong() {
    currentSongIndex = (currentSongIndex + 1) % playlist.length;
    audioPlayer.src = playlist[currentSongIndex].src;
    audioPlayer.type = playlist[currentSongIndex].type;
    audioPlayer.play();

    // Update current song title in UI
    updateCurrentSongInfo();
}

// Event listener for when current song ends
audioPlayer.addEventListener('ended', () => {
    playNextSong();
});

// Function to update current song info in UI
function updateCurrentSongInfo() {
    currentSongTitle.textContent = playlist[currentSongIndex].title;
}


// Autoplay the first song
audioPlayer.src = playlist[currentSongIndex].src;
audioPlayer.type = playlist[currentSongIndex].type;
audioPlayer.play();

// Initial update of current song info
updateCurrentSongInfo();
