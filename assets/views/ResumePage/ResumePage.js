import React from 'react';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import PageLayout from 'components/PageLayout';
import ResumeSection from './Sections/ResumeSection';
import ResumeHeroSection from './Sections/ResumeHeroSection';

const ResumePage = () => (
  <PageLayout title="Resume">
    <Container maxWidth={false} className="m-resume">
      <ResumeHeroSection />
      <Divider />
      <ResumeSection />
    </Container>
  </PageLayout>
);

export default ResumePage;
