import React from 'react';
import { Box, Typography, CardMedia } from '@mui/material';
import { cloudflareImage } from '@/utility/images';

interface ProcessTextIconProps {
  iconImageSrc: string;
  title: string;
  description: string;
}

const ProcessTextIcon: React.FC<ProcessTextIconProps> = ({
  iconImageSrc,
  title,
  description,
}) => {
  return (
    <Box>
      <CardMedia
        loading="lazy"
        component="img"
        src={iconImageSrc}
        sx={{
          height: {
            xs: '24px',
            sm: '33px',
          },
          width: {
            xs: '24px',
            sm: '32px',
          },
          marginBottom: {
            xs: '12px',
            sm: '20px',
          },
        }}
      />
      <Typography
        component="h4"
        sx={{
          color: 'var(--white)',
          fontFamily: 'var(--font-family-montserrat)',
          fontSize: {
            xs: '14px',
            sm: '14px',
          },
          fontWeight: '700',
          fontStyle: 'normal',
          lineHeight: '28px',
        }}
      >
        {title}
      </Typography>

      <Typography
        component="h4"
        sx={{
          color: 'var(--white)',
          fontFamily: 'var(--font-family-montserrat)',
          fontSize: '12px',
          fontWeight: '400',
          fontStyle: 'normal',
          lineHeight: '28px',
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default ProcessTextIcon;
