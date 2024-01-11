import React, { useContext } from 'react';
import { Avatar, Box, Checkbox, FormControlLabel } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { MarketplaceMapContext } from '../../../contexts/MarketplaceMapContext';

import { ArtistAvailabilitySelector } from '../blocks/ArtistAvailabilitySelector';
import { cloudflareImage } from '@/utility/images';

const useFormLabelStyles = makeStyles({
  label: {
    fontFamily: 'var(--font-family-montserrat)',
    color: '#06102b',
    fontWeight: 600,
    fontSize: 'var(--font-size-m)',
  },
});

export const ArtistFilterSection = () => {
  const useFormLabelClasses = useFormLabelStyles();
  const {
    handleAvailabilityChangeFilter,
    handleVerificationStatusChangeFilter,
  } = useContext(MarketplaceMapContext);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '92px',
        columnGap: '1rem',
      }}
    >
      {/* availibility */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: '140px',
          width: '100%',
        }}
      >
        <ArtistAvailabilitySelector onChange={handleAvailabilityChangeFilter} />
      </Box>

      {/* verified */}
      <Box
        sx={{
          maxWidth: '240px !important',
          width: '100% !important',
        }}
      >
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
                onChange={(event) => {
                  const val = event.target.checked ? 1 : 0;
                  handleVerificationStatusChangeFilter(val);
                }}
                value="verified"
                inputProps={{
                  'aria-label': 'WXLLSPACE Verified',
                }}
                sx={{
                  boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.5) !important',
                  color: '#06102b',
                  '&.Mui-checked': {
                    color: '#06102b',
                  },
                  width: '20px !important',
                  height: '20px !important',
                  marginRight: '6px !important',
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
          sx={{
            lineHeight: '1.3',
            width: {
              xs: '100% !important',
              md: '220px !important',
            },
            color: '#06102B !important',
          }}
          label="WXLLSPACE Verified"
        />
      </Box>
    </Box>
  );
};
