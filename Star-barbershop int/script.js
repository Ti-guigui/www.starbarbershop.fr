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
