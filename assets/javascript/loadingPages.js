window.addEventListener("load", () => {
  document.fonts.ready.then(() => {
    const textElement = document.querySelector("#preloader h1");
    if (textElement) {
      textElement.textContent = "Welcome ><";
    }

    setTimeout(() => {
      document.body.classList.add("loaded");

      setTimeout(() => {
        document.getElementById("preloader").style.display = "none";
        document.body.classList.remove("no-scroll");
      }, 1000); 
    }, 1000); 
  });
});
