// transisi
document.addEventListener("DOMContentLoaded", function () {
  const mainElement = document.querySelectorAll("main");
  const progressText = document.getElementById("progress");

  // Daftar asset yang mau dicek load
  const assets = [
    "/assets/img/Selena4.gif",
    "/assets/img/Selena3.gif",
    "/assets/img/miyabi-spin.gif",
    "/assets/img/Banner-Selena.jpg",
    "/assets/img/blue/1.jpg",
    "/assets/img/blue/2.jpg",
    "/assets/img/blue/3.jpg",
    "/assets/img/blue/4.jpg",
    "/assets/img/Music0.jpg",
    "/assets/img/Music1.jpg",
    "/assets/img/BackNumber.jpg",
    "/assets/img/Higedan.jpg",
    "/assets/fonts/Amorlate.ttf",
    "/assets/fonts/Darling Coffee.ttf",
    "/assets/fonts/Dacherry.ttf",
    "/assets/fonts/Honey Salt.otf",
    "/styles.css"
  ];

  let loaded = 0;

  function updateProgress() {
    const percent = Math.round((loaded / assets.length) * 100);
    progressText.textContent = "Loading... " + percent + "%";
    if (percent === 100) {
      progressText.textContent = "Welcome ><";
      setTimeout(function () {
        mainElement.forEach(function (main) {
          main.classList.add("load");
        });
      }, 150);
    }
  }

  function loadAsset(url) {
    return fetch(url).then(res => res.blob()).then(() => {
      loaded++;
      updateProgress();
    });
  }

  // Jalankan preload semua asset
  Promise.all(assets.map(loadAsset)).catch(err => {
    console.error("Error load asset:", err);
  });
});
