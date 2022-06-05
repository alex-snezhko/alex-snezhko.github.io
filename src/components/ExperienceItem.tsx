import React from "react";
import "../styles/ExperienceItem.scss";

interface Props {
  imageUrl: string;
  position: string;
  company: string;
  companyUrl: string;
  timeline: string;
  descriptionItems: string[];
  techUsed: string[];
}

const ExperienceItem = ({ imageUrl, position, company, companyUrl, timeline, descriptionItems, techUsed }: Props) => (
  <div className="experience-item">
    <div className="experience-image-container">
      <img src={imageUrl} alt={company} />
    </div>
    <div className="experience-info">
      <div className="experience-header">
        <h3>{position} <span style={{ fontWeight: "normal" }}>—</span> <a href={companyUrl} className="experience-company">{company}</a></h3>
        <span>{timeline}</span>
      </div>

      <ul>
        {descriptionItems.map(item => (
          <li>{item}</li>
        ))}
      </ul>

      <ul className="experience-tech tech-used">
        {techUsed.map(tech => <li>{tech}</li>)}
      </ul>
    </div>
  </div>
);

export default ExperienceItem;

