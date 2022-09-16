<<<<<<< HEAD
// const nav = document.getElementById('rightNav');
// const navLinks = document.getElementById('menu');
// function showMenu() {
//   nav.style.right = '0px';
// }
// function hideMenu() {
//   nav.style.right = '-500px';
//   nav.classList.remove('active');
// }
// nav.forEach((n) => n.addEventListener('click', hideMenu));
=======
const nav = document.getElementById('rightNav');
const navLinks = document.getElementById('menu');
function showMenu() {
  nav.style.right = '0px';
}
function hideMenu() {
  nav.style.right = '-500px';
  nav.classList.remove('active');
}

nav.forEach((n) => n.addEventListener('click', hideMenu));
>>>>>>> cdeaf684dba88a0289d57cc173b1fba3617287f7

// function afterClick() {
//   nav.classList.remove('active');
// }

// navLinks.forEach((n) => n.addEventListener('click', afterClick));
// nav.forEach((n) => n.addEventListener('click', showMenu));
