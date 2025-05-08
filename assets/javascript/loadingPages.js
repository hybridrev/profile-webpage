window.addEventListener("load", () => {
  document.fonts.ready.then(() => {
    document.body.classList.add("loaded");
    setTimeout(() => {
      document.getElementById("preloader").style.display = "none";
    }, 1000); 
  });
});