import React from 'react';
import { Box, Typography, CardMedia, Link } from '@mui/material';
import styled, { css } from 'styled-components';
import { cloudflareImage } from '@/utility/images';

interface ArtistSummaryPopUpProps {
  imgURL: string;
  userName: string;
  city: string;
  state: string;
  approved: boolean;
}

export const ArtistSummaryPopUp: React.FC<ArtistSummaryPopUpProps> = ({
  imgURL,
  userName,
  city,
  state,
  approved,
}) => {
  return (
    <Box
      sx={{
        position: 'relative',
      }}
    >
      <Box
        sx={{
          backgroundColor: '#FFF',
          borderRadius: '6px',
          padding: '15px',
          display: 'flex',
          flexWrap: 'nowrap',
        }}
      >
        {/* image */}
        <Box
          sx={{
            flex: '0 1 auto',
            paddingRight: '8px',
          }}
        >
          <CardMedia
            component="img"
            src={cloudflareImage(imgURL)}
            sx={{
              width: '52px',
              height: '52px',
              borderRadius: '4px',
            }}
          />
        </Box>

        {/* content */}
        <Box
          sx={{
            flex: '1 1 auto',
          }}
        >
          {/* popover header */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'nowrap',
              alignItems: 'center',
            }}
          >
            {/* name */}
            <Link
              href={`/artist/${userName.replace(/\s+/g, '-').toLowerCase()}`}
              target="_blank"
              sx={{
                fontFamily: 'var(--font-family-montserrat)',
                fontSize: '16px',
                fontWeight: '600',
                color: '#06102B',
                lineHeight: '1.5',
                flex: '0 1 auto',
                textDecoration: 'none',
              }}
            >
              {userName}
            </Link>

            {/* verified */}
            <Box
              sx={{
                flex: '1 1 auto',
                paddingLeft: '4px',
              }}
            >
              {approved && (
                <CardMedia
                  component="img"
                  sx={{
                    width: '20px',
                    height: '20px',
                  }}
                  src={cloudflareImage(
                    `${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/walls/verified-icon.png`
                  )}
                />
              )}
            </Box>
          </Box>

          {/* city state */}
          <Box
            sx={{
              marginTop: '8px',
            }}
          >
            <Typography
              sx={{
                fontFamily: 'var(--font-family-montserrat)',
                fontSize: '12px',
                fontWeight: '500',
                color: '#9E9E9E',
                lineHeight: '1.2',
              }}
            >
              {city}, {state}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* triangle */}
      <CardMedia
        sx={{
          position: 'absolute',
          bottom: '-15px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '24px',
        }}
        component="img"
        src={cloudflareImage(
          `${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/walls/down-pointer.svg`
        )}
      />
    </Box>
  );
};

export default ArtistSummaryPopUp;
