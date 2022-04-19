const FRMWRKS_N = 5;
const TOOLS_N = 7;
const LANG_N = 8;

const TOTAL = FRMWRKS_N + TOOLS_N + LANG_N;
// angle of seperation between elements (in radians)
// + 1.5 because each section has a half image gap and there are 3 sections
const ANGSEP = 2 * Math.PI / (TOTAL + 1.5);
const RADIUS = 410;
var TEXT_RADIUS = RADIUS + 90;

// thickness of arcs that are drawn dividing element groups
const ARC_THICKNESS = 150;
// total width/height of circle
const SIZE = 1050;

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
var ANGLE_FIRST = -(Math.PI / 2) + (3 / 4) * ANGSEP;

elements.each(function(index, e) {
    // additional offset to make seperate sections not touch
    var add;
    if (index < FRMWRKS_N) add = 0;
    else if (index < FRMWRKS_N + TOOLS_N) add = 0.5;
    else add = 1;

    var angle = ANGLE_FIRST + (index + add) * ANGSEP;
    $(this).css("transform", "translate(-50%, -50%)" +
                             "rotate(" + angle + "rad)" +
                             "translate(" + RADIUS + "px)" +
                             "rotate(" + -angle + "rad)");
});

// +-------------------------------------+
// |   Draw arcs around element groups   |
// +-------------------------------------+

var svg = $("#skills-circle").children("svg");
svg.width(SIZE);
svg.height(SIZE);

// find angles on circle at which sections seperate
var divAngles = [];
divAngles[0] = Math.PI / 2;// + (FUND_N / 2 + 0.25) * ANGSEP;
divAngles[1] = divAngles[0] - (FRMWRKS_N + 0.5) * ANGSEP;
divAngles[2] = divAngles[1] - (TOOLS_N + 0.5) * ANGSEP;
// divAngles[3] = divAngles[2] - (TOOLS_N + 0.5) * ANGSEP;

function getXY(radius, angle) {
    return {
        x: SIZE / 2 + radius * Math.cos(angle),
        y: SIZE / 2 - radius * Math.sin(angle)
    }
}

// find x and y coordinates on svg for beginning of arc segments
var arcBegins = [];
for (var i = 0; i < divAngles.length; i++) {
    arcBegins[i] = getXY(RADIUS, divAngles[i]);
}

var LANG_TEXT_ANGLE = 3.2;
var TOOLS_TEXT_ANGLE = 5.35;
var FRMWRKS_TEXT_ANGLE = 7.35;

var LANG_TEXT_BEGIN = getXY(TEXT_RADIUS, LANG_TEXT_ANGLE);
var LANG_TEXT_END = getXY(TEXT_RADIUS, LANG_TEXT_ANGLE - 2);
var FRMWRKS_TEXT_BEGIN = getXY(TEXT_RADIUS, FRMWRKS_TEXT_ANGLE);
var FRMWRKS_TEXT_END = getXY(TEXT_RADIUS, FRMWRKS_TEXT_ANGLE - 2);
var TOOLS_TEXT_BEGIN = getXY(TEXT_RADIUS, TOOLS_TEXT_ANGLE);
var TOOLS_TEXT_END = getXY(TEXT_RADIUS, TOOLS_TEXT_ANGLE - 2);

// var spu = svg_path_utils.SVGPathUtils();

svg.children("#langs-curve").css("d",
        'path("M' + LANG_TEXT_BEGIN.x + " " + LANG_TEXT_BEGIN.y +
        " A" + TEXT_RADIUS + " " + TEXT_RADIUS +
        " 0 0 1 " + LANG_TEXT_END.x + " " +
        LANG_TEXT_END.y + '")');

// var p = 'path("M' + FRMWRKS_TEXT_BEGIN.x + " " + FRMWRKS_TEXT_BEGIN.y +
//         " A" + TEXT_RADIUS + " " + TEXT_RADIUS +
//         " 0 0 1 " + FRMWRKS_TEXT_END.x + " " +
//         FRMWRKS_TEXT_END.y + '")'
// var ip = spu.inversePath(p);

svg.children("#frameworks-curve").css("d",
        'path("M' + FRMWRKS_TEXT_BEGIN.x + " " + FRMWRKS_TEXT_BEGIN.y +
        " A" + TEXT_RADIUS + " " + TEXT_RADIUS +
        " 0 0 1 " + FRMWRKS_TEXT_END.x + " " +
        FRMWRKS_TEXT_END.y + '")');

svg.children("#tools-curve").css("d",
        'path("M' + TOOLS_TEXT_BEGIN.x + " " + TOOLS_TEXT_BEGIN.y +
        " A" + TEXT_RADIUS + " " + TEXT_RADIUS +
        " 0 0 1 " + TOOLS_TEXT_END.x + " " +
        TOOLS_TEXT_END.y + '")');

// colors to use for arcs
const strokeColors = [
    "rgb(120, 200, 220)", // frameworks
    "rgb(120, 180, 200)", // tools
    "rgb(120, 220, 240)", // langs
];

svg.children(".arc-fill").each(function(i, e) {
    $(this).css({strokeWidth: ARC_THICKNESS, stroke: strokeColors[i]});
    // set dimensions of arc
    var nextBegin = (i + 1) % divAngles.length;
    $(this).css("d", 'path("M' + arcBegins[i].x + " " + arcBegins[i].y +
                          " A" + RADIUS + " " + RADIUS +
                          " 0 0 1 " + arcBegins[nextBegin].x + " " +
                          arcBegins[nextBegin].y + '")');
});

// make elements transitioned
elements.each(function(i, e) {
    $(this).css("transition", "0.5s");
});

// +---------------------------------+
// |   Display skill info on hover   |
// +---------------------------------+

// message displayed when no skill is selected
const DESCRIPTION = "Hover over an icon to view";

// elements relevant to skill info displaying events
var info = $("#skill-info");
var infoImg = $("#info-image");
var infoName = $("#info-name");
// language proficiency or extra description
var infoExtra = $("#info-extra");

elements.on("mouseenter", function() {
    // stop fade animation if running
    info.finish();

    var img = $(this).children().first();
    infoName.html(img.attr("alt"));

    infoImg.attr("src", img.attr("src"));
    infoExtra.html(img.data("desc"));
    infoExtra.css("color", "gray");

    // fade info box in
    info.hide().fadeIn(300);
});

// fade in hover description
function noneSelected() {
    infoImg.attr("src", "");
    infoExtra.html("");
    infoName.html(DESCRIPTION);

    info.hide().fadeIn(300);
}

elements.on("mouseleave", function() {
    info.finish().fadeOut(300, noneSelected);
})

noneSelected();
circle.css("visibility", "visible");
