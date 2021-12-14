var h;

$(function() {
    var header = $("header");
    var navbar = $("#navbar");

    var navbarY = $("#titlebar")[0].offsetHeight;
    h = navbar[0].offsetHeight;
    // spacer for making sure navbar is cleared when at top of page
    var spacer = $("<div></div>").height(h + "px");

    var navAbout = $("#nav-about");
    var navEducation = $("#nav-education");
    var navExperience = $("#nav-experience");
    var navProjects = $("#nav-projects");
    var navSkills = $("#nav-skills");

    var educationY = $("#education")[0].offsetTop;
    var experienceY = $("#experience")[0].offsetTop;
    var projectsY = $("#projects")[0].offsetTop;
    var skillsY = $("#skills")[0].offsetTop;

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
        if (y >= skillsY - sub) {
            navAbout.removeClass("thispage");
            navEducation.removeClass("thispage");
            navExperience.removeClass("thispage");
            navProjects.removeClass("thispage");
            navSkills.addClass("thispage");
        } else if (y >= projectsY - sub) {
            navAbout.removeClass("thispage");
            navEducation.removeClass("thispage");
            navExperience.removeClass("thispage");
            navProjects.addClass("thispage");
            navSkills.removeClass("thispage");
        } else if (y >= experienceY - sub) {
            navAbout.removeClass("thispage");
            navEducation.removeClass("thispage");
            navExperience.addClass("thispage");
            navProjects.removeClass("thispage");
            navSkills.removeClass("thispage");
        } else if (y >= educationY - sub) {
            navAbout.removeClass("thispage");
            navEducation.addClass("thispage");
            navExperience.removeClass("thispage");
            navProjects.removeClass("thispage");
            navSkills.removeClass("thispage");
        } else {
            navAbout.addClass("thispage");
            navEducation.removeClass("thispage");
            navExperience.removeClass("thispage");
            navProjects.removeClass("thispage");
            navSkills.removeClass("thispage");
        }
    }
    $(window).on("scroll", nav);
    nav();
});

function scrollToElem(id) {
    var y = $("#" + id)[0].offsetTop - h + 1;
    $(window).scrollTop(y);
}
