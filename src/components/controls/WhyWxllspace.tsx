import React from 'react';
import { Box, Typography, Container, Grid, CardMedia } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { cloudflareImage } from '@/utility/images';
import { motion } from 'framer-motion';

const useStyles = makeStyles((theme: any) => ({
  sectionHeading: {
    fontSize: '50px',
    fontWeight: 700,
    fontFamily: 'var(--font-family-formula-condensed)',
    fontStyle: 'normal',
    letterSpacing: '2px',
    textTransform: 'uppercase',
  },
}));

const WhyWxllspaceSection = () => {
  const classes = useStyles();

  const data = [
    {
      icon: 'https://anima-uploads.s3.amazonaws.com/projects/6183b51d6b5cbed22d564e6f/releases/6188834677e5a840e6864d1a/img/frame-3@2x.svg?v=1636337334455',
      title: 'Insurance',
      description:
        'Must have coverage that protects you from unforeseen circumstances and provides peace of mind knowing your assets are secure, no matter what happens!',
    },
    {
      icon: 'https://anima-uploads.s3.amazonaws.com/projects/6183b51d6b5cbed22d564e6f/releases/6188834677e5a840e6864d1a/img/frame@2x.svg?v=1636337334453',
      title: 'Media',
      description:
        'Producing captivating, action-packed footage for all your social media content.',
    },
    {
      icon: 'https://anima-uploads.s3.amazonaws.com/projects/6183b51d6b5cbed22d564e6f/releases/6188834677e5a840e6864d1a/img/frame-2@2x.svg?v=1636337334455',
      title: 'Legal Documents',
      description:
        'Protecting your intellectual property and time. All smart contracts on the blockchain.',
    },
    {
      icon: 'https://anima-uploads.s3.amazonaws.com/projects/6183b51d6b5cbed22d564e6f/releases/6188834677e5a840e6864d1a/img/frame-1@2x.svg?v=1636337334454',
      title: 'Time Saving',
      description:
        'RFQ’s are endless and time consuming. Fill out a proposal in 60 seconds or less.',
    },
  ];

  return (
    <Container
      maxWidth={false}
      sx={{
        position: 'relative',
        padding: '0px 150px !important'
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          fade: 'fadeIn',
          duration: 0.3,
          delay: 0.2,
        }}
        viewport={{ once: true, amount: 0 }}
      >
        <Typography
          sx={{
            marginBottom: '16px',
            fontFamily: 'Roboto',
            fontWeight: '400',
            fontStyle: 'normal',
            fontSize: '22px',
            textTransform: 'lowercase',
          }}
        >
          streamline the process
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          fade: 'fadeIn',
          duration: 0.3,
          delay: 0.5,
        }}
        viewport={{ once: true, amount: 0 }}
      >
        <Typography
          variant="h2"
          className={classes.sectionHeading}
          sx={{
            marginBottom: '20px',
          }}
        >
          why wxllspace
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          fade: 'fadeIn',
          duration: 0.3,
          delay: 0.8,
        }}
        viewport={{ once: true, amount: 0 }}
      >
        <Typography
          sx={{
            marginBottom: '48px',
            fontSize: '16px',
            lineHeight: '25px',
            fontWeight: 400,
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            maxWidth: '900px',
            color: '#FFF',
          }}
        >
          Stop wasting precious time and energy pounding the streets. Browse the
          latest new mural commissions before they hit the open market. Connect
          directly with owners and decision-makers who control the space.
        </Typography>
      </motion.div>

      <Grid container spacing={{ xs: 3, md: 4 }}>
        {data.map((item, i) => (
          <Grid item xs={12} md={6} key={i}>
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                fade: 'fadeIn',
                duration: 0.3,
                delay: i * 0.2,
              }}
              viewport={{ once: true, amount: 0 }}
              style={{ height: '100%' }}
            >
              <Box
                sx={{
                  padding: '48px',
                  borderRadius: '24px',
                  border: '1px solid rgba(177, 78, 255, 0.35)',
                  background: 'rgba(177, 78, 255, 0.10)',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                }}
              >
                <CardMedia
                  loading="lazy"
                  component="img"
                  src={cloudflareImage(item.icon)}
                  sx={{
                    height: {
                      xs: '24px',
                      sm: '40px',
                    },
                    width: {
                      xs: '24px',
                      sm: '40px',
                    },
                    marginBottom: {
                      xs: '24px',
                      sm: '48px',
                    },
                  }}
                />

                <Typography
                  component="h4"
                  sx={{
                    color: '#fff',
                    fontFamily: 'var(--font-family-formula-condesned)',
                    fontSize: {
                      xs: '14px',
                      sm: '22px',
                    },
                    fontWeight: '700',
                    letterSpacing: '0.88px',
                    marginBottom: '8px',
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  component="p"
                  sx={{
                    maxWidth: '450px',
                    color: '#fff',
                    fontFamily: 'Roboto',
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '25px',
                  }}
                >
                  {item.description}
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default WhyWxllspaceSection;
