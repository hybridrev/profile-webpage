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

// screen size
function checkScreenWidth () {
    const element = document.getElementById("remove-class");
    if (window.innerWidth <= 400) {
        element.classList.remove("side-button");
        element.classList.add("container-flex");
    } else {
        element.classList.add("side-button");
        element.classList.remove("container-flex");
    }
}
checkScreenWidth();
window.addEventListener('resize', checkScreenWidth);
