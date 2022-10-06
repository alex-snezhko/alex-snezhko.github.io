import React from "react";

import reactImg from "../images/react.png";
import nextjsImg from "../images/nextjs.png";
import dotnetImg from "../images/dotnet.png";
import webglImg from "../images/webgl.png";
import springImg from "../images/spring.png";
import linuxImg from "../images/linux.png";
import gitImg from "../images/git.png";
import nodeImg from "../images/node.png";
import unityImg from "../images/unity.png";
import psqlImg from "../images/psql.png";
import mysqlImg from "../images/mysql.png";
import azureImg from "../images/azure.png";
import rustImg from "../images/rust.png";
import ocamlImg from "../images/ocaml.png";
import pythonImg from "../images/python.png";
import typescriptImg from "../images/typescript.png";
import cppImg from "../images/cpp.png";
import csharpImg from "../images/csharp.png";
import javaImg from "../images/java.png";
import graphqlImg from "../images/graphql.png";
import rmqImg from "../images/rmq.png";
import expressImg from "../images/express.png";
import grainsmallImg from "../images/grainsmall.png";
import reasonImg from "../images/reason.png";
import webassemblyImg from "../images/webassembly.png";

import Tag from "../components/Tag";

export interface Skill {
  name: string;
  description?: string;
  imgUrl: string;
}

const skill = (name: string, description: string, imgUrl: string): Skill => ({ name, description, imgUrl });
const skillNoDesc = (name: string, imgUrl: string): Skill => ({ name, imgUrl });

export const FRAMEWORKS = [
  skill("React", "JavaScript UI Library", reactImg),
  skill("Next.js", "React Web Framework", nextjsImg),
  skill("ASP.NET", "Web Framework", dotnetImg),
  skill("Spring Framework", "Web Framework", springImg),
  skill("WebGL", "Web Graphics Library", webglImg),
];
export const TOOLS = [
  skill("Linux", "Operating System Family", linuxImg),
  skill("Git", "Version Control System", gitImg),
  skill("Node.js", "JavaScript Runtime", nodeImg),
  skill("Unity", "Game Engine", unityImg),
  skill("PostgreSQL", "Database Management System", psqlImg),
  skill("Azure", "Cloud Service Suite", azureImg),
];
export const LANGUAGES = [
  skill("Rust", "Systems Programming Language", rustImg),
  skill("OCaml", "Functional Programming Language", ocamlImg),
  skill("Python", "Scripting Language", pythonImg),
  skill("TypeScript/JS", "Web Scripting Languages", typescriptImg),
  skill("C/C++", "Systems Programming Languages", cppImg),
  skill("C#", ".NET Programming Language", csharpImg),
  skill("Java", "Enterprise™ Programming Language", javaImg),
  // skillNoDesc("Rust", rustImg),
  // skillNoDesc("OCaml", ocamlImg),
  // skillNoDesc("Python", pythonImg),
  // skillNoDesc("TypeScript/JS", typescriptImg),
  // skillNoDesc("C/C++", cppImg),
  // skillNoDesc("C#", csharpImg),
  // skillNoDesc("Java", javaImg),
];

export const ALL_SKILLS = [...FRAMEWORKS, ...TOOLS, ...LANGUAGES];

const tag = (name: string, img: string, color: string) => <Tag img={img} name={name} color={color} />
export const javaTag = tag("Java", javaImg, "#f2d6ac");
export const reactTag = tag("React", reactImg, "#c5e2f0");
export const mysqlTag = tag("MySQL", mysqlImg, "#c1d1e6");
export const springTag = tag("Spring Framework", springImg, "#c6e3c3");
export const graphqlTag = tag("GraphQL", graphqlImg, "#edd1e5");
export const rmqTag = tag("RabbitMQ", rmqImg, "#f0d1b6");
export const csTag = tag("C#", csharpImg, "#e2ceed");
export const azureTag = tag("Azure", azureImg, "#cbe7f7");
export const aspnetTag = tag("ASP.NET Core", dotnetImg, "#cbe4f2");
export const webglTag = tag("WebGL", webglImg, "#f2cece");
export const expressTag = tag("Express", expressImg, "#d9d9d9");
export const psqlTag = tag("PostgreSQL", psqlImg, "#c9dcf5");
export const grainTag = tag("Grain", grainsmallImg, "#f0dabb");
export const reasonTag = tag("Reason", reasonImg, "#edcec0");
export const cppTag = tag("C++", cppImg, "#c6d7f7");
export const ocamlTag = tag("OCaml", ocamlImg, "#f5d7ba");
export const winformsTag = tag("WinForms", dotnetImg, "#cbe4f2");
export const wasmTag = tag("WebAssembly", webassemblyImg, "#ded0f5");

