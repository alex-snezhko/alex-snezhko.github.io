import { StaticImage } from "gatsby-plugin-image";
import React from "react";

import kbdVisImg from "../images/kbd.png";
import sudohImg from "../images/sudoh.png";
import dirmanImg from "../images/dirman.png";
import textScannerImg from "../images/textscanner.png";
import poolImg from "../images/pool.jpg";
import flappyBirdAiImg from "../images/flappybirdai.jpg";
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
              projectUrl="https://github.com/alexsnezhko3/KBDVisualizer"
              imgSrc={kbdVisImg}
              description="Web app designed for custom mechanical keyboard enthusiasts to select parts for a build and view an interactive 3D render of it."
              techUsed={["React", "WebGL", "TypeScript", "Express", "PostgreSQL"]}
            />
          </td>
          <td>
            <Project
              projectName="Sudoh"
              projectUrl="https://github.com/alexsnezhko3/SudohLang"
              imgSrc={sudohImg}
              description="Simple dynamically-typed programming language inspired by common pseudo-code syntax and features. Transpiles to C++."
              techUsed={["C++"]}
            />
          </td>
          <td>
            <Project
              projectName="DirMan"
              projectUrl="https://github.com/alexsnezhko3/dirman"
              imgSrc={dirmanImg}
              description="Terminal User Interface file management system which handles most standard operations for manipulating directory trees."
              techUsed={["Rust"]}
            />
          </td>
        </tr>
        <tr>
          <td>
            <Project
              projectName="OCR Text Scanner"
              projectUrl="https://github.com/alexsnezhko3/TextScannerConsole"
              imgSrc={textScannerImg}
              description="Optical character recognition application which parses printed text from images."
              techUsed={["C++"]}
            />
          </td>
          <td>
            <Project
              projectName="8-Ball Pool"
              projectUrl="https://github.com/alexsnezhko3/PoolGame"
              imgSrc={poolImg}
              description="8-ball pool simulation game; physics engine built from scratch."
              techUsed={["C#", "WinForms"]}
            />
          </td>
          <td>
            <Project
              projectName="Flappy Bird AI"
              projectUrl="https://github.com/alexsnezhko3/FlappyBird"
              imgSrc={flappyBirdAiImg}
              description="Clone of the popular Flappy Bird mobile game with the extension of an automatic solving mode."
              techUsed={["Python", "Pygame"]}
            />
          </td>
        </tr>
      </table>

      <p>
        The source code for all of these projects, this webpage, and more can be found on my <a href="http://github.com/alexsnezhko3">GitHub</a> page
      </p>

    </div>
  );
}

