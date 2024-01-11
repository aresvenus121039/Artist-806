import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import useStyles from './styles';

const Artist = () => {
  const classes = useStyles();

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
          {/* Artist Details Section */}
          <Grid item xs={12} md={12} lg={12} xl={12}>
            <Container maxWidth="lg" sx={{ paddingTop: '8rem' }}>
              <p>Artist Details Section</p>
            </Container>
          </Grid>

          {/* Artist Location Section */}
          <Grid item xs={12} md={12} lg={12} xl={12}>
            <Container maxWidth="lg">
              <p>Artist Location Section</p>
            </Container>
          </Grid>

          {/* Artist Portfolio Section */}
          <Grid item xs={12} md={12} lg={12} xl={12}>
            <Container maxWidth="lg">
              <p>Artist Portfolio Section</p>
            </Container>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Artist;
