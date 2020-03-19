const FUND_N = 4;
const FRMWRKS_N = 7;
const TOOLS_N = 8;
const LANG_N = 9;

const TOTAL = FUND_N + FRMWRKS_N + TOOLS_N + LANG_N;
// angle of seperation between elements (in radians)
// + 2 because each section has a half image gap and there are 4 sections
const ANGSEP = 2 * Math.PI / (TOTAL + 2);
const RADIUS = 350;

// thickness of arcs that are drawn dividing element groups
const ARC_THICKNESS = 150;
// total width/height of circle
const SIZE = 2 * RADIUS + ARC_THICKNESS;

var circle = $("#skills-circle");
circle.width(SIZE);
circle.height(SIZE);

circle.children("img").addClass("skill-picture-img").wrap('<div class="skill-picture"></div>');
var elements = $(".skill-picture");

/*
    Move elements into place
*/

// angle that the first element in each set (fundamentals,
// languages, etc.) should be transformed by
var angleFirst = -(Math.PI / 2) - (FUND_N - 1) / 2 * ANGSEP;

elements.each(function(index, e) {
    // additional offset to make seperate sections not touch
    var add;
    if (index < FUND_N) add = 0;
    else if (index < FUND_N + FRMWRKS_N) add = 0.5;
    else if (index < FUND_N + FRMWRKS_N + TOOLS_N) add = 1;
    else add = 1.5;

    var angle = angleFirst + (index + add) * ANGSEP;
    $(this).css("transform", "translate(-50%, -50%)" +
                                "rotate(" + angle + "rad)" +
                                "translate(" + RADIUS + "px)" +
                                "rotate(" + -angle + "rad)");
});

/*
    Draw arcs around element groups
*/

var svg = $("#skills-circle").children("svg");
svg.width(2 * RADIUS + ARC_THICKNESS);
svg.height(2 * RADIUS + ARC_THICKNESS);

// find angles on circle at which sections seperate
var divAngles = [];
divAngles[0] = Math.PI / 2 + (FUND_N / 2 + 0.25) * ANGSEP;
divAngles[1] = divAngles[0] - (FUND_N + 0.5) * ANGSEP;
divAngles[2] = divAngles[1] - (FRMWRKS_N + 0.5) * ANGSEP;
divAngles[3] = divAngles[2] - (TOOLS_N + 0.5) * ANGSEP;

// find x and y coordinates on svg for beginning of arc segments
var xs = [];
var ys = [];
for (var i = 0; i < 4; i++) {
    xs[i] = SIZE / 2 + RADIUS * Math.cos(divAngles[i]);
    ys[i] = SIZE / 2 - RADIUS * Math.sin(divAngles[i]);
}

// colors to use for arcs
const strokeColors = [
    "rgb(94, 228, 208)",
    "rgb(245, 127, 127)",
    "rgb(248, 215, 66)",
    "rgb(149, 223, 154)"
];

svg.children("path").each(function(i, e) {
    $(this).css({strokeWidth: ARC_THICKNESS, stroke: strokeColors[i]});
    // set dimensions of arc
    var nextBegin = (i + 1) % 4;
    $(this).css("d", 'path("M' + xs[i] + " " + ys[i] +
                          " A" + RADIUS + " " + RADIUS +
                          " 0 0 1 " + xs[nextBegin] + " " + ys[nextBegin] + '")');
});

// make elements transitioned
elements.each(function(i, e) {
    $(this).css("transition", "0.5s");
});

/*
    Display skill info on hover
*/

// message displayed when no skill is selected
const DESCRIPTION = "Hover over an icon to view details" +
    '<p style="color: ' + strokeColors[0] + ';">Fundamentals</p>' +
    '<p style="color: ' + strokeColors[3] + ';">Languages</p>' +
    '<p style="color: ' + strokeColors[1] + ';">Frameworks/Libraries</p>' +
    '<p style="color: ' + strokeColors[2] + ';">Tools/Environments</p>';

// elements relevant to skill info displaying events
var info = $("#skill-info");
var infoImg = $("#info-image");
var infoName = $("#info-name");
var infoProf = $("#info-proficiency");
const profColor = {
    "Proficient": "rgb(33, 204, 50)",
    "Intermediate": "rgb(56, 168, 127)",
    "Familiar": "rgb(140, 161, 48)"
}
var infoList = $("#info-list");

elements.on("mouseenter", function() {
    // stop fade animation if running
    info.finish();

    var img = $(this).children().first();
    infoName.html(img.attr("alt"));

    // check if this element has valid 'prof' data; if it does not, it is a fundamentals element
    var prof = img.data("prof");
    if (prof) {
        infoImg.attr("src", img.attr("src"));
        infoProf.html(prof);
        infoProf.css("color", profColor[prof]);
    } else {
        // will only work if info list immediately follows img in html
        infoList.html($(this).next().html());
    }

    // fade info box in
    info.hide().fadeIn(300);
});

// fade in hover description
function noneSelected() {
    infoImg.attr("src", "");
    infoProf.html("");
    infoName.html(DESCRIPTION);
    infoList.html("");

    info.hide().fadeIn(300);
}

elements.on("mouseleave", function() {
    info.finish().fadeOut(300, noneSelected);
})

noneSelected();
circle.css("visibility", "visible");
