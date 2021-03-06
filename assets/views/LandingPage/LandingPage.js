import React from "react";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import PageLayout from "components/PageLayout";
import LandingHeroSection from "./Sections/LandingHeroSection";
import LandingSkillsSection from "./Sections/LandingSkillsSection";

const LandingPage = () => (
  <PageLayout title="Home">
    <Container maxWidth={false} className="m-landing">
      <LandingHeroSection />
      <Divider />
      <LandingSkillsSection />
    </Container>
  </PageLayout>
);

export default LandingPage;
