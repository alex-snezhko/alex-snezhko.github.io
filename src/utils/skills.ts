export interface Skill {
  name: string;
  description: string;
  imgUrl: string;
  via: SkillExperienceVia[];
}

const skill = (name: string, description: string, imgUrl: string, via: SkillExperienceVia[]): Skill => ({ name, description, imgUrl: `/assets/${imgUrl}`, via });

export interface SkillExperienceVia {
  name: string;
  imgUrl: string;
}

const viaSpaceX: SkillExperienceVia = { name: 'SpaceX', imgUrl: '/assets/spacex.png' };
const viaIndeed: SkillExperienceVia = { name: 'Indeed', imgUrl: '/assets/indeed.png' };
const viaBlackbaud: SkillExperienceVia = { name: 'Blackbaud', imgUrl: '/assets/blackbaud.png' };
const viaGrain: SkillExperienceVia = { name: 'Grain', imgUrl: '/assets/grain-alt.svg' }
const viaPersonalProjects: SkillExperienceVia = { name: 'Personal Projects', imgUrl: '/assets/computer.png' }
const viaUniversityCoursework: SkillExperienceVia = { name: 'University Coursework', imgUrl: '/assets/ncsu.png' }

export const FRAMEWORKS = [
  skill("React", "UI Library", "react.png", [viaIndeed, viaPersonalProjects]),
  skill("Angular", "UI Library", "angular.png", [viaSpaceX]),
  skill("Vue.js", "UI Library", "vue.png", [{ name: 'Framework Contributions', imgUrl: '/assets/vue.png' }, viaPersonalProjects]),
  skill("Next.js", "React Web Framework", "nextjs.png", [viaUniversityCoursework]),
  skill("ASP.NET Core", "Web Framework", "dotnet.png", [viaSpaceX, viaBlackbaud]),
  skill("Spring Framework", "Java Web Framework", "spring.png", [viaIndeed, viaUniversityCoursework]),
  skill("WebGL", "Web Graphics Library", "webgl.png", [viaUniversityCoursework, viaPersonalProjects]),
];
export const TOOLS = [
  skill("Linux", "Operating System Family", "linux.png", [viaSpaceX, { name: 'Personal Computer', imgUrl: '/assets/fedora.png' }]),
  skill("Kubernetes", "Container Orchestration", "kubernetes.png", [viaSpaceX]),
  skill("Azure", "Cloud Services", "azure.png", [viaSpaceX, viaBlackbaud]),
  skill("Kafka", "Distributed Event Store", "kafka.png", [viaSpaceX]),
  skill("PostgreSQL", "DBMS", "psql.png", [viaSpaceX, viaPersonalProjects]),
  skill("Redis", "Key-Value Database", "redis.png", [viaSpaceX]),
];
export const LANGUAGES = [
  skill("Rust", "Systems Programming", "rust.png", [viaPersonalProjects]),
  skill("OCaml", "Functional Programming", "ocaml.png", [viaGrain, viaPersonalProjects]),
  skill("Python", "Scripting", "python.png", [viaSpaceX, viaUniversityCoursework, viaPersonalProjects]),
  skill("JavaScript/TypeScript", "Web/Scripting", "typescript.png", [viaSpaceX, viaIndeed, viaPersonalProjects]),
  skill("C/C++", "Systems Programming", "cpp.png", [viaUniversityCoursework, viaPersonalProjects]),
  skill("C#", ".NET Programming", "csharp.png", [viaSpaceX, viaBlackbaud, { name: 'Game Development', imgUrl: '/assets/unity.png'}]),
  skill("Java", "Object-Oriented Programming", "java.png", [viaIndeed, viaUniversityCoursework]),
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
export const grainTag = tag("Grain", "grain-alt.svg", "#f0dabb");
export const reasonTag = tag("Reason", "reason.png", "#edcec0");
export const cppTag = tag("C++", "cpp.png", "#c6d7f7");
export const ocamlTag = tag("OCaml", "ocaml.png", "#f5d7ba");
export const winformsTag = tag("WinForms", "dotnet.png", "#cbe4f2");
export const wasmTag = tag("WebAssembly", "webassembly.png", "#ded0f5");
export const kafkaTag = tag("Kafka", "kafka.png", "#000000");
export const kubernetesTag = tag("Kubernetes", "kubernetes.png", "#000000");
export const angularTag = tag("Angular", "angular.png", "#000000");

