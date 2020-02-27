window.onscroll = function() { nav(); }

var navbar = document.getElementById("navbar");
var navbarHeight = navbar.offsetTop;

function nav() {
    if (window.pageYOffset >= navbarHeight) {
        navbar.classList.add("at-top");
    } else {
        navbar.classList.remove("at-top");
    }
}