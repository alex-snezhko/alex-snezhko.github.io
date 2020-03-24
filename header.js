$(function() {
    var header = $("header");
    var navbar = $("#navbar");

    var navbarY = $("#titlebar")[0].offsetHeight;
    var h = navbar[0].offsetHeight;
    // spacer for making sure navbar is cleared when at top of page
    var spacer = $("<div></div>").height(h + "px");

    var navAbout = $("#nav-about");
    var navSkills = $("#nav-skills");
    var navProjects = $("#nav-projects");

    var skillsY = $("#skills")[0].offsetTop;
    var projectsY = $("#projects")[0].offsetTop;

    var atTop = false;
    function nav() {
        var y = window.pageYOffset;
        if (y >= navbarY) {
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

        var sub = atTop ? h : 0;
        if (sub === h) {
            asdf = 3;
        }
        if (y >= projectsY - sub) {
            navAbout.removeClass("thispage");
            navSkills.removeClass("thispage");
            navProjects.addClass("thispage");
        } else if (y >= skillsY - sub) {
            navAbout.removeClass("thispage");
            navSkills.addClass("thispage");
            navProjects.removeClass("thispage");
        } else {
            navAbout.addClass("thispage");
            navSkills.removeClass("thispage");
            navProjects.removeClass("thispage");
        }
    }
    $(window).on("scroll", nav);
    nav();
});
