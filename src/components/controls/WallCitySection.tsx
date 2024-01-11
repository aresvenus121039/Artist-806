import React from 'react';
import { Container, Box, Grid, Typography, CardMedia } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { cloudflareImage } from '@/utility/images';

const useStyles = makeStyles((theme) => ({
  sectionHeading: {
    // Your styles...
  },
}));

interface WallCitySectionProps {
  wallImageSrc: string;
  subtitle: string;
  title: string;
  description: string;
}

const WallCitySection: React.FC<WallCitySectionProps> = (props: any) => {
  const classes = useStyles();
  const { wallImageSrc, subtitle, title, description } = props;

  return (
    <Container
      maxWidth="xl"
      sx={{
        position: 'relative',
        zIndex: 1,
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          alignItems: 'center',
        }}
      >
        <Grid item xs={12} sm={5} lg={4}>
          <Box
            sx={{
              padding: {
                xs: '0 0 50px 0',
                sm: '0 0 0 0',
              },
            }}
          >
            <CardMedia
              loading="lazy"
              component="img"
              image={cloudflareImage(wallImageSrc)}
              sx={{
                borderRadius: '20px',
                objectFit: 'cover',
                height: {
                  xs: '494px',
                  md: '632px',
                },
              }}
            />
          </Box>
        </Grid>

        <Grid item xs={12} sm={7} lg={8}>
          <Box
            sx={{
              padding: {
                xs: '0 0 0 0',
                sm: '0 0 0 30px',
                lg: '0 0 0 112px',
              },
            }}
          >
            <Box
              sx={{
                fontFamily: 'var(--font-family-montserrat)',
                fontWeight: '700',
                color: 'var(--aqua-pearl)',
                fontSize: {
                  xs: '16px',
                  sm: '24px',
                },
                letterSpacing: 0,
              }}
            >
              {subtitle}
            </Box>
            <Box
              className={classes.sectionHeading}
              sx={{
                marginBottom: '10px',
                display: 'inline-block',
              }}
            >
              {title}
            </Box>

            <Box
              sx={{
                width: {
                  lg: '591.32px',
                  xl: '591.32px',
                },
              }}
            >
              <Typography
                component={'p'}
                sx={{
                  fontFamily: 'var(--font-family-montserrat)',
                  fontWeight: '400',
                  color: 'var(--white)',
                  fontSize: {
                    xs: '14px',
                    md: '16px',
                  },
                  letterSpacing: '0',
                  lineHeight: {
                    xs: '33.6px',
                    md: '38.4px',
                  },
                }}
              >
                {description}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default WallCitySection;
