import React from 'react';
import { useSelector } from 'react-redux';
import Paper from '@mui/material/Paper';
import Autocomplete from '@mui/material/Autocomplete';
import InputBase from '@mui/material/InputBase';
import _ from 'lodash';

import { selectStatesFilters } from '@/store/reducers/marketplaceReducer';
import { getState, USAState } from '@/utility/usaStateAbbr';

interface LocationsTextFieldProps {
  onChange: (state: string) => void;
  value?: string;
}

const LocationsTextField: React.FC<LocationsTextFieldProps> = ({
  onChange,
  value = '',
}) => {
  const registeredStates: any[] = useSelector(selectStatesFilters);

  return (
    <Paper
      elevation={0}
      component="form"
      sx={{
        border: '#e2e8f0 solid 2px',
        borderRadius: '8px',
        display: 'block',
        alignItems: 'center',
        width: '100%',
        height: '42px',
        position: 'relative',
        boxShadow: 'inset 0px 0px 6px rgba(0, 0, 0, 0.5)',
      }}
    >
      <Autocomplete
        disablePortal
        value={value}
        id="combo-box-demo"
        options={registeredStates}
        onInputChange={(event, newInputValue) => {
          if (value !== newInputValue) {
            onChange(newInputValue);
          }
        }}
        renderOption={(props, option) => {
          return (
            <span
              {...props}
              style={{ color: '#06102b', backgroundColor: '#fff' }}
            >
              {option}
            </span>
          );
        }}
        renderInput={(params) => {
          return (
            <InputBase
              {...params}
              sx={{
                color: '#06102b',
                fontFamily: 'var(--font-family-montserrat) !important',
                fontWeight: '600 !important',
                lineHeight: '1.4375em',
                background: 'transparent',
                position: 'relative',
                padding: '6px 35px 3px 8px',
                width: '100%',
                fontSize: '14px !important',
              }}
              placeholder="Search By State"
            />
          );
        }}
      />
    </Paper>
  );
};

export default LocationsTextField;
