import { StaticImage } from "gatsby-plugin-image";
import React from "react";

import kbdVisImg from "../images/kbd.png";
import sudohImg from "../images/sudoh.png";
import omenImg from "../images/omen.png";
import textScannerImg from "../images/textscanner.png";
import poolImg from "../images/pool.png";
import grainImg from "../images/grain.png";
import "../styles/Projects.scss";
import Project from "./Project";
import { cppTag, csTag, expressTag, grainTag, ocamlTag, psqlTag, reactTag, reasonTag, wasmTag, webglTag, winformsTag } from "../utils/skills";

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
              techUsed={[reactTag, psqlTag, expressTag, webglTag]}
            />
          </td>
          <td>
            <Project
              projectName="Grain"
              projectUrl="https://github.com/grain-lang/grain"
              imgSrc={grainImg}
              body={<><p style={{ fontStyle: "italic", fontWeight: "bold" }}>Open-source contributor, library author</p><p>Modern functional-first programming language targeting WebAssembly.</p></>}
              techUsed={[grainTag, reasonTag, wasmTag]}
            />
          </td>
          <td>
            <Project
              projectName="Sudoh"
              projectUrl="https://github.com/alex-snezhko/SudohLang"
              imgSrc={sudohImg}
              body="Simple programming language inspired by common pseudo-code syntax and features."
              techUsed={[cppTag]}
              // quick hack to get height to match others in row
              techHeight={"125px"}
            />
          </td>
        </tr>
        <tr>
          <td>
            <Project
              projectName="Omen"
              projectUrl="https://github.com/alex-snezhko/omen"
              imgSrc={omenImg}
              body="Easy-to-use Terminal User Interface file management system."
              techUsed={[ocamlTag]}
            />
          </td>
          <td>
            <Project
              projectName="OCR Text Scanner"
              projectUrl="https://github.com/alex-snezhko/TextScannerConsole"
              imgSrc={textScannerImg}
              body="Optical character recognition application which parses printed text from images."
              techUsed={[cppTag]}
            />
          </td>
          <td>
            <Project
              projectName="8-Ball Pool"
              projectUrl="https://github.com/alex-snezhko/PoolGame"
              imgSrc={poolImg}
              body="8-ball pool simulation game with a custom-built physics engine."
              techUsed={[csTag, winformsTag]}
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

