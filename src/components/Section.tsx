import React from "react";
import { SectionName } from "../utils/shared";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import "../styles/Section.scss";

interface Props {
  name: SectionName;
}

const components = {
  "about": <About />,
  "experience": <Experience />,
  "projects": <Projects />,
  "skills": <Skills />
}

const Section = ({ name }: Props) => (
  <>
    <div id={`${name}-scroll-target`} className="scroll-target" />
    <div className="section">
      {components[name]}
    </div>
  </>
);

export default Section;

