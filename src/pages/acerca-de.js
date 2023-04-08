import React  from 'react';
import { AboutSection, Page, Seo, InterestsSection } from 'gatsby-theme-portfolio-minimal';

export default function AcercaDe() {
    return (
        <>
            <Seo title="AcercaDe" />
            <Page useSplashScreenAnimation>
                <AboutSection sectionId="about" heading="Acerca del Grupo" />
                <InterestsSection sectionId="research" heading="Líneas de Investigación" />
            </Page>
        </>
    );
}