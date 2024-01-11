import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Box, Checkbox, FormControlLabel } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { makeStyles } from '@mui/styles';

import { selectArtistFilters } from '@/store/reducers/marketplaceReducer';
import { MarketplaceMapContext } from '../../../contexts/MarketplaceMapContext';

import LocationsTextField from '../blocks/LocationsTextField';
import { ArtistAvailabilitySelector } from '../blocks/ArtistAvailabilitySelector';
import { cloudflareImage } from '@/utility/images';

const useFormLabelStyles = makeStyles({
  label: {
    fontFamily: 'var(--font-family-montserrat)',
    color: '#06102b',
    fontWeight: 600,
    fontSize: 'var(--font-size-m)',
    marginLeft: 0,
  },
});

interface ArtistFilterSectionProps {
  onChangeLocation: (value: string) => void;
}

export const ArtistFiltersForm: React.FC<ArtistFilterSectionProps> = (
  props
) => {
  const {
    getState,
    handleAvailabilityChangeFilter,
    handleVerificationStatusChangeFilter,
  } = useContext(MarketplaceMapContext);
  const state = getState();
  const { onChangeLocation } = props;
  const useFormLabelClasses = useFormLabelStyles();
  const artistFilter = useSelector(selectArtistFilters);

  return (
    <Box
      sx={{
        display: 'flex',
        gap: '1em',
        flexDirection: 'column',
        padding: '1.25rem',
        backgroundColor: 'white',
        borderRadius: '0px 0px 12px 12px',
        width: '85%',
      }}
    >
      <LocationsTextField onChange={onChangeLocation} value={state} />

      {/* <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <ArtistAvailabilitySelector onChange={handleAvailabilityChangeFilter} />
      </Box> */}

      {/* verified */}
      {/* <Box>
        <FormControlLabel
          disableTypography
          className={useFormLabelClasses.label}
          control={
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Checkbox
                checked={artistFilter.is_verified === 1}
                onChange={(e) => {
                  const { checked } = e.target;
                  handleVerificationStatusChangeFilter(checked ? 1 : 0);
                }}
                inputProps={{
                  'aria-label': 'WXLLSPACE Verified',
                }}
                sx={{
                  boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.5)',
                  width: '20px',
                  height: '20px',
                  padding: 0,
                  marginRight: '9px !important',
                  color: '#06102b',
                  '&.Mui-checked': {
                    color: '#06102b',
                  },
                }}
              />

              <Box
                sx={{
                  marginRight: '0.5rem',
                }}
              >
                <Avatar
                  variant="square"
                  sx={{ width: '20px', height: '20px' }}
                  src={cloudflareImage(
                    `${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/walls/verified-icon.png`
                  )}
                />
              </Box>
            </Box>
          }
          label="WXLLSPACE Verified"
        />
      </Box> */}
    </Box>
  );
};
