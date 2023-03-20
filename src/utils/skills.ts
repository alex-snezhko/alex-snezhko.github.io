export interface Skill {
  name: string;
  description: string;
  imgUrl: string;
}

const skill = (name: string, description: string, imgName: string): Skill => ({ name, description, imgUrl: `/assets/${imgName}` });

export const FRAMEWORKS = [
  skill("React", "JavaScript UI Library", "react.png"),
  skill("Next.js", "React Web Framework", "nextjs.png"),
  skill("ASP.NET", ".NET Web Framework", "dotnet.png"),
  skill("Spring Framework", "Java Web Framework", "spring.png"),
  skill("WebGL", "Web Graphics Library", "webgl.png"),
];
export const TOOLS = [
  skill("Linux", "Operating System Family", "linux.png"),
  skill("Unity", "Game Engine", "unity.png"),
  skill("PostgreSQL", "Database Management System", "psql.png"),
  skill("Azure", "Cloud Service Suite", "azure.png"),
];
export const LANGUAGES = [
  skill("Rust", "Systems Programming", "rust.png"),
  skill("OCaml", "Functional Programming", "ocaml.png"),
  skill("Python", "Scripting", "python.png"),
  skill("TypeScript", "Web/Scripting", "typescript.png"),
  skill("C/C++", "Systems Programming", "cpp.png"),
  skill("C#", ".NET Programming", "csharp.png"),
  skill("Java", "Object-Oriented Programming", "java.png"),
];

export const ALL_SKILLS = [...FRAMEWORKS, ...TOOLS, ...LANGUAGES];

export interface TagInfo {
  name: string;
  imgUrl: string;
  color: string;
}

const tag = (name: string, img: string, color: string): TagInfo => ({ name, color, imgUrl: `/assets/${img}` });

export const javaTag = tag("Java", "java.png", "#f2d6ac");
export const reactTag = tag("React", "react.png", "#c5e2f0");
export const mysqlTag = tag("MySQL", "mysql.png", "#c1d1e6");
export const springTag = tag("Spring Framework", "spring.png", "#c6e3c3");
export const graphqlTag = tag("GraphQL", "graphql.png", "#edd1e5");
export const rmqTag = tag("RabbitMQ", "rmq.png", "#f0d1b6");
export const csTag = tag("C#", "csharp.png", "#e2ceed");
export const azureTag = tag("Azure", "azure.png", "#cbe7f7");
export const aspnetTag = tag("ASP.NET Core", "dotnet.png", "#cbe4f2");
export const webglTag = tag("WebGL", "webgl.png", "#f2cece");
export const expressTag = tag("Express", "express.png", "#d9d9d9");
export const psqlTag = tag("PostgreSQL", "psql.png", "#c9dcf5");
export const grainTag = tag("Grain", "grainsmall.png", "#f0dabb");
export const reasonTag = tag("Reason", "reason.png", "#edcec0");
export const cppTag = tag("C++", "cpp.png", "#c6d7f7");
export const ocamlTag = tag("OCaml", "ocaml.png", "#f5d7ba");
export const winformsTag = tag("WinForms", "dotnet.png", "#cbe4f2");
export const wasmTag = tag("WebAssembly", "webassembly.png", "#ded0f5");

