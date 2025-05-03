// Day
const tahun = new Date().getFullYear();
    document.getElementById("tahun").textContent = `@ ${tahun} AbenDoesnt. Made with Firefly's love 🤍`;

function showDay() {
    var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var now = new Date();
    var dayIndex = now.getDay();
    var Day = daysOfWeek[dayIndex];
    document.getElementById("day").innerText = Day;
}

showDay();