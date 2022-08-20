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
import azureImg from "../images/azure.png";
import rustImg from "../images/rust.png";
import pythonImg from "../images/python.png";
import javascriptImg from "../images/javascript.png";
import typescriptImg from "../images/typescript.png";
import cppImg from "../images/cpp.png";
import csharpImg from "../images/csharp.png";
import javaImg from "../images/java.png";

export interface Skill {
  name: string;
  description?: string;
  imgUrl: string;
}

const skill = (name: string, description: string, imgUrl: string): Skill => ({ name, description, imgUrl });
const skillNoDesc = (name: string, imgUrl: string): Skill => ({ name, imgUrl });

export const FRAMEWORKS = [
  skill("React", "JavaScript Library", reactImg),
  skill("Next.js", "React Meta-framework", nextjsImg),
  skill("ASP.NET", "Web Framework", dotnetImg),
  skill("Spring Framework", "Web Framework", springImg),
  skill("WebGL", "Web Graphics Library", webglImg),
];
export const TOOLS = [
  skill("Linux", "Operating System Family", linuxImg),
  skill("Git", "Version Control", gitImg),
  skill("Node.js", "JavaScript Runtime", nodeImg),
  skill("Unity", "Game Engine", unityImg),
  skill("PostgreSQL", "DBMS", psqlImg),
  skill("Azure", "Cloud Service Suite", azureImg),
];
export const LANGUAGES = [
  skillNoDesc("Rust", rustImg),
  skillNoDesc("Python", pythonImg),
  skillNoDesc("TypeScript/JS", typescriptImg),
  skillNoDesc("C/C++", cppImg),
  skillNoDesc("C#", csharpImg),
  skillNoDesc("Java", javaImg),
];

export const ALL_SKILLS = [...FRAMEWORKS, ...TOOLS, ...LANGUAGES];

