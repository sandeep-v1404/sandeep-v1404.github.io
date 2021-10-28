AOS.init({
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
});
let color = ["white", "black"];
let toastTitle = ["Dark Mode", "Light Mode"];
let icons = ["fa-moon-o", "fa-sun-o"];
let body = document.querySelector("body");
let nav = document.querySelector("nav");
let textColor = ["black", "orange"];
let button = document.getElementById("toggle-ld");
let toggle = document.getElementById("toggle");
let projectsText = document.getElementById("projects");
let i = 0;

button.addEventListener("click", function () {
    i++;
    body.classList.toggle("dark");
    nav.classList.toggle("dark");
    nav.classList.toggle("navbar-dark");

    button.setAttribute("title", toastTitle[i]);
    toggle.classList.remove(icons[0]);
    toggle.classList.add(icons[i]);
    if (i === color.length - 1) {
        i = -1;
    }
});

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

