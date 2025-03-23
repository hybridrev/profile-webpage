// hide side container when screen under 500 keknya
function hideContainer () {
  const element = document.getElementById("remove-side");
  if (window.innerWidth <= 500) {
      element.classList.remove("side-container");
  } else {
      element.classList.add("side-container");
  }
}

hideContainer();
window.addEventListener('resize', hideContainer);