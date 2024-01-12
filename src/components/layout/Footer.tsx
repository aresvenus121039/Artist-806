import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Input,
  Button,
  Link,
  styled,
  IconButton,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/system';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const useStyles = makeStyles((theme: Theme) => {
  return {
    typography: {
      color: 'var(--white)',
      fontFamily: 'var(--font-family-formulacondensed)',
      fontWeight: 700,
      textTransfrom: 'capitalize',
      fontSize: '16px',
      marginBottom: '16px',
      [theme.breakpoints.up('md')]: {
        fontSize: '40px',
        marginBottom: '24px',
      },
    },
  };
});

const BoldNavButton = styled(Button)({
  padding: '2px 0',
  minWidth: '30px',
  fontFamily: 'var(--font-family-montserrat)',
  fontSize: 'var(--font-size-l)',
  fontStyle: 'normal',
  fontWeight: 500,
  textTransform: 'capitalize',
  color: 'var(--white)',
  background: 'transparent',
  '&:hover': {
    color: 'var(--opacity-white-white-50)',
    background: 'transparent',
  },
  '&:active': {
    color: 'var(--opacity-white-white-50)',
    background: 'transparent',
  },
});

const LightNavButton = styled(Button)({
  padding: '2px 0',
  minWidth: '30px',
  fontFamily: 'var(--font-family-montserrat)',
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: 300,
  textTransform: 'capitalize',
  color: 'var(--white)',
  background: 'transparent',
  '&:hover': {
    color: 'var(--opacity-white-white-50)',
    background: 'transparent',
  },
  '&:active': {
    color: 'var(--opacity-white-white-50)',
    background: 'transparent',
  },
});

