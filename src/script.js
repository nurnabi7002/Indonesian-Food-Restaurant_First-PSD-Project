// Nav Menu Toggle

let menuBtn = document.getElementById('menu-btn');

menuBtn.addEventListener('click', () => {
    let sideBar = document.getElementById('side-bar');
    sideBar.classList.toggle('menu-open')
});


// Footer Dynamic Copyright Date

let date = new Date();
let copyright_year = date.getFullYear();
let datePlace = document.getElementById('cp-date');
setInterval(() => {
    datePlace.innerHTML = copyright_year;
}, 1000);


// Animation

let aniLefts = document.querySelectorAll('.aniLeft');
let aniRights = document.querySelectorAll('.aniRight');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains("aniLeft")) {
        entry.target.classList.add("animation-from-left");
      }
      if (entry.target.classList.contains("aniRight")) {
        entry.target.classList.add("animation-from-right");
      }
    }
  });
});


aniLefts.forEach(el => observer.observe(el));
aniRights.forEach(el => observer.observe(el));