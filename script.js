const cards = document.querySelectorAll('.grih');
const prevcard = $('#prev');
const nextcard = $('#next');
const openBtn = document.querySelector('#openbtn');
let index = 0;

const date = document.querySelector('.date');
date.innerHTML = new Date().getFullYear();



openBtn.addEventListener("click", ()=> {
  openBtn.classList.toggle('actbtn')
})
////////////////////////SLIDER FOR PRJECTS/////////////////////////////////////


////////////////////////SLIDER FOR PRJECTS END/////////////////////////////////////

const n = document.querySelector(".navbar");

const topPos = n.offsetTop;
if (topPos > 100) {
  n.style.position = 'none'
  n.style.color = '#fff'
}


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

slideIt(index);