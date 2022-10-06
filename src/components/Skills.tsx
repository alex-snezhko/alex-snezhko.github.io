import React, { useEffect, useRef, useState } from "react";
import { ALL_SKILLS, FRAMEWORKS, Skill, TOOLS } from "../utils/skills";
import "../styles/Skills.scss";

const CIRCLE_RADIUS = 420;
const ARC_THICKNESS = 170;
const TEXT_RADIUS = CIRCLE_RADIUS + ARC_THICKNESS / 2 + 20;
// total width/height of circle displaying skills
const CIRCLE_SIZE = TEXT_RADIUS * 2 + 80;

// angle of seperation between elements (in radians)
// + 1.5 because each section has a half image gap and there are 3 sections
const ANGLE_SEP = 2 * Math.PI / (ALL_SKILLS.length + 1.5);
// angle that the first element in each set (fundamentals,
// languages, etc.) should be transformed by
const ANGLE_FIRST = -(Math.PI / 2) + (3 / 4) * ANGLE_SEP;

// find angles on circle at which sections seperate
const DIV_ANGLES = [];
DIV_ANGLES[0] = Math.PI / 2;
DIV_ANGLES[1] = DIV_ANGLES[0] - (FRAMEWORKS.length + 0.5) * ANGLE_SEP;
DIV_ANGLES[2] = DIV_ANGLES[1] - (TOOLS.length + 0.5) * ANGLE_SEP;

const getXY = (radius: number, angle: number) => ({
  x: CIRCLE_SIZE / 2 + radius * Math.cos(angle),
  y: CIRCLE_SIZE / 2 - radius * Math.sin(angle)
});

// find x and y coordinates on svg for beginning of arc segments
const ARC_BEGINS = DIV_ANGLES.map(angle => getXY(CIRCLE_RADIUS, angle));

const svgPathD = (begin: { x: number, y: number }, end: { x: number, y: number }, radius: number, upsideDown: boolean) => upsideDown
  ? `M ${end.x} ${end.y} A ${radius + 20} ${radius + 20} 0 0 0 ${begin.x} ${begin.y}`
  : `M ${begin.x} ${begin.y} A ${radius} ${radius} 0 0 1 ${end.x} ${end.y}`;

interface CurveInfo {
  fullName: string;
  shortName: string;
  upsideDown: boolean;
  textAngleInfo: { begin: { x: number, y: number }, end: { x: number, y: number }}
}

const getTextInfo = (textAngle: number, upsideDown: boolean) => ({
  begin: getXY(TEXT_RADIUS + (upsideDown ? 20 : 0), textAngle),
  end: getXY(TEXT_RADIUS + (upsideDown ? 20 : 0), textAngle - 2)
})

const CURVES: CurveInfo[] = [
  { fullName: "Programming Languages", shortName: "langs", upsideDown: false, textAngleInfo: getTextInfo(3.1, false) },
  { fullName: "Libraries/Frameworks", shortName: "frameworks", upsideDown: false, textAngleInfo: getTextInfo(7.2, false) },
  { fullName: "Tools/Software", shortName: "tools", upsideDown: true, textAngleInfo: getTextInfo(6.9, true) }
];

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [shownSkill, setShownSkill] = useState<Skill | null>(null);

  const skillInfoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedSkill) {
      setShownSkill(selectedSkill);
    } else {
      // if new element hasn't been hovered after faded out, reset to show "Hover to ..." prompt
      const timeout = setTimeout(() => setShownSkill(null), 500);
      return () => clearTimeout(timeout);
    }
  }, [selectedSkill]);

  // workaround solution for getting mouse enter on new element while old is still fading fading-out
  // to cause the new one's fade to start from opacity 0 rather than the old one's current opacity.
  // if this variable is true, then the "transition" css property will be removed for one render
  const restartFade = !!selectedSkill && (shownSkill?.name !== selectedSkill.name);
  const fadeIn = (!shownSkill && !selectedSkill) || (!restartFade && selectedSkill);

  return (
    <div className="section">
      <h2>Skills</h2>

      <div id="skills-circle" style={{ width: CIRCLE_SIZE, height: CIRCLE_SIZE }}>
        <svg xmlns="http://www.w3.org/2000/svg" style={{ width: CIRCLE_SIZE, height: CIRCLE_SIZE }} width={CIRCLE_SIZE} height={CIRCLE_SIZE}>
          {CURVES.map((curve, i) => (
            <>
              <path
                className={`arc-fill-${curve.shortName}`}
                fill="none"
                strokeWidth={ARC_THICKNESS}
                d={svgPathD(ARC_BEGINS[i], ARC_BEGINS[(i + 1) % 3], CIRCLE_RADIUS, false)}
              />

              <path
                fill="none"
                id={`${curve.shortName}-curve`}
                d={svgPathD(curve.textAngleInfo.begin, curve.textAngleInfo.end, TEXT_RADIUS, curve.upsideDown)}
              />

              <text width="500">
                <textPath xlinkHref={`#${curve.shortName}-curve`}>
                  {curve.fullName}
                </textPath>
              </text>
            </>
          ))}
        </svg>

        {ALL_SKILLS.map((item, i) => {
          // additional offset to make seperate sections not touch
          const add = (i < FRAMEWORKS.length) ? 0 : (i < FRAMEWORKS.length + TOOLS.length) ? 0.5 : 1;

          const angle = ANGLE_FIRST + (i + add) * ANGLE_SEP;
          const transform = `translate(-50%, -50%) rotate(${angle}rad) translate(${CIRCLE_RADIUS}px) rotate(${-angle}rad)`;

          return (
            <div
              key={item.name}
              className="skill-picture"
              style={{ transform }}
              onMouseEnter={() => setSelectedSkill(item)}
              onMouseLeave={() => setSelectedSkill(null)}
            >
              <img src={item.imgUrl} alt={item.name} />
            </div>
          );
        })}

        <div
          ref={skillInfoRef}
          id="skill-info"
          className={`${restartFade ? "reset" : "transition"} ${fadeIn ? "fading-in" : "fading-out"}`}
        >
          {shownSkill ? (
            <>
              <img id="info-image" src={shownSkill.imgUrl} alt={shownSkill.name} />
              <h1 id="info-name">{shownSkill.name}</h1>
              <h3 id="info-extra" style={{ color: "gray" }}>{shownSkill.description ?? ""}</h3>
            </>
          ) : !restartFade && (
            <h1 id="info-name">Hover over an icon to view details</h1>
          )}
        </div>
      </div>
    </div>
  );
}

