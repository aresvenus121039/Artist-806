import React, { ReactNode } from 'react';
import { Typography, TypographyProps } from '@mui/material';

interface InputLabelProps {
  styleWrap?: React.CSSProperties;
  text?: string;
  children?: ReactNode;
}

const InputLabel: React.FC<InputLabelProps & TypographyProps> = (
  props: any
) => {
  const { styleWrap, text, children, ...typographyProps } = props;

  return (
    <Typography
      component="span"
      sx={{
        color: '#FFFFFF',
        fontFamily: 'var(--font-family-montserrat)',
        fontSize: '12px',
        fontWeight: '600',
        fontStyle: 'normal',
        letterSpacing: '0',
        lineHeight: '28.8px',
        display: 'block',
        ...styleWrap,
      }}
      {...typographyProps}
    >
      {text || children}
    </Typography>
  );
};

export default InputLabel;
