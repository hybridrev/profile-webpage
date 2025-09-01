// transisi
document.addEventListener("DOMContentLoaded", function () {
    const mainElement = document.querySelectorAll("main");
    setTimeout(function () {
        mainElement.forEach(function (main) {
            main.classList.add("load");
        });
    }, 150);
});