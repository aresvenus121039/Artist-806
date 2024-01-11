import React, { ChangeEvent } from 'react';
import { Box, Input, Typography } from '@mui/material';
import InputLabel from './InputLabel';

interface InputTextFieldDollarProps {
  styleWrap: React.CSSProperties;
  textLabel?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

const InputTextFieldDollar: React.FC<InputTextFieldDollarProps> = (
  props: InputTextFieldDollarProps
) => {
  const { styleWrap, textLabel, placeholder, value, onChange } = props;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <Box sx={styleWrap}>
      {textLabel && (
        <InputLabel
          text={textLabel}
          styleWrap={{
            marginBottom: '12px',
          }}
        />
      )}

      <Box
        sx={{
          position: 'relative',
        }}
      >
        <Input
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.13)',
            padding: '18px 18px 18px 36px',
            fontSize: '16px',
            borderRadius: '8px',
            color: '#FFFFFF',
            fontWeight: '600',
            height: '52px',
            width: '100%',
            fontFamily: 'var(--font-family-montserrat)',
            'input::-webkit-outer-spin-button': {
              '-webkit-appearance': 'none',
              margin: '0',
            },
            'input::-webkit-inner-spin-button': {
              '-webkit-appearance': 'none',
              margin: '0',
            },
            'input[type=number]': {
              '-moz-appearance': 'textfield',
            },
            'input:-webkit-autofill': {
              WebkitBoxShadow: '0 0 0 100px inherit inset',
              WebkitTextFillColor: 'inherit',
            },
          }}
          inputProps={{
            type: 'number',
            inputMode: 'numeric',
            pattern: '[0-9]*',
          }}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          disableUnderline={true}
        />

        <Typography
          sx={{
            color: '#FFFFFF',
            fontFamily: 'var(--font-family-montserrat)',
            fontSize: '16px',
            fontWeight: '600',
            fontStyle: 'normal',
            position: 'absolute',
            zIndex: '2',
            top: '50%',
            left: '18px',
            transform: 'translateY(-50%)',
          }}
        >
          $
        </Typography>
      </Box>
    </Box>
  );
};

export default InputTextFieldDollar;
