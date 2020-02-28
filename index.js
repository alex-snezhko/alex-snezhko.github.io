var navbar = document.getElementById("navbar");
var navbarHeight = navbar.offsetTop;
function nav() {
    if (window.pageYOffset >= navbarHeight) {
        navbar.classList.add("at-top");
    } else {
        navbar.classList.remove("at-top");
    }
}
window.onscroll = nav;

var contactBox = document.getElementById("contact");
var title = document.getElementById("title");
function shiftContactInfo() {
    contactBox.className = "at-right";
    if (contactBox.offsetTop > title.offsetTop) {
        contactBox.className = "at-center";
    } else {
        contactBox.className = "at-right";
    }
}
shiftContactInfo();
window.addEventListener("resize", shiftContactInfo);
