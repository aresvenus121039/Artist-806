import React, { useCallback } from 'react';
import { Box, Typography } from '@mui/material';
import { MultiSelect } from 'react-multi-select-component';

import InputLabel from './InputLabel';

interface Option {
  value: string;
  label: string;
}

interface ControlledInputMultiSelectProps {
  styleWrap?: React.CSSProperties;
  textLabel?: string;
  form: {
    setFieldValue: (field: string, value: Option[]) => void;
    errors: Record<string, string>;
    values: Record<string, Option[]>;
    touched: Record<string, boolean>;
  };
  field: {
    name: string;
  };
  list: Option[];
}

const ControlledInputMultiSelect: React.FC<ControlledInputMultiSelectProps> = (
  props
) => {
  const {
    styleWrap,
    textLabel,
    form: { setFieldValue, errors, values, touched },
    field: { name },
    list,
  } = props;

  const onChange = useCallback(
    (val: Option[]) => {
      setFieldValue(name, val);
    },
    [setFieldValue, name]
  );

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
      <MultiSelect
        options={list}
        value={values[name]}
        onChange={onChange}
        labelledBy="Select"
        className="custom-multiple-select"
      />
      {errors[name] && touched[name] && (
        <Typography sx={{ color: 'red', fontSize: '13px' }}>
          {errors[name]}
        </Typography>
      )}
    </Box>
  );
};

export default ControlledInputMultiSelect;
