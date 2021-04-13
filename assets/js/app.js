
//menu toggle
const btnActive = document.getElementById('btn-menu-active');
const menu = document.getElementById('menu-active');

btnActive.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});