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

function afterClick() {
  nav.classList.remove('active');
}

navLinks.forEach((n) => n.addEventListener('click', afterClick));
nav.forEach((n) => n.addEventListener('click', showMenu));

// const nav = document.getElementById("rightNav");
// const close = document.getElementById("close");
// const openn = document.getElementById("menu");

// openn.addEventListner("click", function(){
//     nav.classList.add("open");
// })

// close.addEventListner("click", function(){
//     nav.classList.remove("open");
// })

