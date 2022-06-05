import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import indeedLogo from "../images/indeed.png";
import blackbaudLogo from "../images/blackbaud.png";

import "../styles/Experience.scss";
import ExperienceItem from "./ExperienceItem";

export default function Experience() {
  return (
    <div className="section">
      <h2>Experience</h2>

      <div className="experience-items">
        <ExperienceItem
          imageUrl={indeedLogo}
          position="Software Developer Intern"
          company="Indeed"
          companyUrl="https://www.indeed.com/about"
          timeline="May 2022 - Aug 2022"
          descriptionItems={[
            "Develop tools used by internal users to automate crawling and aggregation of job postings and ultimately provide useful job results for job seekers.",
            "Develop service code extracting functionality from legacy monolithic backend to modularized microservices.",
            "Develop user interface components for newer and more feature-rich web application for job aggregation."
          ]}
          techUsed={["Java", "Spring Framework", "GraphQL", "MySQL", "React", "Redux"]}
        />

        <ExperienceItem
          imageUrl={blackbaudLogo}
          position="Software Engineer Intern"
          company="Blackbaud"
          companyUrl="https://www.blackbaud.com/"
          timeline="May 2021 - Aug 2021"
          descriptionItems={[
            "Led the development of a microservice suite providing a REST API for interfacing with SOAP-based CRM web application backend.",
            "Transitioned services facilitating custom SSO authentication from on-premises SQL Server to Azure Cosmos DB.",
            "Developed thorough mock-based unit test suite and contract tests to enhance confidence in code quality and service reliability."
          ]}
          techUsed={["C#", "ASP.NET Core", "Azure"]}
        />
      </div>
    </div>
  );
}

