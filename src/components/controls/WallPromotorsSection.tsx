import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Grid } from '@mui/material';
import {
  CappelliLogo,
  HighwoodsLogo,
  GoldfarbLogo,
  MillcreekLogo,
  RappaportLogo,
  WellbuiltWhiteLogo,
} from '../icons';
const useStyles = makeStyles((theme) => ({
  wallPromotorsHeading: {
    textAlign: 'center',
    letterSpacing: '6.4px',
    lineHeight: '75px',
    whiteSpace: 'nowrap',
    textTransform: 'uppercase',
    fontSize: '20px',
    fontWeight: 'bold',
  },
}));

const WallPromotorsSection: React.FC = () => {
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <Grid item lg={12}>
          <Box className={classes.wallPromotorsHeading}>walls promoted by</Box>
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Grid container justifyContent="center" direction="row">
            <Grid
              item
              xl={12}
              lg={12}
              md={12}
              xs={12}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {/* logo millcreek */}
              <Box
                sx={{
                  p: {
                    xs: 2,
                  },
                  m: {
                    xs: 0,
                    sm: 2,
                  },
                  textAlign: 'center',
                  width: {
                    xs: '50%',
                    sm: '213px',
                  },
                }}
              >
                <MillcreekLogo />
              </Box>

              {/* logo cappeli */}
              <Box
                sx={{
                  p: {
                    xs: 2,
                  },
                  m: {
                    xs: 0,
                    sm: 2,
                  },
                  textAlign: 'center',
                  width: {
                    xs: '50%',
                    sm: '213px',
                  },
                }}
              >
                <CappelliLogo />
              </Box>

              {/* logo goldfarb */}
              <Box
                sx={{
                  p: {
                    xs: 2,
                  },
                  m: {
                    xs: 0,
                    sm: 2,
                  },
                  textAlign: 'center',
                  width: {
                    xs: '50%',
                    sm: '180px',
                  },
                }}
              >
                <GoldfarbLogo />
              </Box>

              {/* logo highwoods */}
              <Box
                sx={{
                  p: {
                    xs: 2,
                  },
                  m: {
                    xs: 0,
                    sm: 2,
                  },
                  textAlign: 'center',
                  width: {
                    xs: '50%',
                    sm: '213px',
                  },
                }}
              >
                <HighwoodsLogo />
              </Box>

              {/* logo rappaport */}
              <Box
                sx={{
                  p: {
                    xs: 2,
                  },
                  m: {
                    xs: 0,
                    sm: 2,
                  },
                  textAlign: 'center',
                  width: {
                    xs: '50%',
                    sm: '213px',
                  },
                }}
              >
                <RappaportLogo />
              </Box>

              {/* logo wellbuilt */}
              <Box
                sx={{
                  p: {
                    xs: 2,
                  },
                  m: {
                    xs: 0,
                    sm: 2,
                  },
                  textAlign: 'center',
                  width: {
                    xs: '50%',
                    sm: '213px',
                  },
                }}
              >
                <WellbuiltWhiteLogo />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WallPromotorsSection;
