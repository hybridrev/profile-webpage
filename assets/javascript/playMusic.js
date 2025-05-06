const button = document.getElementById('play-music');
const audio = document.getElementById('audio-player');

button.addEventListener('click', function (e) {
  e.preventDefault(); // biar ga nge-redirect

  // Toggle play/pause
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});
