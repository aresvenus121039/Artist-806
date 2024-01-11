import React from 'react';
import { Typography, Box, Stack } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Head from 'next/head';
import OptimizedImage from '@/components/OptimizedImage';
import Image from 'next/image';
import { cloudflareImage } from '@/utility/images';

const useStyles = makeStyles((theme: any) => ({
  heading: {
    [theme.breakpoints.up('xs')]: {
      fontSize: '40px',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '60px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '70px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '120px',
    },
  },

  subHeading: {
    [theme.breakpoints.up('xs')]: {
      fontSize: '30px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '40px',
    },
  },
  image: {
    width: '100%',
    height: '100%',
  },
}));

const PageNotFound: React.FC = (props) => {
  const classes = useStyles();
  const metaTitle: string = 'Page Not Found | WXLLSPACE';
  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="title" content={metaTitle} />
        <meta name="description" content={metaTitle} />
        <meta property="og:image" content="/OGimages/Wall-Listing.png" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaTitle} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="\OGimages\Wall-Listing.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="wxllspace.com" />
        <meta property="twitter:title" content={metaTitle} />
        <meta property="twitter:description" content={metaTitle} />
        <meta name="twitter:image" content="\OGimages\Wall-Listing.png" />
      </Head>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          marginTop: { xs: '56px', sm: '64px' },
          background: `url('${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/404/paint_splatter.png') no-repeat top 70px left, url('${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/404/paint_splatter1.png') no-repeat top 110px right, url('${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/404/background_shadow.png') no-repeat top right`,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flex: '1 1',
            padding: { xs: '10px', sm: '100px' },
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Stack>
            <Typography
              variant="h1"
              sx={{
                width: 'auto',
                marginBottom: ' 24px',
                fontFamily: 'var(--font-family-montserrat)',
                fontWeight: '700',
                color: '#6ab3df',
                fontSize: '40px',
                letterSpacing: 0,
              }}
            >
              Sorry...
            </Typography>
            <SectionHeading classNames={classes.heading}>
              That page is not here.
            </SectionHeading>
            <SectionHeading classNames={classes.subHeading}>
              Error 404
            </SectionHeading>
          </Stack>
          <Box
            sx={{
              width: '100%',
              justifySelf: 'center',
            }}
          >
            <Image
              src={cloudflareImage(
                `${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/404/Astro.png`
              )}
              alt="Astronaut"
              width={0}
              height={0}
              style={{ width: '100%', height: '100%' }}
              sizes="100vw"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

interface AstronautHelmetProps {
  src: string;
}

interface SectionHeadingProps {
  children: React.ReactNode;
  classNames: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  children,
  classNames,
}) => {
  return (
    <Typography
      className={classNames}
      sx={{
        fontWeight: 900,
        fontFamily: 'var(--font-family-montserrat)',
        fontStyle: 'normal',
        lineHeight: '1',
        letterSpacing: '-0.05em',
        backgroundImage:
          'linear-gradient(94.83deg, #FFFFFF 26.58%, #A984FF 44.93%, #64E1DC 54.77%, #6FC2FF 64.82%, #FFFFFF 78.91%) !important',
        backgroundSize: '100%',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textAlign: 'left',
        paddingBottom: '24px',
      }}
    >
      {children}
    </Typography>
  );
};

export default PageNotFound;
