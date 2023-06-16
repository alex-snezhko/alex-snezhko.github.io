export interface Skill {
  name: string;
  description: string;
  imgUrl: string;
  deviconId: string;
}

const skill = (name: string, description: string, imgUrl: string, deviconId: string): Skill => ({ name, description, imgUrl: `/assets/${imgUrl}`, deviconId });

export const FRAMEWORKS = [
  skill("React", "JavaScript UI Library", "react.png", "react-original"),
  skill("Next.js", "React Web Framework", "nextjs.png", "nextjs-original"),
  skill("ASP.NET", ".NET Web Framework", "dotnet.png", "dot-net-plain"),
  skill("Spring Framework", "Java Web Framework", "spring.png", "spring-plain"),
  skill("WebGL/OpenGL", "Graphics Library", "webgl.png", "opengl-plain"),
];
export const TOOLS = [
  skill("Linux", "Operating System Family", "linux.png", "linux-plain"),
  skill("Unity", "Game Engine", "unity.png", "unity-original"),
  skill("PostgreSQL", "Database Management System", "psql.png", "postgresql-plain"),
  skill("Azure", "Cloud Service Suite", "azure.png", "azure-plain"),
];
export const LANGUAGES = [
  skill("Rust", "Systems Programming", "rust.png", "rust-plain"),
  skill("OCaml", "Functional Programming", "ocaml.png", "ocaml-plain"),
  skill("Python", "Scripting", "python.png", "python-plain"),
  skill("TypeScript", "Web/Scripting", "typescript.png", "typescript-plain"),
  skill("C/C++", "Systems Programming", "cpp.png", "cplusplus-plain"),
  skill("C#", ".NET Programming", "csharp.png", "csharp-plain"),
  skill("Java", "Object-Oriented Programming", "java.png", "java-plain"),
];

export const ALL_SKILLS = [...FRAMEWORKS, ...TOOLS, ...LANGUAGES];

export interface TagInfo {
  name: string;
  data: { type: "devicon", deviconId: string } | { type: "img", src: string };
}

const deviconTag = (name: string, deviconId: string): TagInfo => ({ name, data: { type: "devicon", deviconId } });

export const javaTag = deviconTag("Java", "java-plain");
export const reactTag = deviconTag("React", "react-original");
export const mysqlTag = deviconTag("MySQL", "mysql-plain");
export const springTag = deviconTag("Spring Framework", "spring-plain");
export const graphqlTag = deviconTag("GraphQL", "graphql-plain");
export const csTag = deviconTag("C#", "csharp-plain");
export const azureTag = deviconTag("Azure", "azure-plain");
export const aspnetTag = deviconTag("ASP.NET Core", "dot-net-plain");
export const expressTag = deviconTag("Express", "express-original");
export const psqlTag = deviconTag("PostgreSQL", "postgresql-plain");
export const cppTag = deviconTag("C++", "cplusplus-plain");
export const ocamlTag = deviconTag("OCaml", "ocaml-plain");
export const winformsTag = deviconTag("WinForms", "dot-net-plain");

const imgTag = (name: string, src: string): TagInfo => ({ name, data: { type: "img", src: `/assets/${src}` } });

export const grainTag = imgTag("Grain", "grainsmall.png");
export const reasonTag = imgTag("Reason", "reason.svg");
export const webglTag = imgTag("WebGL", "webgl.svg");
export const rmqTag = imgTag("RabbitMQ", "rabbitmq.svg");
export const wasmTag = imgTag("WebAssembly", "webassembly.svg");

