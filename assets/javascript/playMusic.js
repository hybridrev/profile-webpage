const button = document.getElementById('play-music');
const audio = document.getElementById('audio-player');

button.addEventListener('click', function (e) {
  e.preventDefault(); 

  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});
