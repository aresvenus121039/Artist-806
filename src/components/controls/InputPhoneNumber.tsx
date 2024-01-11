import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Input, InputProps } from '@mui/material';
import InputLabel from './InputLabel';

function formatPhoneNumber(value: string): string {
  if (!value) return value;

  const phoneNumber = value.replace(/[^\d]/g, '');
  const phoneNumberLength = phoneNumber.length;

  if (phoneNumberLength <= 3) {
    return phoneNumber;
  }

  if (phoneNumberLength <= 6) {
    return `(${phoneNumber.slice(0, 3)})${phoneNumber.slice(3, 6)}`;
  }

  return `(${phoneNumber.slice(0, 3)})${phoneNumber.slice(
    3,
    6
  )}-${phoneNumber.slice(6, 10)}`;
}

interface InputPhoneNumberProps {
  styleWrap?: React.CSSProperties;
  textLabel?: string;
  placeholder?: string;
  typeInput?: InputProps['type'];
  error?: boolean;
  onChange?: (value: string) => void;
}

const InputPhoneNumber: React.FC<InputPhoneNumberProps> = (props: any) => {
  const {
    styleWrap,
    textLabel,
    placeholder,
    typeInput = 'text',
    error,
    onChange = () => undefined,
  } = props;
  const [value, setValue] = useState('');

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setValue(formattedPhoneNumber);
    onChange(e.target.value);
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
        onChange={handleInput}
        value={value}
        error={error}
      />
    </Box>
  );
};

InputPhoneNumber.propTypes = {
  onChange: PropTypes.func,
};

InputPhoneNumber.defaultProps = {
  onChange: () => undefined,
};

export default InputPhoneNumber;
