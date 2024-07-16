const video = document.getElementById('video');
const playPauseBtn = document.getElementById('playPause');
const progress = document.getElementById('progress');
const time = document.getElementById('time');

playPauseBtn.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playPauseBtn.textContent = 'Pause';
    } else {
        video.pause();
        playPauseBtn.textContent = 'Play';
    }
});

video.addEventListener('timeupdate', () => {
    const progressValue = (video.currentTime / video.duration) * 100;
    progress.value = progressValue;

    const minutes = Math.floor(video.currentTime / 60);
    const seconds = Math.floor(video.currentTime % 60);
    time.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
});

progress.addEventListener('input', () => {
    const newTime = (progress.value / 100) * video.duration;
    video.currentTime = newTime;
});
