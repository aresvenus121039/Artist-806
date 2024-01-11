import React, { ChangeEvent, useState } from 'react';
import { Box, Input } from '@mui/material';
import InputLabel from './InputLabel';

interface InputTextFieldProps {
  styleWrap: React.CSSProperties;
  textLabel?: string;
  placeholder?: string;
  typeInput?: string;
  value: string;
  onChange: (value: string) => void;
}

const InputTextField: React.FC<InputTextFieldProps> = ({
  styleWrap,
  textLabel,
  placeholder,
  typeInput = 'text',
  value,
  onChange,
}) => {
  const [inputValue, setInputValue] = useState<string>(value);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onChange(newValue);
  };

  return (
    <Box sx={styleWrap}>
      {textLabel && (
        <InputLabel
          text={textLabel}
          styleWrap={{
            marginBottom: '7.5px',
          }}
        />
      )}

      <Input
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.13)',
          padding: '18px 18px',
          fontSize: '16px',
          borderRadius: '8px',
          color: '#FFFFFF',
          fontWeight: '600',
          height: '52px',
          width: '100%',
          fontFamily: 'var(--font-family-montserrat)',
          'input:-webkit-autofill': {
            WebkitBoxShadow: '0 0 0 100px inherit inset',
            WebkitTextFillColor: 'inherit',
          },
        }}
        placeholder={placeholder}
        disableUnderline={true}
        type={typeInput}
        value={inputValue}
        onChange={handleChange}
      />
    </Box>
  );
};

export default InputTextField;
