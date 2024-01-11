import React from 'react';
import { Box } from '@mui/material';
import StudyCaseHeadingSection from '../../components/controls/StudyCaseHeadingSection';
import StudyCaseChallengeSection from '../../components/controls/StudyCaseChallengeSection';
import StudyCaseOpenDateSection from '../../components/controls/StudyCaseOpenDateSection';
import StudyCaseSourcingSection from '../../components/controls/StudyCaseSourcingSection';

const CaseStudy = () => {
  return (
    <>
      <StudyCaseHeadingSection
        title="DAAS for the Stillwater"
        subtitle="Stanford, CT"
        backgroundImageSrc="https://cdn.animaapp.com/projects/6183b51d6b5cbed22d564e6f/releases/618fab30a6d4b744c33eb00c/img/cropped-stillwater-flowers-daas-longshot-2@1x.png"
        organizationImageSrc="https://cdn.animaapp.com/projects/6183b51d6b5cbed22d564e6f/releases/618fab30a6d4b744c33eb00c/img/image-77629@2x.png"
      />

      <Box
        sx={{
          padding: {
            sm: '40px',
          },
          paddingBottom: '5rem',
        }}
      >
        <StudyCaseChallengeSection />

        <StudyCaseOpenDateSection
          thumbnailImageSrc="https://cdn.animaapp.com/projects/6183b51d6b5cbed22d564e6f/releases/618fc109a708f1031491853e/img/mvi-0772-00-05-39-42-3@1x.png"
          description="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud”"
          title="Contsance S......., GGI Architcture"
          textDate="Expected open date : September 1st, 2021"
        />

        <StudyCaseSourcingSection />
      </Box>
    </>
  );
};

export default CaseStudy;
