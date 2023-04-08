import React from "react";
import {
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function Articulos() {
  return (
    <>
      <Seo title="Artículos" />
      <Page useSplashScreenAnimation>
        <ProjectsSection sectionId="articulos" heading="Publicaciones recientes" />
      </Page>
    </>
  );
}
