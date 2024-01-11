import React from 'react';
import { Box, Input, Typography, InputAdornment } from '@mui/material';

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

interface ControlledInputPhoneNumberProps {
  styleWrap: any;
  textLabel: string;
  textLabelSmall?: string;
  placeholder: string;
  typeInput: string;
  prefix: string;
  multiline: boolean;
  inputProps: any;
  form: {
    setFieldValue: Function;
    errors: any;
    touched: any;
    initialValues: any;
  };
  field: {
    name: string;
  };
  [rest: string]: any;
}

const ControlledInputPhoneNumber: React.FC<ControlledInputPhoneNumberProps> = (
  props
) => {
  const {
    styleWrap,
    textLabel,
    textLabelSmall,
    placeholder,
    typeInput,
    prefix,
    multiline,
    inputProps,
    form: { setFieldValue, errors, touched, initialValues },
    field: { name },
    ...rest
  } = props;

  const onChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const formattedPhoneNumber = formatPhoneNumber(event.target.value);
      setFieldValue(name, formattedPhoneNumber);
    },
    [setFieldValue, name]
  );

  return (
    <Box sx={styleWrap}>
      {textLabel && <InputLabel text={textLabel} />}
      {textLabelSmall && (
        <Typography
          sx={{
            fontSize: '10px',
            color: '#848381',
            fontWeight: '500',
            marginBottom: '10px',
          }}
        >
          {textLabelSmall}
        </Typography>
      )}
      <Input
        {...rest}
        sx={{
          backgroundColor: '#303950',
          padding: '10px 18px',
          fontSize: '16px',
          borderRadius: '8px',
          color: '#FFFFFF',
          fontWeight: '600',
          width: '100%',
          fontFamily: 'var(--font-family-montserrat)',
          '& input:-webkit-autofill': {
            WebkitBoxShadow: '0 0 0 50px #303950 inset !important',
            boxShadow: '0 0 0 50px #303950 inset !important',
            WebkitTextFillColor: '#FFFFFF !important',
            backgroundColor: 'transparent !important',
          },
          '& input:not(input:-webkit-autofill)::-webkit-contacts-auto-fill-button':
            {
              backgroundColor: '#fff',
            },
        }}
        placeholder={placeholder}
        disableUnderline={true}
        type={typeInput}
        onChange={onChange}
        startAdornment={
          prefix && <InputAdornment position="start">{prefix}</InputAdornment>
        }
        multiline={multiline}
        inputProps={inputProps}
        defaultValue={initialValues[name]}
      />
      {errors[name] && touched[name] && (
        <Typography sx={{ color: 'red', fontSize: '13px' }}>
          {errors[name]}
        </Typography>
      )}
    </Box>
  );
};

export default ControlledInputPhoneNumber;
