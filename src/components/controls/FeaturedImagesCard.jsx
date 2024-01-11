import React from 'react';
import { Box, CardMedia } from '@mui/material';
import FeaturedImagesLabel from './FeaturedImagesLabel';
import { cloudflareImage } from '@/utility/images';

const FeaturedImagesCard = (props) => {
  const { styleWrap, styleImage, featuredImageSrc, textLabel } = props;
  return (
    <Box
      sx={{
        ...styleWrap,
        position: 'relative',
      }}
    >
      <CardMedia
        component="img"
        image={cloudflareImage(featuredImageSrc)}
        sx={{
          ...styleImage,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />

      {textLabel && (
        <Box
          sx={{
            width: {
              xs: '98.03px',
              sm: '138.79px',
            },
            position: 'absolute',
            bottom: {
              xs: '20px',
              sm: '32px',
            },
            left: {
              xs: '20px',
              sm: '32px',
            },
          }}
        >
          <FeaturedImagesLabel text="Just Listed" />
        </Box>
      )}
    </Box>
  );
};

export default FeaturedImagesCard;
