import type { TagInfo } from "./skills";
import {
  cppTag,
  csTag,
  expressTag,
  grainTag,
  ocamlTag,
  psqlTag,
  reactTag,
  reasonTag,
  wasmTag,
  webglTag,
  winformsTag,
} from "../utils/skills";

export interface ProjectType {
  projectName: string;
  projectUrl: string;
  imgSrc: string;
  body: string;
  techUsed: TagInfo[];
}

export const projects: ProjectType[] = [
  {
    projectName: "Grain",
    projectUrl: "https://github.com/grain-lang/grain",
    imgSrc: "/assets/grain.png",
    body: "Modern functional-first programming language targeting WebAssembly. Core development team member and library author.",
    techUsed: [grainTag, reasonTag, wasmTag]
  },
  {
    projectName: "KBDVisualizer",
    projectUrl: "https://github.com/alex-snezhko/KBDVisualizer",
    imgSrc: "/assets/kbd.png",
    body: "Web app for custom mechanical keyboard enthusiasts to select parts for a build and view an interactive 3D render of it.",
    techUsed: [reactTag, psqlTag, expressTag, webglTag]
  },
  {
    projectName: "Sudoh",
    projectUrl: "https://github.com/alex-snezhko/SudohLang",
    imgSrc: "/assets/sudoh.png",
    body: "Simple programming language inspired by common pseudo-code syntax and features. Compiles to C++ source code.",
    techUsed: [cppTag]
  },
  {
    projectName: "Omen",
    projectUrl: "https://github.com/alex-snezhko/omen",
    imgSrc: "/assets/omen.png",
    body: "Easy-to-use and minimalistic Terminal User Interface file management system for Unix-based systems.",
    techUsed: [ocamlTag]
  },
  // {
  //   projectName: "OCR Text Scanner",
  //   projectUrl: "https://github.com/alex-snezhko/TextScannerConsole",
  //   imgSrc: "/assets/textscanner.png",
  //   body: "Optical Character Recognition application that can parse printed text from images.",
  //   techUsed: [cppTag]
  // },
  // {
  //   projectName: "8-Ball Pool",
  //   projectUrl: "https://github.com/alex-snezhko/PoolGame",
  //   imgSrc: "/assets/pool.png",
  //   body: "8-ball pool simulation game with a custom-built physics engine.",
  //   techUsed: [csTag, winformsTag]
  // },
]