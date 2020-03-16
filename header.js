var header = document.getElementById("header");
var navbar = document.getElementById("navbar");
var titleBar = document.getElementById("titlebar");
var contactBox = document.getElementById("contact");
var title = document.getElementById("title");

var navbarY = titleBar.offsetHeight;

// spacer for making sure navbar is cleared when at top of page
var spacer = document.createElement("div");
spacer.style.height = navbar.offsetHeight + "px";
function nav() {
    if (window.pageYOffset >= navbarY) {
        navbar.classList.add("at-top");
        if (spacer.parentElement !== header)
            header.appendChild(spacer);
    } else {
        navbar.classList.remove("at-top");
        if (spacer.parentElement === header)
            header.removeChild(spacer);
    }
}
window.addEventListener("scroll", nav);

function shiftContactInfo() {
    titleBar.style.flexFlow = "row";
    contactBox.style.textAlign = "right";
    if (contactBox.offsetTop > title.offsetTop) {
        titleBar.style.flexFlow = "column";
        contactBox.style.textAlign = "center";
    } else {
        titleBar.style.flexFlow = "row";
        contactBox.style.textAlign = "right";
    }

    navbarY = titleBar.offsetHeight;
}
shiftContactInfo();
window.addEventListener("resize", shiftContactInfo);
