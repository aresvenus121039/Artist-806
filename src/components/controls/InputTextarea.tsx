import React, { ChangeEvent } from 'react';
import { Box, Typography } from '@mui/material';
import InputLabel from './InputLabel';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  customTextarea: {
    backgroundColor: 'rgba(255, 255, 255, 0.13)',
    padding: '18px 18px',
    fontSize: '16px',
    borderRadius: '8px',
    color: '#FFFFFF',
    fontWeight: '600',
    width: '100%',
    fontFamily: 'var(--font-family-montserrat)',
    border: 'none',
    resize: 'vertical',
    '&:focus': {
      border: 'none',
      outline: 'none',
    },
    '&::placeholder': {
      fontWeight: '600',
      fontSize: '16px',
      color: '#878c99',
    },
    '&:-webkit-autofill': {
      WebkitBoxShadow: '0 0 0 100px inherit inset',
      WebkitTextFillColor: 'inherit',
    },
  },
});

interface InputTextareaProps {
  styleWrap: React.CSSProperties;
  textLabel?: string;
  textLabelSmall?: string;
  placeholder?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: () => void;
  rows?: number;
  name?: string;
}

const InputTextarea: React.FC<InputTextareaProps> = ({
  styleWrap,
  textLabel,
  textLabelSmall,
  placeholder,
  value,
  onChange,
  onBlur,
  rows = 6,
  name,
}) => {
  const classes = useStyles();

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

      <textarea
        name={name}
        className={classes.customTextarea}
        placeholder={placeholder}
        rows={rows}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </Box>
  );
};

export default InputTextarea;
