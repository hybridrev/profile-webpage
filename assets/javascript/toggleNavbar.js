const toggleBtn = document.getElementById('toggle-navbar');
const navbar = document.getElementById('navbar');

toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    navbar.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && !toggleBtn.contains(e.target)) {
        navbar.classList.remove('active');
    }
});
