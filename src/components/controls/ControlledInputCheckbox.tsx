import React, { useCallback } from 'react';
import { Checkbox, Box, Typography } from '@mui/material';
import { fieldToCheckbox, CheckboxProps } from 'formik-mui';
import InputLabel from './InputLabel';
import { FormikErrors, FormikTouched } from 'formik';

interface ControlledInputCheckboxProps extends CheckboxProps {
  styleWrap?: React.CSSProperties;
  textLabel?: string;
  description?: React.ReactNode;
  icon?: React.ReactNode;
  checkedIcon?: React.ReactNode;
}

const ControlledInputCheckbox: React.FC<ControlledInputCheckboxProps> = (
  props
) => {
  const {
    styleWrap,
    textLabel,
    description,
    icon,
    checkedIcon,
    form: { setFieldValue, errors, touched },
    field: { name },
  } = props;

  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { checked } = event.target;
      setFieldValue(name, checked);
    },
    [setFieldValue, name]
  );

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
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Checkbox
          {...fieldToCheckbox(props)}
          icon={icon}
          checkedIcon={checkedIcon}
          onChange={onChange}
          inputProps={{ 'aria-label': 'controlled' }}
        />
        {description}
      </Box>

      {typeof errors[name] === 'string' && touched[name] ? (
        <Typography sx={{ color: 'red', fontSize: '13px' }}>
          {errors[name] as string}
        </Typography>
      ) : null}
    </Box>
  );
};

export default ControlledInputCheckbox;
