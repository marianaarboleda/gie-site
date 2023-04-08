import React from "react";
import {
  ArticlesSection,
  ContactSection,
  HeroSection,
  Page,
  // ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Grupo Informática Educativa - Universidad del Norte" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <ArticlesSection sectionId="proyectos" heading="Proyectos recientes" sources={['Blog']} />
        {/* <ProjectsSection sectionId="features" heading="Built-in Features" /> */}
        <ContactSection sectionId="github" heading="Contacto" />
      </Page>
    </>
  );
}
