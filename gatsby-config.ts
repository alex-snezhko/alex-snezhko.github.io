import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp"
  ]
};

export default config;
