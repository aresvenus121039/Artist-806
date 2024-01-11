import React from 'react';
import { Box, Grid } from '@mui/material';
import ArtistCard from './ArtistCard';

interface ArtistSearchResultSectionProps {
  data: any[]; // Update the type of data according to your actual data structure
}

export const ArtistSearchResultSection: React.FC<ArtistSearchResultSectionProps> =
  (props) => {
    const { data } = props;

    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          {data.map((item, key) => (
            <Grid key={key} item xs={12} sm={6} md={4} lg={3} xl={3}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <ArtistCard {...item} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  };
