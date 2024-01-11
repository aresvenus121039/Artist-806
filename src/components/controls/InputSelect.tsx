import React, { ChangeEvent } from 'react';
import { styled, InputBase, NativeSelect, Box } from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';
import InputLabel from './InputLabel';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  position: 'relative',
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input, & .MuiInputBase-input:focus': {
    border: 'none',
    borderRadius: '8px',
    padding: '0 18px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '52px',
    outline: 'none',
    fontFamily: 'var(--font-family-montserrat)',
    backgroundColor: 'rgba(255, 255, 255, 0.13)',
    fontSize: '12px',
    color: '#FFF',
  },
  '& .MuiSvgIcon-root': {
    right: '12px',
    transform: 'rotate(0)',
    color: '#FFFFFF',
  },
  '& .MuiInputBase-input option': {
    backgroundColor: '#3f4962 !important',
  },
}));

interface InputSelectProps {
  defaultValue: string;
  list: string[];
  placeholder: string;
  styleWrap?: React.CSSProperties;
  textLabel?: string;
  getSelectValue?: (value: string) => void;
}

const InputSelect: React.FC<InputSelectProps> = ({
  defaultValue,
  list,
  placeholder,
  styleWrap,
  textLabel,
  getSelectValue,
}) => {
  const [value, setValue] = React.useState(defaultValue);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
    getSelectValue && getSelectValue(event.target.value);
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

      <NativeSelect
        sx={{
          width: '100%',
          color: '#06102B',
          fontWeight: '700',
          fontSize: '12px',
          height: '42px',
          fontFamily: 'var(--font-family-montserrat)',
        }}
        value={value}
        onChange={handleChange}
        input={<BootstrapInput />}
        IconComponent={KeyboardArrowDown}
      >
        <option value="">{placeholder}</option>
        {list.map((data: string, i: number) => (
          <option value={data} key={i}>
            {data}
          </option>
        ))}
      </NativeSelect>
    </Box>
  );
};

export default InputSelect;
