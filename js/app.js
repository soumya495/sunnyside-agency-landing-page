const menuBtn = document.getElementById('menu-button');
const navToggle = document.getElementById('nav-toggle');

menuBtn.addEventListener('click', () => {
    navToggle.classList.toggle('display-toggle-2');
    navToggle.classList.toggle('display-toggle');
});