import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Grid } from '@mui/material';

import { CoStarIcon, LoopNetIcon } from '../icons';

const useStyles = makeStyles((theme) => ({
  featuredInHeading: {
    textAlign: 'center',
    letterSpacing: '6.4px',
    lineHeight: '75px',
    whiteSpace: 'nowrap',
    textTransform: 'uppercase',
    fontSize: '20px',
    fontWeight: 'bold',
  },
}));

export const FeaturedInSection = () => {
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={2}
        direction="column"
      >
        <Grid item lg={12}>
          <Box className={classes.featuredInHeading}>featured in</Box>
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Grid
            item
            xl={12}
            lg={12}
            md={12}
            xs={12}
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                m: 2,
                textAlign: 'center',
                fontSize: '25px',
              }}
            >
              <a href="https://www.loopnet.com/learn/heres-one-way-to-get-a-mural-painted-on-your-new-high-rise-or-warehouse/1630866139/">
                <LoopNetIcon />
              </a>
            </Box>

            <Box
              sx={{
                m: 2,
                textAlign: 'center',
              }}
            >
              <a href="https://product.costar.com/home/news/shared/1828985191">
                <CoStarIcon />
              </a>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
