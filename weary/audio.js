document.addEventListener('DOMContentLoaded', function() {
    var audioPlayer = document.getElementById('audioPlayer');
    var playPrompt = document.getElementById('playPrompt');

    // Define your playlist
    const playlist = [
        { src: '1.mp3', type: 'audio/mp3' },
        { src: '2.mp3', type: 'audio/mp3' }
    ];

    let currentTrackIndex = 0;

    // Function to play the current track
    function playCurrentTrack() {
        audioPlayer.src = playlist[currentTrackIndex].src;
        audioPlayer.type = playlist[currentTrackIndex].type;
        audioPlayer.load(); // Load the new track
        audioPlayer.play().then(function() {
            playPrompt.style.display = 'none';
        }).catch(function() {
            // Show the prompt if autoplay fails
            playPrompt.style.display = 'block';
        });
    }

    // Function to handle playing the next track
    function playNextTrack() {
        currentTrackIndex++;
        if (currentTrackIndex >= playlist.length) {
            currentTrackIndex = 0;  // Reset to the first track if it's the end of the playlist
        }
        playCurrentTrack();
    }

    // Listen for the end of the current track
    audioPlayer.addEventListener('ended', function() {
        playNextTrack();
    });

    // Initial attempt to play the first track
    playCurrentTrack();

    // If the user clicks the prompt, try to play the audio
    playPrompt.addEventListener('click', function() {
        audioPlayer.play().then(function() {
            playPrompt.style.display = 'none';
        }).catch(function(error) {
            console.error('Playback failed:', error);
        });
    });
    
    // Additional event listener to ensure the next track plays correctly
    audioPlayer.addEventListener('canplaythrough', function() {
        console.log('Ready to play:', playlist[currentTrackIndex].src);
    });
});
