import React, { useState } from 'react';
import { Box } from '@mui/material';
import InputLabel from './InputLabel';
import { MultiSelect } from 'react-multi-select-component';

interface Option {
  label: string;
  value: string;
}

interface InputSelectMultipleProps {
  styleWrap?: React.CSSProperties;
  textLabel?: string;
  list: Option[];
  getSelectedValue?: (data: Option[]) => void;
}

const InputSelectMultiple: React.FC<InputSelectMultipleProps> = ({
  styleWrap,
  textLabel,
  list,
  getSelectedValue,
}) => {
  const [selected, setSelected] = useState<Option[]>([]);

  const handleChange = (data: any[]) => {
    const selectedOptions = data as Option[];
    setSelected(selectedOptions);
    getSelectedValue && getSelectedValue(selectedOptions);
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

      <MultiSelect
        options={list}
        value={selected}
        onChange={handleChange}
        labelledBy="Select"
        className={'custom-multiple-select'}
      />
    </Box>
  );
};

export default InputSelectMultiple;
