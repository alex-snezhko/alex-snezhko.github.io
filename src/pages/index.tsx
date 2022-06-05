import React from "react";
import { Helmet } from "react-helmet";

import Header from "../components/Header";
import Section from "../components/Section";
import "../styles/global.scss";

export default function IndexPage() {
  return (
    <div>
      <Helmet>
        <title>Alex Snezhko</title>
      </Helmet>

      <Header />

      <main>
        <Section name="about" />
        <Section name="experience" />
        <Section name="projects" />
        <Section name="skills" />
      </main>
    </div>
  );
}

