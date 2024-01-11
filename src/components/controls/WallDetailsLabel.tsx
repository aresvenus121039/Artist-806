import React, { FC } from 'react';
import { Box, Chip, Typography, TypographyProps } from '@mui/material';

interface WallDetailsLabelProps {
  styleWrap: React.CSSProperties;
  text: string;
}

const WallDetailsLabel: FC<WallDetailsLabelProps> = (props) => {
  const { styleWrap, text } = props;

  return (
    <Chip
      sx={{
        ...styleWrap,
        borderRadius: '100px',
      }}
      label={text}
    />
  );
};

export default WallDetailsLabel;
