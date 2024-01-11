import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Grid } from '@mui/material';
import { BlogPostCarousel } from './BlogPostCarousel';

const useStyles = makeStyles((theme) => ({
  sectionHeading: {
    [theme.breakpoints.down('md')]: {
      maxWidth: '827.86px',
      fontSize: 'var(--font-size-xxxl)',
      fontWeight: 900,
      fontFamily: 'var(--font-family-montserrat)',
      fontStyle: 'normal',
      lineHeight: '60px',
      letterSpacing: '-0.05em',
      backgroundImage:
        'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(169,132,255,1) 35.07%, rgba(100,225,220,1) 53.88%, rgba(111,194,255,1) 73.08%, rgba(255,255,255,1) 100%)',
      backgroundSize: '100%',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textAlign: 'left',
      textTransform: 'capitalize',
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: '827.86px',
      fontSize: '40px',
      fontWeight: 900,
      fontFamily: 'var(--font-family-montserrat)',
      fontStyle: 'normal',
      lineHeight: '60px',
      letterSpacing: '-0.05em',
      backgroundImage:
        'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(169,132,255,1) 35.07%, rgba(100,225,220,1) 53.88%, rgba(111,194,255,1) 73.08%, rgba(255,255,255,1) 100%)',
      backgroundSize: '100%',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textAlign: 'left',
      textTransform: 'capitalize',
    },
  },
}));

export const NewThisWeekSection = () => {
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Box
            className={classes.sectionHeading}
            sx={{
              maxWidth: '827.86px',
            }}
          >
            New this week
          </Box>
        </Grid>

        <Grid item xl={12} lg={12} md={12} xs={12}>
          <Grid container justifyContent="center" direction="row">
            <Grid
              item
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}
              spacing={10}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <BlogPostCarousel />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