const Footer = () => {
  const classes = useStyles();
  const boldNavs = [
    {
      href: '/mission',
      text: 'Mission',
    },
    {
      href: 'real-estate',
      text: 'Real Estate',
    },
    {
      href: '/community',
      text: 'Community',
    },
    {
      href: '/donate',
      text: 'Donate',
    },
    {
      href: '/whats-new',
      text: "What's New?",
    },
    {
      href: '/wxllspace-tv',
      text: 'WXLLSPACE TV',
    },
    {
      href: '/creatives',
      text: 'Creatives',
    },
  ];
  const lightNavs = [
    {
      href: '/privacy-policy',
      text: 'Privacy Policy',
    },
    {
      href: '/cookies-policy',
      text: 'Cookies Policy',
    },
    {
      href: '/contact',
      text: 'Contact',
    },
    {
      href: '/faq',
      text: 'FAQ',
    },
    {
      href: '/status',
      text: 'Status',
    },
    {
      href: '/terms-conditions',
      text: 'Terms & Conditions',
    },
  ];

  const socialLinks = [
    {
      href: 'https://twitter.com/WXLLSPACE',
      icon: <TwitterIcon sx={{ color: 'white' }} />,
    },
    {
      href: 'https://www.facebook.com/wxllspace',
      icon: <FacebookIcon sx={{ color: 'white' }} />,
    },
    {
      href: 'https://www.instagram.com/wxll.space/',
      icon: <InstagramIcon sx={{ color: 'white' }} />,
    },
    {
      href: 'https://www.linkedin.com/company/wxllspace',
      icon: <LinkedInIcon sx={{ color: 'white' }} />,
    },
  ];

  return (
    <Container maxWidth={false}>
      <Grid container direction="column">
        <Grid item xs={12} sx={{ marginBottom: '24px' }}>
          <Container maxWidth={false}>
            <Grid container>
              <Grid item xs={12} md={6}>
                <Typography
                  component={'h2'}
                  sx={{
                    fontFamily: 'var(--font-family-formulacondensed)',
                    fontWeight: '700',
                    color: '#F1F0F0',
                    fontSize: '40px',
                    letterSpacing: '1.6px',
                    textTransform: 'uppercase',
                    lineHeight: '48px',
                  }}
                >
                  Want To Stay In The Loop?
                </Typography>

                {/* input subcribe */}
                <Box
                  sx={{
                    maxWidth: '585px',
                    height: '60px',
                    width: '100%',
                    padding: '8px',
                    borderRadius: 'var(--radius-full)',
                    border: '1px solid var(--opacity-white-white-10)',
                    background: 'var(--opacity-white-white-10)',
                    backdropFilter: 'blur(20px)',
                    display: 'flex',
                  }}
                >
                  <Input
                    disableUnderline={true}
                    sx={{
                      flex: '1',
                      border: '1px solid var(--opacity-white-white-35)',
                      padding: '12px 24px',
                      backdropFilter: 'blur(20px)',
                      borderRadius: 'var(--radius-full)',
                      fontFamily: 'var(--font-family-montserrat)',
                      fontWeight: 500,
                      fontSize: '16px',
                      lineHeight: '16px',
                      '& input': {
                        padding: 0,
                        height: 'auto',
                      },
                    }}
                    placeholder="email"
                  />

                  {/* button */}
                  <Box sx={{}}>
                    <Button
                      sx={{
                        fontFamily: 'Roboto',
                        marginLeft: '8px',
                        paddingRight: '24px',
                        paddingLeft: '24px',
                        borderRadius: 'var(--radius-full)',
                        textTransform: 'lowercase',
                        fontSize: '16px',
                        fontWeight: 400,
                        background: 'var(--opacity-white-white-10)',
                        border: '1px solid var(--opacity-white-white-35)',
                        color: 'white',
                        '&:hover': {
                          boxShadow:
                            '0px 0px 25px 0px rgba(255, 255, 255, 0.25)',
                          border: '1px solid var(--white)',
                          background: 'var(--white)',
                          color: 'var(--main-dark)',
                        },
                        '&:active': {
                          boxShadow:
                            '0px 0px 25px 0px rgba(255, 255, 255, 0.25)',
                          border: '1px solid var(--white)',
                          background: 'var(--white)',
                          color: 'var(--main-dark)',
                        },
                      }}
                    >
                      send
                    </Button>
                  </Box>
                </Box>
              </Grid>

              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  display: 'flex',
                  justifyContent: {
                    md: 'end',
                    xs: 'center',
                  },
                  marginTop: {
                    md: '0px',
                    xs: '30px',
                  },
                }}
              >
                <Box
                  sx={{
                    width: {
                      md: '60%',
                      xs: '90%',
                    },
                    display: 'flex',
                  }}
                >
                  <Grid container direction="column" rowSpacing={2}>
                    {boldNavs.map((nav, i) => (
                      <Grid item key={i}>
                        <Link href={nav.href}>
                          <BoldNavButton>{nav.text}</BoldNavButton>
                        </Link>
                      </Grid>
                    ))}
                  </Grid>
                  <Grid container direction="column" rowSpacing={2}>
                    {lightNavs.map((nav, i) => (
                      <Grid item key={i}>
                        <Link href={nav.href}>
                          <LightNavButton>{nav.text}</LightNavButton>
                        </Link>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Grid>

        <Grid item xs={12}>
          <Container maxWidth={false}>
            <Grid container direction="column">
              <Grid
                item
                xs={12}
                sx={{
                  marginBottom: '60px',
                  display: 'flex',
                  justifyContent: {
                    md: 'flex-start',
                    xs: 'center',
                  },
                }}
              >
                {socialLinks.map((link, index) => (
                  <Box
                    sx={{ display: 'inline-flex', marginRight: '24px' }}
                    key={index}
                  >
                    <a href={link.href}>
                      <IconButton
                        aria-label="WXLLSPACE Twitter"
                        size="small"
                        sx={{
                          padding: '12px',
                          borderRadius: '100px',
                          background: 'rgba(220, 220, 220, 0.06)',
                        }}
                      >
                        {link.icon}
                      </IconButton>
                    </a>
                  </Box>
                ))}
              </Grid>
              <Grid item xs={12}>
                <Typography
                  component="p"
                  sx={{
                    color: 'var(--opacity-white-white-50)',
                    fontFamily: 'var(--font-family-montserrat)',
                    fontSize: {
                      xs: '12px',
                      md: '14px',
                    },
                    fontWeight: '300',
                    marginBottom: '20px',
                  }}
                >
                  Copyright © 2021 WXLLSPACE 🚀 All Rights Reserved.
                </Typography>
                <Typography
                  component="p"
                  sx={{
                    maxWidth: '585px',
                    color: 'var(--opacity-white-white-50)',
                    fontFamily: 'var(--font-family-montserrat)',
                    fontSize: '12px',
                    fontWeight: '300',
                    marginBottom: '50px',
                  }}
                >
                  All text and imagery on this website is protected by U.S.
                  copyright law. No part may be reproduced without the advance
                  written approval of WXLLSPACE and "The Artist".
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
