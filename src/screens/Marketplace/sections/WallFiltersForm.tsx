import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { MarketplaceMapContext } from '../../../contexts/MarketplaceMapContext';

import LocationsTextField from '../blocks/LocationsTextField';

interface WallFiltersFormProps {
  onChangeLocation: (state: string) => void;
}

export const WallFiltersForm = ({ onChangeLocation }: WallFiltersFormProps) => {
  const { getState } = useContext(MarketplaceMapContext);
  const state = getState();

  return (
    <Box
      sx={{
        display: 'flex',
        gap: '1em',
        flexDirection: 'column',
        borderRadius: '0px 0px 12px 12px',
        padding: '20px',
        backgroundColor: '#FFFFFF',
        boxShadow: '0 0 8px rgba(0, 0, 0, .07)',
        width: '85%',
      }}
    >
      <LocationsTextField onChange={onChangeLocation} value={state} />
    </Box>
  );
};
