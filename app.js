// Selección para barra de navegación burguer
const burguer = document.querySelector("#burguer-menu");
const ul = document.querySelector("nav ul");

// Evento para mostrar/ocultar el menú
burguer.addEventListener("click", () => {
    ul.classList.toggle("show");
});

// Cerrar el menú de burguer al hacer clic en un enlace
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(element => {
    element.addEventListener("click", () => {
        ul.classList.remove("show");
    });
});

// Funcionalidad de desplazar hacia arriba
const scrollUp = document.querySelector("#scroll-up");

// Evento para desplazar hacia arriba
scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});
