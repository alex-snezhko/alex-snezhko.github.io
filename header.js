var header = $("#header");
var navbar = $("#navbar");
var titleBar = $("#titlebar");
var links = $("#header-links");
var title = $("#title");

var navbarY = titleBar.get(0).offsetHeight;
var h = navbar.get(0).offsetHeight;
// spacer for making sure navbar is cleared when at top of page
var spacer = $("<div></div>").height(navbar.get(0).offsetHeight + "px");

var atTop = false;
function nav() {
    if (window.pageYOffset >= navbarY) {
        if (!atTop) {
            navbar.addClass("at-top");
            header.append(spacer);
            atTop = true;
        }
    } else {
        if (atTop) {
            navbar.removeClass("at-top");
            spacer.remove();
            atTop = false;
        }
    }
}
window.addEventListener("scroll", nav);

/*function shiftContactInfo() {
    titleBar.css("flex-flow", "row");
    contactBox.css("text-align", "right");
    if (contactBox.offset().top > title.offset().top) {
        titleBar.css("flex-flow", "column");
        contactBox.css("text-align", "center");
    } else {
        titleBar.css("flex-flow", "row");
        contactBox.css("text-align", "right");
    }

    navbarY = titleBar.height();
}
shiftContactInfo();
window.addEventListener("resize", shiftContactInfo);*/
