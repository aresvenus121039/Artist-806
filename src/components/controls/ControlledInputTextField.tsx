import React, { useCallback, useRef } from 'react';
import { Box, Input, Typography, InputAdornment } from '@mui/material';

import InputLabel from './InputLabel';
import { setInitValue } from '@/utility/numberWords';

interface ControlledInputTextFieldProps {
  styleWrap?: any;
  textLabel?: string;
  textLabelSmall?: string;
  placeholder?: string;
  typeInput?: string;
  prefix?: string;
  multiline?: boolean;
  inputProps?: any;
  typeField?: string;
  isUpdateField?: boolean;
  form: {
    setFieldValue: (field: string, value: any) => void;
    errors: any;
    touched: any;
    initialValues: any;
  };
  field: {
    name: string;
  };
}

const ControlledInputTextField: React.FC<ControlledInputTextFieldProps> = (
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
    isUpdateField,
    typeField,
    form: { setFieldValue, errors, touched, initialValues },
    field: { name },
    ...rest
  } = props;

  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setFieldValue(name, value || '');
    },
    [setFieldValue, name]
  );

  const inputRef = useRef<any>(null);

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
          fontSize: {
            xs: '12px',
            md: '16px',
          },
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
          colorScheme: 'dark',
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
        defaultValue={setInitValue(
          name,
          isUpdateField,
          typeField,
          initialValues
        )}
        inputRef={inputRef}
        onClick={() => {
          if (inputRef.current && typeInput === 'date') {
            inputRef.current?.showPicker();
          }
        }}
      />
      {errors[name] && touched[name] && (
        <Typography sx={{ color: 'red', fontSize: '13px' }}>
          {errors[name]}
        </Typography>
      )}
    </Box>
  );
};

export default ControlledInputTextField;
