import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { styled as muiStyledSystem } from '@mui/system';

import { FiltersToolbarArrow } from '../../../components/icons';

import { ArtistFiltersForm } from './ArtistFiltersForm';
import { WallFiltersForm } from './WallFiltersForm';
import SearchTypeSwitch from '../blocks/SearchTypeSwitch';

const FiltersButton = muiStyledSystem('button')(`
  font-family: var(--font-family-montserrat);
  font-weight: 600px;
  font-size: var(--font-size-m);
  color: #06102b;
  display: flex;
  border: none;
  background-color: transparent;
  padding: 0;
`);

interface FilterToolbarSectionMobileProps {
  isFilterOpen?: boolean;
  onChangeListType: (type: 'artists' | 'walls') => void;
  viewMode: 'map' | 'list';
  onChangeViewMode: (mode: 'map' | 'list') => void;
  searchType: string;
  onChangeLocation: (value: string) => void;
}

export const FilterToolbarSectionMobile: React.FC<FilterToolbarSectionMobileProps> =
  (props) => {
    const {
      isFilterOpen,
      onChangeListType,
      viewMode,
      onChangeViewMode,
      searchType,
      onChangeLocation,
    } = props;
    const [toggleFilterPopup, setToggleFilterPopup] = useState(!!isFilterOpen);

    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            padding: '1.25rem',
            width: '100%',
            height: '88px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography
              sx={{
                fontFamily: 'var(--font-family-montserrat)',
                fontWeight: 600,
                fontSize: 'var(--font-size-m)',
                color: '#06102B',
                textDecoration: 'underline',
                textTransform: 'capitalize',
                cursor: 'pointer',
              }}
              onClick={() => onChangeViewMode(viewMode)}
            >
              {viewMode}
            </Typography>

            <SearchTypeSwitch
              onChange={(val) => {
                onChangeListType(val);
                setToggleFilterPopup(false);
              }}
              checked={searchType === 'walls'}
              searchType={searchType}
            />
            <FiltersButton
              onClick={() => {
                setToggleFilterPopup(!toggleFilterPopup);
              }}
            >
              <Box sx={{ display: 'flex' }}>
                <Typography
                  sx={{
                    fontFamily: 'var(--font-family-montserrat)',
                    fontWeight: 600,
                    fontSize: 'var(--font-size-m)',
                    color: '#06102B',
                    cursor: 'pointer',
                  }}
                >
                  Filters
                </Typography>
                <FiltersToolbarArrow
                  style={{ transform: toggleFilterPopup && 'rotate(180deg)' }}
                />
              </Box>
            </FiltersButton>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: '88px',
            zIndex: 1000,
            width: '100%',
          }}
        >
          {toggleFilterPopup && searchType === 'artists' && (
            <ArtistFiltersForm onChangeLocation={onChangeLocation} />
          )}
          {toggleFilterPopup && searchType === 'walls' && (
            <WallFiltersForm onChangeLocation={onChangeLocation} />
          )}
        </Box>
      </Box>
    );
  };
