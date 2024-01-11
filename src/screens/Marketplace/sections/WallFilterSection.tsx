import React from 'react';
import { Box } from '@mui/material';

export const WallFilterSection = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        height: '92px',
        columnGap: '1rem',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}></div>
    </Box>
  );
};
