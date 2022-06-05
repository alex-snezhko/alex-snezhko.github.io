import { StaticImage } from "gatsby-plugin-image";
import React from "react";

import "../styles/About.scss";

export default function About() {
  return (
    <div className="section">
      <h2>About Me</h2>

      <div className="personal-description-container">
        <div className="personal-description">
          <p>
            Hi, I'm Alex! I'm a software engineer with a love for learning, solving problems, and building useful software.
          </p>
          <p>
            Aside from a career path, I consider programming and technology as hobbies of mine; I love learning new tech stacks, building my own hobby software projects, and tinkering with Linux distributions and other open-source software (my current weapons of choice are <a className="fedora-link" href="https://docs.fedoraproject.org/en-US/project/">Fedora Linux</a> and <a className="neovim-link" href="https://neovim.io/">Neovim</a>).
          </p>
          <p>
            I take pride in the software I write, and am a huge proponent of writing elegant, readable, and maintainable code. I am always looking for the next opportunity to refactor or optimize the code I write, and I believe this mindset has gotten me where I am today.
          </p>
        </div>

        <StaticImage src="../images/me.jpg" alt="Alex Snezhko" height={320} className="portrait" layout="fixed" />
      </div>

      <div id="education-content">
        <StaticImage src="../images/ncsu.png" alt="North Carolina State University" height={240} layout="fixed" />
        <div id="education-desc">
          <p>
            Right now, I'm a student at <a href="https://ncsu.edu" className="ncsu-link">North Carolina State University</a>. I completed my B.S. in Computer Science in May 2022 and will complete my Master of Computer Science degree in May 2023. Some noteworthy classes I have taken so far include:
          </p>
          <ul>
            <li>CSC 510: Software Engineering</li>
            <li>CSC 540: Database Management Concepts and Systems</li>
            <li>CSC 520: Introduction to Artificial Intelligence</li>
            <li>CSC 561: Principles of Computer Graphics</li>
          </ul>
        </div>
      </div>

      <p>
        Outside of tech, some of my hobbies include:
      </p>
      <ul className="hobbies">
        <li>🎮 Gaming</li>
        <li>🎸 Playing guitar</li>
        <li>⌨️ Building custom mechanical keyboards</li>
        <li>🎵 Listening to music (everything from K-pop to heavy metal)</li>
      </ul>
    </div>
  );
}

