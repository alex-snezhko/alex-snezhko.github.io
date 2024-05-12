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
  skill("ASP.NET Core", "Web Framework", "dotnet.png", "dot-net-plain"),
  skill("Spring Framework", "Java Web Framework", "spring.png", "spring-plain"),
  skill("WebGL", "Web Graphics Library", "webgl.png", "opengl-plain"),
];
export const TOOLS = [
  skill("Linux", "Operating System Family", "linux.png", "linux-plain"),
  skill("Kubernetes", "Container Orchestration", "kubernetes.png", "kubernetes-plain"),
  skill("Kafka", "Distributed Event Store", "kafka.png", "kafka-plain"),
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

// export interface TagInfo {
//   name: string;
//   data: { type: "devicon", deviconId: string } | { type: "img", src: string };
// }

// const deviconTag = (name: string, deviconId: string): TagInfo => ({ name, data: { type: "devicon", deviconId } });

// export const javaTag = deviconTag("Java", "java-plain");
// export const reactTag = deviconTag("React", "react-original");
// export const mysqlTag = deviconTag("MySQL", "mysql-plain");
// export const springTag = deviconTag("Spring Framework", "spring-plain");
// export const graphqlTag = deviconTag("GraphQL", "graphql-plain");
// export const csTag = deviconTag("C#", "csharp-plain");
// export const azureTag = deviconTag("Azure", "azure-plain");
// export const aspnetTag = deviconTag("ASP.NET Core", "dot-net-plain");
// export const expressTag = deviconTag("Express", "express-original");
// export const psqlTag = deviconTag("PostgreSQL", "postgresql-plain");
// export const cppTag = deviconTag("C++", "cplusplus-plain");
// export const ocamlTag = deviconTag("OCaml", "ocaml-plain");
// export const winformsTag = deviconTag("WinForms", "dot-net-plain");

// const imgTag = (name: string, src: string): TagInfo => ({ name, data: { type: "img", src: `/assets/${src}` } });

// // inline svgs into HTML as a hack to get dynamic colors
// const reasonSvg = `
//   <!-- Made by gilbarbara: https://github.com/gilbarbara/logos -->
//   <svg viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
//     <mask id="reason-hole">
//       <rect width="100%" height="100%" fill="white"/>
//       <path fill="black" d="M151.32996,232.673587 L122.480793,232.673587 L108.265264,205.636213 L89.3112253,205.636213 L89.3112253,232.673587 L63.8068933,232.673587 L63.8068933,134.976667 L107.707792,134.976667 C133.630227,134.976667 148.403227,147.519773 148.403227,169.261173 C148.403227,184.034173 142.27104,194.90488 130.982237,200.758333 L151.32996,232.673587 Z M89.3112253,155.324387 L89.3112253,185.288493 L107.84716,185.288493 C118.160388,185.288493 124.153209,179.992507 124.153209,170.097387 C124.153209,160.481 118.160388,155.324387 107.84716,155.324387 L89.3112253,155.324387 Z M164.70928,134.976667 L241.779747,134.976667 L241.779747,155.324387 L190.213613,155.324387 L190.213613,173.581587 L236.762493,173.581587 L236.762493,193.789933 L190.213613,193.929307 L190.213613,212.325867 L243.173427,212.325867 L243.173427,232.673587 L164.70928,232.673587 L164.70928,134.976667 Z"></path>
//     </mask>

//     <rect mask="url(#reason-hole)" fill="currentColor" x="0" y="0" width="256" height="256"></rect>
//   </svg>
// `;

// const webassemblySvg = `
//   <!-- Created by AtomCrusher for the English Wikipedia -->
//   <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 612 612" preserveAspectRatio="xMidYMid">
//     <!-- Block -->
//     <path mask="url(#wasm-hole)" fill="currentColor" d="m376 0c0 1.08 0 2.16 0 3.3 0 38.76-31.42 70.17-70.17 70.17-38.76 0-70.17-31.42-70.17-70.17l0 0c0-1.14 0-2.22 0-3.3L0 0l0 612 612 0 0-612z"/>
//     <!-- Letters -->
//     <mask id="wasm-hole">
//       <rect width="100%" height="100%" fill="white"/>
//       <path fill="black" d="m142.16 329.81 40.56 0 27.69 147.47 0.5 0 33.28-147.47 37.94 0 30.06 149.28 0.59 0 31.56-149.28 39.78 0-51.69 216.69-40.25 0-29.81-147.47-0.78 0-31.91 147.47-41 0zm287.69 0 63.94 0 63.5 216.69-41.84 0-13.81-48.22-72.84 0-10.66 48.22-40.75 0zm24.34 53.41-17.69 79.5 55.06 0-20.31-79.5z"/>
//     </mask>
//   </svg>
// `;

// const rabbitmqSvg = `
//   <!-- RabbitMQ and the RabbitMQ logo are trademarks of VMware -->
//   <svg xmlns="http://www.w3.org/2000/svg" viewBox="-169 285.9 64 64">
//     <path d="M-109.242 311.496h-20.113a1.82 1.82 0 0 1-1.82-1.82v-20.963c0-1.56-1.253-2.812-2.812-2.812h-7.185c-1.56 0-2.812 1.253-2.812 2.812v20.822c0 1.087-.874 1.962-1.962 1.962l-6.594.024c-1.087 0-1.985-.874-1.962-1.962l.047-20.845c0-1.56-1.253-2.812-2.812-2.812h-7.185c-1.56 0-2.812 1.253-2.812 2.812v58.682c0 1.37 1.11 2.505 2.505 2.505h55.516c1.37 0 2.505-1.11 2.505-2.505V314a2.49 2.49 0 0 0-2.505-2.505zm-9.43 22.027a3.27 3.27 0 0 1-3.262 3.261h-5.672a3.27 3.27 0 0 1-3.261-3.261v-5.672a3.27 3.27 0 0 1 3.261-3.261h5.672a3.27 3.27 0 0 1 3.262 3.261z" fill="currentColor"/>
//   </svg>
// `;

// export const grainTag = imgTag("Grain", "grainsmall.png");
// export const reasonTag = imgTag("Reason", reasonSvg);
// export const webglTag = imgTag("WebGL", "webgl.svg");
// export const rmqTag = imgTag("RabbitMQ", rabbitmqSvg);
// export const wasmTag = imgTag("WebAssembly", webassemblySvg);

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

