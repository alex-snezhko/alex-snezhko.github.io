import { StaticImage } from "gatsby-plugin-image";
import React from "react";

import kbdVisImg from "../images/kbd.png";
import sudohImg from "../images/sudoh.png";
import dirmanImg from "../images/dirman.png";
import textScannerImg from "../images/textscanner.png";
import poolImg from "../images/pool.png";
import grainImg from "../images/grain.png";
import "../styles/Projects.scss";
import Project from "./Project";

export default function Projects() {
  return (
    <div className="section">
      <h2>Projects</h2>

      <table id="projects-table">
        <tr>
          <td>
            <Project
              projectName="KBDVisualizer"
              projectUrl="https://github.com/alex-snezhko/KBDVisualizer"
              imgSrc={kbdVisImg}
              body="Web app for custom mechanical keyboard enthusiasts to select parts for a build and view an interactive 3D render of it."
              techUsed={["React", "WebGL", "TypeScript", "Express", "PostgreSQL"]}
            />
          </td>
          <td>
            <Project
              projectName="Grain"
              projectUrl="https://github.com/grain-lang/grain"
              imgSrc={grainImg}
              body={<><p style={{ fontStyle: "italic", fontWeight: "bold" }}>Open-source contributor</p><p>Modern functional-first programming language targeting WebAssembly.</p></>}
              techUsed={["Grain", "ReasonML"]}
            />
          </td>
          <td>
            <Project
              projectName="Sudoh"
              projectUrl="https://github.com/alex-snezhko/SudohLang"
              imgSrc={sudohImg}
              body="Simple programming language inspired by common pseudo-code syntax and features. Transpiles to C++."
              techUsed={["C++"]}
            />
          </td>
        </tr>
        <tr>
          <td>
            <Project
              projectName="DirMan"
              projectUrl="https://github.com/alex-snezhko/dirman"
              imgSrc={dirmanImg}
              body="Terminal User Interface file management system which handles most standard operations for manipulating directory trees."
              techUsed={["Rust"]}
            />
          </td>
          <td>
            <Project
              projectName="OCR Text Scanner"
              projectUrl="https://github.com/alex-snezhko/TextScannerConsole"
              imgSrc={textScannerImg}
              body="Optical character recognition application which parses printed text from images."
              techUsed={["C++"]}
            />
          </td>
          <td>
            <Project
              projectName="8-Ball Pool"
              projectUrl="https://github.com/alex-snezhko/PoolGame"
              imgSrc={poolImg}
              body="8-ball pool simulation game; physics engine built from scratch."
              techUsed={["C#", "WinForms"]}
            />
          </td>
        </tr>
      </table>

      <p>
        The source code for all of these projects, this webpage, and more can be found on my <a href="http://github.com/alex-snezhko">GitHub</a> page
      </p>

    </div>
  );
}

