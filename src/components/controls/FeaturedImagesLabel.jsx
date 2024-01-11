import React from 'react';
import { Box } from '@mui/system';

const FeaturedImagesLabel = (props) => {
  const { text } = props;
  return (
    <Box
      sx={{
        height: '40px',
        display: 'flex',
        padding: {
          xs: '0 12px',
          sm: '0 14px',
        },
        alignItems: 'center',
        borderRadius: '100px',
        background: 'linear-gradient(79.45deg, #5700ff 6.96%, #64e1dc 108.67%)',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          fontFamily: 'var(--font-family-montserrat)',
          fontWeight: '700',
          color: 'var(--white)',
          fontSize: '12px',
          textAlign: 'center',
          letterSpacing: '0',
          lineHeight: '1',
          whiteSpace: 'nowrap',
        }}
      >
        {text}
      </Box>
    </Box>
  );
};

export default FeaturedImagesLabel;
