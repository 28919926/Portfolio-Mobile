const nav = document.getElementById('rightNav');
const navLinks = document.getElementById('menu');
function showMenu() {
  nav.style.right = '0px';
}
function hideMenu() {
  nav.style.right = '-500px';
  nav.classList.remove('active');
}
