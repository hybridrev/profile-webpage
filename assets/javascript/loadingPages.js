window.addEventListener("load", () => {
  document.fonts.ready.then(() => {
    document.body.classList.add("loaded");
    setTimeout(() => {
      document.getElementById("preloader").style.display = "none";
      document.body.classList.remove("no-scroll");
    }, 1000);
  });
});