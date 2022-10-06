import React from "react";

import "../styles/Project.scss";

interface Props {
  projectName: string;
  projectUrl: string;
  imgSrc: string;
  body: string | React.ReactNode;
  techUsed: React.ReactNode[];
  techHeight?: string;
}

const Project = ({ projectName, projectUrl, imgSrc, body, techUsed, techHeight }: Props) => (
  <div className="project">
    <div>
      <a className="project-link" href={projectUrl} target="_blank">
        <div className="project-image-container">
          <img className="project-image" src={imgSrc} alt={projectName} />
        </div>
        <h3>{projectName}</h3>
      </a>
      <p>{body}</p>
    </div>
    <div>
      <ul style={{ height: techHeight }} className="project-tech tech-used">
        {techUsed}
      </ul>
    </div>
  </div>
);

export default Project;

