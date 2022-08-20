import { FaGithub, FaEnvelope, FaLinkedin, FaStackOverflow, FaArrowUp } from "react-icons/fa";
import React, { useState, useEffect, useRef } from "react";

import { SectionName, allSections } from "../utils/shared";
import "../styles/Header.scss";

interface ContactIconsProps {
  className: string;
}

const ContactIcons = ({ className }: ContactIconsProps) => (
  <div className={`${className} contact-icons`}>
    <a href="mailto:alexsnezhko89@gmail.com">
      <FaEnvelope />
    </a>
    <a href="https://stackoverflow.com/users/12573825/apollo">
      <FaStackOverflow />
    </a>
    <a href="https://www.linkedin.com/in/alex-snezhko/">
      <FaLinkedin />
    </a>
    <a href="https://github.com/alex-snezhko">
      <FaGithub />
    </a>
  </div>
);

export default function Header() {
  const [atTop, setAtTop] = useState(false);
  const [currentSection, setCurrentSection] = useState("about");
  const titlebarRef = useRef<HTMLDivElement>(null);
  const navbarRef = useRef<HTMLDivElement>(null);

  function scrollToSection(id: SectionName | "top") {
    const elem = id === "top"
      ? document.getElementById("header")!
      : document.getElementById(`${id}-scroll-target`)!;

    elem.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    const sectionTops: { elementTop: number, sectionName: SectionName }[] = [];
    for (const sectionName of allSections.slice().reverse()) {
      const elementTop = document.getElementById(`${sectionName}-scroll-target`)!.offsetTop;
      sectionTops.push({ elementTop, sectionName });
    }

    function nav() {
      const y = window.scrollY;
      const titlebarHeight = titlebarRef.current?.offsetHeight!;
      const putNavbarToTop = y >= titlebarHeight;
      if (atTop !== putNavbarToTop) {
        setAtTop(putNavbarToTop);
      }
      const scrolledSection = sectionTops.find(({ elementTop }) => y >= elementTop - 5)?.sectionName!;
      if (scrolledSection !== currentSection) {
        console.log(scrolledSection);
        setCurrentSection(scrolledSection);
      }
    }
    window.addEventListener("scroll", nav);

    return () => window.removeEventListener("scroll", nav);
  })

  return (
    <header id="header">
      {atTop && <div style={{ height: navbarRef.current?.offsetHeight }} />}

      <div ref={titlebarRef} id="titlebar">
        <h1 id="title">Alex Snezhko</h1>
        <ContactIcons className="contact-icons-titlebar" />
      </div>

      <div ref={navbarRef} id="navbar" className={atTop ? "at-top" : ""}>
        {atTop && (
          <div onClick={() => scrollToSection("top")}>
            <span className="navbar-initials">avs</span>
            <span className="navbar-to-top"><FaArrowUp /></span>
          </div>
        )}

        <div className="navbar-links">
          {allSections.map(sectionName => (
            <button
              key={sectionName}
              className={sectionName === currentSection ? "thispage" : ""}
              onClick={() => scrollToSection(sectionName)}
            >
              {sectionName[0].toUpperCase() + sectionName.slice(1)}
            </button>
          ))}
        </div>

        {atTop && <ContactIcons className="contact-icons-navbar" />}
      </div>

    </header>
  );
}

