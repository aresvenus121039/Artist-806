import React from 'react';
import { Box } from '@mui/material';

import { ArtistFilterSection } from './ArtistFilterSection';
import { WallFilterSection } from './WallFilterSection';
import LocationsTextField from '../blocks/LocationsTextField';
import SearchTypeSwitch from '../blocks/SearchTypeSwitch';
import { USAState } from '@/utility/usaStateAbbr';

interface FilterToolbarSectionProps {
  searchType: string;
  onChange: (type: 'artists' | 'walls') => void;
  onChangeLocation: (state: string) => void;
  state: any;
  stateOnSearch: string;
}

export const FilterToolbarSection: React.FC<FilterToolbarSectionProps> = (
  props
) => {
  const { searchType, onChange, onChangeLocation, state } = props;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: '1.75rem',
        paddingRight: '3rem',
      }}
    >
      {/* left */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Box
          sx={{
            marginRight: '1rem',
          }}
        >
          <SearchTypeSwitch
            onChange={onChange}
            checked={searchType === 'walls'}
            searchType={searchType}
          />
        </Box>

        <Box
          sx={{
            width: '100%',
            maxWidth: '220px',
            paddingRight: '12px',
          }}
        >
          <LocationsTextField onChange={onChangeLocation} value={state} />
        </Box>
      </Box>

      {/* right */}
      {/* {searchType === 'artists' && <ArtistFilterSection />} */}
      {searchType === 'walls' && <WallFilterSection />}
    </Box>
  );
};

export default FilterToolbarSection;
