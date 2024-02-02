const toggle_btn = document.getElementById('toggle-btn');
const menu = document.getElementById('menu');

toggle_btn.addEventListener('click', () => {
    console.log('clicked');
    menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
});