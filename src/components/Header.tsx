import React, { useState, useEffect, useRef } from "react";
import { useStore } from "@nanostores/react";
import { isDarkMode } from "../store";
import type { SectionName } from "../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import '@fortawesome/fontawesome-svg-core/styles.css';

import "../styles/Header.scss";

const allSections = ["about", "experience", "projects", "skills"] as const;

interface RightSectionProps {
  where: string;
}

function DarkModeSwitch({ where }: RightSectionProps) {
  const enabled = useStore(isDarkMode);

  if (typeof window === "undefined") {
    return null;
  }

  return (
    <span className={`darkmode-${where} darkmode-switch-container`}>
      <span
        style={{ justifyContent: enabled ? "flex-end" : "flex-start" }}
        onClick={() => isDarkMode.set(!enabled)}
        className="darkmode-switch"
      >
        <div className="darkmode-switch-circle">
          {enabled
            ? <FontAwesomeIcon icon={faMoon} fixedWidth className="darkmode-moon" />
            : <FontAwesomeIcon icon={faSun} fixedWidth className="darkmode-sun" />
          }
        </div>
      </span>
    </span>
  );
}

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
      const scrolledSection = sectionTops.find(({ elementTop }) => y >= elementTop - 5)?.sectionName || "about";
      if (scrolledSection !== currentSection) {
        setCurrentSection(scrolledSection);
      }
    }
    window.addEventListener("scroll", nav);
    nav();

    return () => window.removeEventListener("scroll", nav);
  })

  return (
    <header id="header">
      {atTop && <div style={{ height: navbarRef.current?.offsetHeight }} />}

      <div ref={titlebarRef} id="titlebar">
        <h1 id="title">Alex Snezhko</h1>
        <div className="contact-icons-container">
          <span className="navbar-links">
            {allSections.map(sectionName => (
              <button
                key={sectionName}
                className={sectionName === currentSection ? "thispage" : ""}
                onClick={() => scrollToSection(sectionName)}
              >
                {sectionName[0].toUpperCase() + sectionName.slice(1)}
              </button>
            ))}
          </span>
          <DarkModeSwitch where="navbar" />
        </div>
      </div>

      {atTop && <div ref={navbarRef} id="navbar" className="at-top">
        <div className="navbar-contents">
          <div>
            <span onClick={() => scrollToSection("top")}>
              <span className="navbar-initials">Alex Snezhko</span>
              <span className="navbar-to-top"><FontAwesomeIcon icon={faArrowUp} /></span>
            </span>
          </div>

          <div className="contact-icons-container">
            <span className="navbar-links">
              {allSections.map(sectionName => (
                <button
                  key={sectionName}
                  className={sectionName === currentSection ? "thispage" : ""}
                  onClick={() => scrollToSection(sectionName)}
                >
                  {sectionName[0].toUpperCase() + sectionName.slice(1)}
                </button>
              ))}
            </span>
            <DarkModeSwitch where="navbar" />
          </div>
        </div>
      </div>}

    </header>
  );
}

