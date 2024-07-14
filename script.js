// script.js
const video = document.getElementById('video');
const playPauseButton = document.getElementById('play-pause');
const muteButton = document.getElementById('mute');
const fullscreenButton = document.getElementById('fullscreen');
const progressBar = document.getElementById('progress');
const timeDisplay = document.getElementById('time-display');

let isPlaying = false;
let isMuted = false;
let isFullscreen = false;

playPauseButton.addEventListener('click', () => {
    if (isPlaying) {
        video.pause();
        playPauseButton.innerHTML = 'Play';
    } else {
        video.play();
        playPauseButton.innerHTML = 'Pause';
    }
    isPlaying =!isPlaying;
});

muteButton.addEventListener('click', () => {
    if (isMuted) {
        video.muted = false;
        muteButton.innerHTML = 'Mute';
    } else {
        video.muted = true;
        muteButton.innerHTML = 'Unmute';
    }
    isMuted =!isMuted;
});

fullscreenButton.addEventListener('click', () => {
    if (isFullscreen) {
        document.exitFullscreen();
        fullscreenButton.innerHTML = 'Fullscreen';
    } else {
        video.requestFullscreen();
        fullscreenButton.innerHTML = 'Exit Fullscreen';
    }
    isFullscreen =!isFullscreen;
});

video.addEventListener('timeupdate', () => {
    const currentTime = video.currentTime;
    const duration = video.duration;
    const progress = (currentTime / duration) * 100;
    progressBar.style.width = `${progress}%`;
    timeDisplay.innerHTML = `${formatTime(currentTime)} / ${formatTime(duration)}`;
});

function formatTime(time) {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}
