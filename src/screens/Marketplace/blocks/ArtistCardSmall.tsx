import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  CardMedia,
  Typography,
  Card,
  CardActionArea,
  CardContent,
} from '@mui/material';
import styled, { css } from 'styled-components';
import Skeleton from '@mui/material/Skeleton';
import { cloudflareImage } from '@/utility/images';
import Link from 'next/link';

interface ArtistCardSmallProps {
  profileImage: string;
  location: string;
  rate: number;
  styleWrap?: React.CSSProperties;
  verified: boolean;
  slug: string;
  artist_name: string;
  loading?: boolean;
  name?: string;
  status?: string;
}

export const ArtistCardSmall: React.FC<ArtistCardSmallProps> = (props) => {
  const {
    profileImage,
    location,
    // status,
    rate,
    styleWrap,
    verified,
    slug,
    artist_name,
    loading = false,
  } = props;
  return (
    <Link
      href={`/artist/${slug}`}
      style={{ textDecoration: 'none' }}
      target="_blank"
    >
      <Card
        sx={{
          minHeight: '125px',
          width: 'auto',
          maxWidth: '350px',
          backgroundColor: 'var(--white)',
          borderRadius: '16px',
          border: '1px solid #e2e8f0',
          marginBottom: '15px',
          ...styleWrap,
        }}
      >
        {loading ? (
          <div
            style={{
              display: 'flex',
              width: '100%',
              gap: '10px',
              padding: '15.6px 16px',
            }}
          >
            <Skeleton
              sx={{ bgcolor: 'grey.900' }}
              variant="rectangular"
              width="100px"
              height="92px"
            />
            <div style={{ width: 'calc(100% - 110px)' }}>
              <Skeleton
                sx={{ bgcolor: 'grey.900' }}
                variant="text"
                width={'100%'}
              />
              <Skeleton
                sx={{ bgcolor: 'grey.900' }}
                variant="text"
                width={'100%'}
              />
            </div>
          </div>
        ) : (
          <CardActionArea
            sx={{
              padding: '15.6px 16px',
              display: 'flex',
              alignItems: 'center',
              width: 'auto',
            }}
          >
            <CardMedia
              image={cloudflareImage(
                profileImage ||
                  'https://wxllspace-app.s3.us-east-2.amazonaws.com/assets/404/Astro.png'
              )}
              sx={{
                width: '100px',
                height: '92px',
                objectFit: 'cover',
                borderRadius: '12px',
              }}
            />

            <CardContent
              sx={{
                alignSelf: 'center',
                marginLeft: '0',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                minHeight: '0',
              }}
            >
              {/* name container */}
              <Box
                sx={{
                  display: 'flex',
                  flexFlow: 'row nowrap',
                  position: 'relative',
                  zIndex: 3,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 'var(--font-family-montserrat)',
                    fontWeight: '600',
                    color: 'var(--black-pearl)',
                    fontSize: '16px',
                    letterSpacing: 0,
                    lineHeight: '1.3',
                    textDecoration: 'none',
                    textTransform: 'capitalize',
                  }}
                >
                  {artist_name}
                </Typography>
                {verified && (
                  <VerifiedIcon
                    src={cloudflareImage(
                      `${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/walls/verified-icon.png`
                    )}
                  />
                )}
              </Box>

              {/* other detail container */}
              <Box
                sx={{
                  display: 'flex',
                  flexFlow: 'row wrap',
                  alignItems: 'center',
                  marginTop: '4px',
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 'var(--font-family-montserrat)',
                    fontWeight: '500',
                    color: '#9e9e9e',
                    fontSize: '10px',
                    letterSpacing: 0,
                    lineHeight: 1.3,
                    whiteSpace: 'nowrap',
                    textTransform: 'uppercase',
                    flex: '0 1 auto',
                  }}
                >
                  {location}
                </Typography>

                {/* <Line /> */}

                {/* status */}
                {/* <Box
                  sx={{
                    display: 'none',
                    flex: '0 1 auto',
                    flexFlow: 'row nowrap',
                    alignItems: 'center',
                    paddingLeft: '8px',
                  }}
                >
                  <Box
                    sx={{
                      flex: '0 1 auto',
                      paddingRight: '6px',
                      display: 'none',
                    }}
                  >
                    <CardMedia
                      component="img"
                      src={`${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/walls/available-icon.svg`}
                      sx={{
                        width: '8px',
                        height: '8px',
                      }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: 'var(--font-family-montserrat)',
                      fontWeight: 500,
                      color: '#848484',
                      fontSize: 'var(--font-size-s2)',
                      letterSpacing: 0,
                      lineHeight: '1',
                      whiteSpace: 'nowrap',
                      textTransform: 'capitalize',
                      flex: '0 1 auto',
                    }}
                  >
                    {status}
                  </Typography>
                </Box> */}
              </Box>

              {rate && (
                <RateContainer>
                  <Rate>{`$${rate} per SQFT`}</Rate>
                </RateContainer>
              )}
            </CardContent>
          </CardActionArea>
        )}
      </Card>
    </Link>
  );
};

const ValignTextMiddle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const VerifiedIcon = styled.img`
  width: 21px;
  height: 21px;
  margin-left: 8px;
  margin-top: -0.5px;
`;

const RateContainer = styled.div`
  height: 33px;
  margin-top: 12px;
  display: flex;
  padding: 0 8px;
  align-items: center;
  min-width: 104px;
  background-color: #2196530f;
  border-radius: 8px;
  backdrop-filter: blur(60px) brightness(100%);
  -webkit-backdrop-filter: blur(60px) brightness(100%);
`;

const Rate = styled.div`
  ${ValignTextMiddle}
  width: 88px;
  height: 17px;
  font-family: var(--font-family-montserrat);
  font-weight: 500;
  color: #219653;
  font-size: var(--font-size-s2);
  text-align: center;
  letter-spacing: 0;
  line-height: 90px;
  white-space: nowrap;
`;

export default ArtistCardSmall;
