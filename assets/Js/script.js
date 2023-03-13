// Création d'une constante pour l'ouverture//
const open = document.querySelector(".open");

//Constante pour le déroulement du menu de la NavBar//
const MenuLinks = document.querySelector(".MenuLinks") ;

//On ajoute un évènement à la const "open" : au click de l'icone hamburger, le menu s'affiche//
open.addEventListener("click", () => {
    MenuLinks.classList.toggle("active");
})

const NavBar = document.querySelector(".NavBar");
