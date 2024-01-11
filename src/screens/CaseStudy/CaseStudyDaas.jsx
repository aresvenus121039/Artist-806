import React from 'react';
import { Box } from '@mui/material';
import StudyCaseHeadingSection from '../../components/controls/StudyCaseHeadingSection';
import StudyCaseChallengeSection from '../../components/controls/StudyCaseChallengeSection';
import StudyCaseSourcingSection from '../../components/controls/StudyCaseSourcingSection';

const CaseStudyDaas = () => {
  return (
    <>
      <Box
        sx={{
          paddingTop: '48px',
        }}
      >
        <StudyCaseHeadingSection
          title="DAAS for the Stillwater"
          subtitle="Stamford, CT"
          backgroundImageSrc="https://cdn.animaapp.com/projects/6183b51d6b5cbed22d564e6f/releases/618fab30a6d4b744c33eb00c/img/cropped-stillwater-flowers-daas-longshot-2@1x.png"
          organization1ImageSrc={`${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/case-study/stillwater-logo.png`}
          organization2ImageSrc={`${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/case-study/DAAS-white-logo.png`}
        />
      </Box>

      <Box
        sx={{
          padding: '0 20px',
          paddingBottom: '5rem',
          marginTop: '120px',
        }}
      >
        <StudyCaseChallengeSection
          challengeDescription="The developer was building a 42 multifamily residential rental building in the downtown area of Stamford, Connecticut. They were interested in a feature that would give something back to the community and create a new placemaking entity that replaced the previous housing that was replaced."
          outcomeDescription="The owners contacted DAAS via WXLLSPACE for a large mural. Being that DAAS is an artist that is very familiar with working with projects of this magnitude, it was a no-brainer."
          developerDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru"
          developerThumbnail={`${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/case-study/DAAS-mockup.jpg`}
          longitude={-73.548569}
          latitude={41.051499}
        />
      </Box>

      <Box
        sx={{
          marginBottom: '120px',
        }}
      >
        <StudyCaseSourcingSection
          sourcingDescription={[
            'DAAS is an American contemporary artist, internationally recognized for his vibrant, engaging paintings and murals.',
            'Based in Austin, Texas, DAAS’ mural work utilizes a combination of abstract and representational imagery, driven by a distinct color palette and design aesthetic which incorporates bold shapes and organic forms saturated in vivid colours, to create larger-than-life artworks focused on bringing a sense of beauty and inspiration into the surrounding space.',
          ]}
          sourcingThumbnail={`${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/case-study/DAAS-artist-in-action-3.jpg`}
          solutionVideo={`${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/case-study/DAAS-video-case-study.mov`}
        />
      </Box>
    </>
  );
};

export default CaseStudyDaas;
