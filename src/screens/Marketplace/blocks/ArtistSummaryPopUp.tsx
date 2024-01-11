import React from 'react';
import { Box, Typography, CardMedia, Link } from '@mui/material';
import { cloudflareImage } from '@/utility/images';
import CircularProgress from '@mui/material/CircularProgress';
import { getStateAbbr } from '@/utility/usaStateAbbr';
import { makeStyles } from '@mui/styles';
import OptimizedImage from '@/components/OptimizedImage';

interface ArtistSummaryPopUpProps {
  imgURL: string;
  userName: string | null | undefined;
  city: string;
  state: string;
  approved: boolean;
  loading: boolean;
}

const useStyles = makeStyles(() => ({
  image: {
    width: '52px',
    height: '52px',
    borderRadius: '4px',
  },
}));

const ArtistSummaryPopUp: React.FC<ArtistSummaryPopUpProps> = ({
  imgURL,
  userName,
  city,
  state,
  approved,
  loading,
}) => {
  const classes = useStyles();
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
        {loading ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: 100,
              height: 30,
            }}
          >
            <CircularProgress size={20} color="secondary" />
          </div>
        ) : (
          <>
            {/* image */}
            <Box
              sx={{
                flex: '0 1 auto',
                paddingRight: '8px',
              }}
            >
              <OptimizedImage
                src={
                  imgURL ||
                  'https://wxllspace-app.s3.us-east-2.amazonaws.com/assets/404/Astro.png'
                }
                className={classes.image}
                alt="artist"
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
                  href={`/artist/${userName
                    ?.replace(/\s+/g, '-')
                    .toLowerCase()}`}
                  target="_blank"
                  sx={{
                    fontFamily: 'var(--font-family-montserrat)',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#06102B',
                    lineHeight: '1.5',
                    flex: '0 1 auto',
                    textDecoration: 'none',
                    textTransform: 'capitalize',
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
                      src={`${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/walls/verified-icon.png`}
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
                  {city}, {getStateAbbr(state)}
                </Typography>
              </Box>
            </Box>
          </>
        )}
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
        src={`${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/walls/down-pointer.svg`}
      />
    </Box>
  );
};

export default ArtistSummaryPopUp;
