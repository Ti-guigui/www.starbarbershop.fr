// script.js
// Menu burger pour mobile
const burger = document.querySelector('.burger');
const nav = document.querySelector('nav ul');

if (burger) {
  burger.addEventListener('click', () => {
    nav.classList.toggle('open');
    burger.classList.toggle('active');
  });
}
// Sélection des éléments
const modal = document.getElementById("booksyModal");
const btn = document.getElementById("booksyBtn");
const span = document.querySelector(".close");

const days = document.querySelectorAll(".hours li");
const today = new Date().getDay(); // 0 = dimanche

days.forEach((day, index) => {
  if (index === (today === 0 ? 6 : today - 1)) {
    day.style.color = "#d4af37";
    day.style.fontWeight = "bold";
  }
});


// Ouvrir la modale
btn.onclick = function() {
  modal.style.display = "block";
}

// Fermer la modale
span.onclick = function() {
  modal.style.display = "none";
}

// Fermer en cliquant en dehors de la modale
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
