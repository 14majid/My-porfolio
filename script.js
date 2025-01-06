const cards = document.querySelectorAll('.grih');
const prevcard = $('#prev');
const nextcard = $('#next');
let index = 0;

const date = document.querySelector('.date');
date.innerHTML = new Date().getFullYear();



////////////////////////SLIDER FOR PRJECTS/////////////////////////////////////


////////////////////////SLIDER FOR PRJECTS END/////////////////////////////////////
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelector('.navbar-nav');
const navImg = document.querySelector('.navbar img');
const toggleButton = document.querySelector(".navbar-toggler");
const closeBtn = document.querySelector('.closeBtn');

toggleButton.addEventListener("click", () => {
  navbar.style.display = "block";
  console.log('clicked');
});

closeBtn.addEventListener("click", () => {
  navbar.style.display = "none";
  console.log('clicked');
});



////////////////////////SIDEBAR SLIDER/////////////////////////////////////
// const sideBar = document.querySelector(".sidebar");
// function openNav() {
//   document.querySelector(".sidebar").style.width = "300px";
// }
// function closeNav() {
//   document.querySelector(".sidebar").style.width = "0";
// }

// const aTags = document.querySelectorAll('.nav-link');
// aTags.forEach(aTag => {
//   aTag.addEventListener('click', () => {
//     document.querySelector(".sidebar").style.width = "0";
//   });
// });
////////////////////////SIDEBAR SLIDER END/////////////////////////////////////