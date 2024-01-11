import React, { useState, ChangeEvent } from 'react';
import { styled, InputBase, NativeSelect, Box } from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';
import InputLabel from './InputLabel';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  // Styles omitted for brevity
}));

interface InputSelectArtistProps {
  defaultValue?: string;
  list: string[];
  placeholder: string;
  styleWrap?: React.CSSProperties;
  textLabel?: string;
  getSelectValue?: (value: string) => void;
}

const InputSelectArtist: React.FC<InputSelectArtistProps> = (
  props: InputSelectArtistProps
) => {
  const {
    defaultValue,
    list,
    placeholder,
    styleWrap,
    textLabel,
    getSelectValue,
  } = props;

  const [value, setValue] = useState<string>(defaultValue || '');

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setValue(selectedValue);
    getSelectValue?.(selectedValue);
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
          height: '65.75px',
          fontFamily: 'var(--font-family-montserrat)',
        }}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        input={<BootstrapInput />}
        IconComponent={KeyboardArrowDown}
      >
        <option value="">{placeholder}</option>
        {list.map((data, i) => (
          <option value={data} key={i}>
            {data}
          </option>
        ))}
      </NativeSelect>
    </Box>
  );
};

export default InputSelectArtist;
