const toggleBtn = document.getElementById('toggle-navbar');
const menu = document.getElementById('menu');
const buttonNavbar = document.querySelector('.button-nav');

toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Cegah bubbling agar tidak langsung men-trigger document click
    menu.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (!buttonNavbar.contains(e.target) && !toggleBtn.contains(e.target)) {
        menu.classList.remove('active');
    }
});
