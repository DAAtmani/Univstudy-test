'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header active when scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElem = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElem);

document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-form");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const nom = document.getElementById("nom").value;
    const prenom = document.getElementById("prenom").value;
    const email = document.getElementById("email").value;

    // Vérifier si les champs nom, prénom et email sont vides
    if (nom.trim() === "" || prenom.trim() === "" || email.trim() === "") {
      alert("Veuillez remplir tous les champs obligatoires : Nom, Prénom, Email.");
    } else {
      // Si les champs sont remplis, vous pouvez soumettre le formulaire ici
      alert("Formulaire soumis avec succès !");
      // Réinitialiser le formulaire si nécessaire
      contactForm.reset();
    }
  });
});

// script.js

// script.js

// Get a reference to the button element
const connexionButton = document.getElementById('connexionButton');

// Add a click event listener to the button
connexionButton.addEventListener('click', function() {
  // Navigate to the conxinsc.html page in the "Page" folder
  window.location.href = 'conxinsc.html';
});

// Sélectionnez le bouton avec la classe "card-btn"
var cardButton = document.querySelector('.grid-list li:nth-child(2) .card-btn');

// Ajoutez un gestionnaire d'événement de clic au bouton
cardButton.addEventListener('click', function() {
  // Redirigez l'utilisateur vers la nouvelle page HTML
  window.location.href = 'logement.html';
});




