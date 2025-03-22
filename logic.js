// transisi
document.addEventListener("DOMContentLoaded", function() {
    const mainElement = document.querySelectorAll("main");
    setTimeout(function() {
      mainElement.forEach(function(main) {
        main.classList.add("load");
      });
    }, 150);
  });

// Day
function getDay() {
    var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var now = new Date();
    var dayIndex = now.getDay();
    var Day = daysOfWeek[dayIndex];
    document.getElementById("day").innerText = Day;
}
getDay();

function checkScreenWidth () {
  const element = document.getElementById("remove-side");
  if (window.innerWidth <= 500) {
      element.classList.remove("side-container");
  } else {
      element.classList.add("side-container");
  }
}
checkScreenWidth();
window.addEventListener('resize', checkScreenWidth);

function toggleImage() {
  const imgElement = document.getElementById('hide');
  if (window.innerWidth < 501) {
    imgElement.style.display = '';
  } else {
    imgElement.style.display = 'none';
  }
}
toggleImage();
window.addEventListener('resize', toggleImage);