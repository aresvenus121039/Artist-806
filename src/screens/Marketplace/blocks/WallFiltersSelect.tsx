import React, { useState, ChangeEvent } from 'react';
import { useMinimalSelectStyles } from '@mui-treasury/styles/select/minimal';
import { MenuItem, MenuProps, Select } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import { SelectInputProps } from '@material-ui/core/Select/SelectInput';

interface WallFiltersSelectProps {
  name: string;
  label: string;
  datas: { [key: string]: string };
  onChange: (event: ChangeEvent<{ name?: string; value: unknown }>) => void;
}

const WallFiltersSelect: React.FC<WallFiltersSelectProps> = ({
  name,
  label,
  datas,
  onChange,
}) => {
  const [val, setVal] = useState('');

  const handleChange = (
    event: ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    setVal(event.target.value as string);
    onChange(event);
  };

  const minimalSelectClasses = useMinimalSelectStyles();

  const iconComponent = (props: any) => {
    return (
      <ExpandMoreIcon
        className={props.className + ' ' + minimalSelectClasses.icon}
      />
    );
  };

  const menuProps = {
    classes: {
      paper: minimalSelectClasses.paper,
    },
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left',
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'left',
    },
    getContentAnchorEl: null,
  };

  return (
    <FormControl>
      <Select
        sx={{
          minWidth: 122,
          height: 42,
          paddingLeft: '11px',
          paddingRight: '11px',
          background: 'var(--white)',
          borderRadius: '8px',
          '&:focus': {
            outline: 'none !important',
            border: 'none !important',
          },
          boxShadow: 'inset 0px 0px 6px rgba(0, 0, 0, 0.5)',
          border: 'none !important',
          outline: 'unset !important',
          '&:hover': {
            outline: 'none !important',
            border: 'none !important',
          },
          '& .MuiOutlinedInput-notchedOutline': {
            border: 'none !important',
          },
        }}
        disableUnderline
        displayEmpty
        MenuProps={menuProps as Partial<MenuProps>}
        IconComponent={iconComponent}
        onChange={handleChange as any}
        name={name}
        value={val}
      >
        <MenuItem
          disabled
          value={''}
          sx={{
            display: 'none',
          }}
        >
          <Typography
            sx={{
              textTransform: 'capitalize',
              color: 'var(--black-pearl)',
              fontFamily: 'var(--font-family-montserrat)',
              fontSize: 'var(--font-size-s2)',
              fontWeight: 600,
              fontStyle: 'normal',
              mt: '3px',
            }}
          >
            {label}
          </Typography>
        </MenuItem>
        {Object.keys(datas).map((key, index) => (
          <MenuItem value={key} key={index}>
            <Typography
              sx={{
                textTransform: 'capitalize',
                color: 'var(--fiord)',
                fontFamily: 'var(--font-family-montserrat)',
                fontSize: 'var(--font-size-s2)',
                fontWeight: 600,
                fontStyle: 'normal',
              }}
            >
              {datas[key]}
            </Typography>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default WallFiltersSelect;
