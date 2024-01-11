import React from 'react';
import styled, { css } from 'styled-components';
import { Box, Grid, Typography } from '@mui/material';
import Head from 'next/head';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  sectionHeading: {
    [theme.breakpoints.up('xs')]: {
      fontSize: '120px',
      width: '375px',
    },
  },
  subHeading: {
    [theme.breakpoints.up('xs')]: {
      fontSize: '22px',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '26px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '36px',
    },
  },
}));

const FAQ = (props) => {
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        alignItems="center"
        sx={{
          paddingTop: {
            xs: '50px',
            sm: '50px',
            md: '157px',
            lg: '157px',
            xl: '157px',
          },
          width: '100vw',
        }}
      >
        <Left />
        <Right />
        <Grid
          container
          item
          alignItems="center"
          justifyContent="center"
          sx={{
            paddingLeft: '0.5rem',
            paddingRight: '0.5rem',
            height: '564px',
          }}
        >
          <Grid
            container
            item
            alignItems="center"
            justifyContent="center"
            sx={{
              width: '842px',
              height: '327px',
            }}
          >
            <Grid
              container
              item
              alignItems="center"
              justifyContent="center"
              sx={{
                maxWidth: '617px',
                minWidth: '375px',
                minHeight: '214px',
              }}
            >
              <SectionHeading classNames={classes.sectionHeading}>
                FAQ
              </SectionHeading>
              <H1Text>Frequently Asked Questions</H1Text>
              <Center />
            </Grid>

            <Grid
              container
              item
              alignItems="flex-end"
              justifyContent="space-between"
              sx={{
                padding: '0.8px 9.7px',
                height: '100px',
                minWidth: {
                  lg: '842px',
                  md: '800px',
                },
                display: {
                  xs: 'none',
                  sm: 'flex',
                },
              }}
            >
              <VectorImage
                src={`${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/faq/right-arrow.svg`}
              />
              <VectorImage
                src={`${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/faq/left-arrow.svg`}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems={{
          xs: 'center',
          sm: 'center',
          md: 'flex-start',
          lg: 'flex-start',
          xl: 'flex-start',
        }}
        sx={{
          width: {
            xs: '70vw',
            sm: '90vw',
            md: '100vw',
          },
          textAlign: {
            xs: 'center',
            md: 'left',
          },
          paddingLeft: {
            xs: '1rem',
            sm: '0.5rem',
          },
          paddingRight: {
            xs: '1rem',
            sm: '0.5rem',
          },
          margin: {
            xs: 'auto auto 150px auto',
            md: '120px auto 150px auto',
          },
        }}
      >
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: {
                xs: 'center',
                sm: 'flex-start',
                md: 'flex-start',
                lg: 'flex-start',
                xl: 'flex-start',
              },
              alignItems: {
                xs: 'center',
                sm: 'center',
                md: 'center',
                lg: 'flex-end',
                xl: 'flex-end',
              },
              marginRight: {
                lg: '130px',
              },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: {
                  md: 'flex-start',
                },
              }}
            >
              <SectionHeading classNames={classes.subHeading}>
                What is WXLLSPACE?
              </SectionHeading>
              <Text1>
                WXLLSPACE is a marketplace platform that connects muralists and
                street artists to legal and commissioned spaces for creative
                placemaking.
              </Text1>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Box
            sx={{
              display: 'flex',
              flexGrow: 1,
              flexDirection: 'column',
              justifyContent: {
                xs: 'center',
                sm: 'flex-start',
                md: 'flex-start',
                lg: 'flex-start',
                xl: 'flex-start',
              },
              alignItems: {
                xs: 'center',
                sm: 'center',
                md: 'flex-start',
                lg: 'flex-start',
                xl: 'flex-start',
              },
              marginTop: {
                xs: '50px',
                md: '0',
              },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: {
                  md: 'flex-start',
                },
              }}
            >
              <SectionHeading classNames={classes.subHeading}>
                Why was WXLLSPACE created?
              </SectionHeading>
              <Text2>
                The WXLLSPACE platform was created with the intent of reversing
                the way the mural process was done. Normally artists are
                canvassing neighborhoods tracking down property stakeholders or
                if they have a well established portfolio, are chosen for
                projects. This platform was created to bring artist to these
                owners to level the playing field and give more opportunities to
                the creatives in places they otherwise may not have had.
              </Text2>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

const SectionHeading = ({ children, classNames }) => {
  return (
    <Typography
      className={classNames}
      sx={{
        fontWeight: 900,
        fontFamily: 'var(--font-family-montserrat)',
        fontStyle: 'normal',
        lineHeight: '1.6',
        letterSpacing: '-0.05em',
        backgroundImage:
          'linear-gradient(94.83deg, #FFFFFF 26.58%, #A984FF 44.93%, #64E1DC 54.77%, #6FC2FF 64.82%, #FFFFFF 78.91%) !important',
        backgroundSize: '100%',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textAlign: 'center',
        textTransform: 'capitalize',
        width: {
          xs: '350px',
          sm: 'auto',
        },
      }}
    >
      {children}
    </Typography>
  );
};

const ValignTextMiddle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MontserratNormalWhite16px = css`
  color: var(--white);
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-m);
  font-weight: 400;
  font-style: normal;
`;

const Right = styled.div`
  position: absolute;
  top: 0;
  width: 268px;
  height: 268px;
  background-color: rgba(93, 29, 241, 1);
  filter: blur(500px);
  z-index: -1;
`;

const Left = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 344px;
  height: 344px;
  background-color: rgba(0, 200, 200, 1);
  filter: blur(500px);
  z-index: -1;
`;

const Center = styled.div`
  position: absolute;
  top: 350px;
  width: 356px;
  height: 268px;
  background-color: rgba(106, 179, 223, 1);
  filter: blur(500px);
  z-index: -1;
`;

const H1Text = styled.h1`
  ${ValignTextMiddle}
  max-width: 613px;
  min-width: 375px;
  margin-top: 43px;
  font-family: var(--font-family-montserrat);
  font-size: 28px;
  font-weight: 700;
  text-align: center;
  letter-spacing: 0;
  color: #64e1dc;
  @media (max-width: 430px) {
    font-size: 20px;
  }
`;

const VectorImage = styled.img`
  width: 198px;
  height: 98px;
`;

const Text1 = styled.p`
  ${ValignTextMiddle}
  ${MontserratNormalWhite16px}
  font-size: 16px;
  max-width: 430px;
  height: auto;
  margin-top: 41px;
  letter-spacing: 0;
  line-height: 38.4px;
`;

const Text2 = styled.p`
  ${ValignTextMiddle}
  ${MontserratNormalWhite16px}
  font-size: 16px;
  max-width: 455px;
  min-width: 300px;
  height: auto;
  margin-top: 39px;
  letter-spacing: 0;
  line-height: 38.4px;
`;

export default FAQ;
