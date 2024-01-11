import React from 'react';
import { Box } from '@mui/material';
import StudyCaseHeadingSection from '../../components/controls/StudyCaseHeadingSection';
import StudyCaseChallengeSection from '../../components/controls/StudyCaseChallengeSection';
import StudyCaseSourcingSection from '../../components/controls/StudyCaseSourcingSection';
import StudyCaseOpenDateSection from '@/components/controls/StudyCaseOpenDateSection';

const CaseStudyStandardBean = () => {
  return (
    <>
      {/* heading section */}
      <Box
        sx={{
          paddingTop: '48px',
        }}
      >
        <StudyCaseHeadingSection
          title="Albertus Joseph for The Standard Bean"
          subtitle="New Rochelle, NY"
          backgroundImageSrc={`${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/case-study/standard-coffee-shop.jpg`}
          organization1ImageSrc={`${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/case-study/standard-bean-logo.png`}
          organization2ImageSrc={`${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/placeholders/cappelli.png`}
        />
      </Box>

      {/* challenge, map & developer section */}
      <Box
        sx={{
          padding: '0 20px',
          marginTop: '120px',
        }}
      >
        <StudyCaseChallengeSection
          challengeDescription="The developer had just completed a 55 unit rental building and was installing a new coffee shop in the retail space, something New Rochelle really needed. In order to stand out from any other coffee shop for miles. The owner’s spouse was obsessed with the image of Audrey Hepburn and wanted to emulate the beauty and energy she had when she was in a room."
          outcomeDescription="The owners contacted Albertus Joseph via WXLLSPACE for his expert images in portraits and realism."
          developerDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          //developerThumbnail={`${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/case-study/DAAS-mockup.jpg`}
          longitude={-73.781213}
          latitude={40.911547}
        />
      </Box>

      {/* open date section */}
      <Box
        sx={{
          padding: '0 20px',
          marginTop: {
            xs: '80px',
            sm: '120px',
          },
        }}
      >
        <StudyCaseOpenDateSection
          thumbnailImageSrc={`${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/case-study/standard-bean-quote.png`}
          description="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud”"
          title="Contsance S......., GGI Architcture"
          textDate="Expected open date : September 1st, 2021"
        />
      </Box>

      {/* sourcing & solution section */}
      <Box
        sx={{
          marginTop: {
            xs: '80px',
            sm: '120px',
          },
          marginBottom: '120px',
        }}
      >
        <StudyCaseSourcingSection
          sourcingDescription={[
            'DAAS is an American contemporary artist, internationally recognized for his vibrant, engaging paintings and murals.',
            'Based in Austin, Texas, DAAS’ mural work utilizes a combination of abstract and representational imagery, driven by a distinct color palette and design aesthetic which incorporates bold shapes and organic forms saturated in vivid colours, to create larger-than-life artworks focused on bringing a sense of beauty and inspiration into the surrounding space.',
          ]}
          sourcingThumbnail={`${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/case-study/standard-sourcing-artist.png`}
          solutionImage={`${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/case-study/standard-bean-solution.png`}
        />
      </Box>
    </>
  );
};

export default CaseStudyStandardBean;
