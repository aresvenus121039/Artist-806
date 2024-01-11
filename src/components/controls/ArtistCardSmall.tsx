import * as React from 'react';
import {
  Box,
  CardMedia,
  Typography,
  Card,
  CardActionArea,
  CardContent,
} from '@mui/material';
import styled, { css } from 'styled-components';
import { paramCase } from 'change-case';
import { cloudflareImage } from '@/utility/images';

interface ArtistCardSmallProps {
  profileImage: string;
  name: string;
  location?: string;
  status?: 'available' | 'busy';
  rate?: number;
}

const ArtistCardSmall: React.FC<ArtistCardSmallProps> = ({
  profileImage,
  name,
  location,
  status,
  rate,
}) => {
  return (
    <Card
      sx={{
        minHeight: '125px !important',
        width: {
          xs: '95%',
          sm: '100%',
          md: '100%',
          lg: '100%',
          xl: '100%',
        },
        backgroundColor: 'var(--white) !important',
        borderRadius: '16px !important',
        border: '1px solid #e2e8f0 !important',
      }}
    >
      <CardActionArea
        sx={{
          padding: '15.6px 16px !important',
          display: 'flex !important',
          alignItems: 'center !important',
        }}
      >
        <CardMedia
          src={cloudflareImage(profileImage)}
          sx={{
            width: '100px !important',
            height: '92px !important',
            objectFit: 'cover !important',
            borderRadius: '12px !important',
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
              component={'a'}
              href={`/artist/${paramCase(name.toLowerCase())}`}
              target="_blank"
              sx={{
                fontFamily: 'var(--font-family-montserrat)',
                fontWeight: '600',
                color: 'var(--black-pearl)',
                fontSize: 'var(--font-size-l2)',
                letterSpacing: 0,
                lineHeight: '1.3',
                textDecoration: 'none',
              }}
            >
              {name}
            </Typography>
            {/* TODO: Define VerifiedIcon component */}
            {/* {verified && (
              <VerifiedIcon
                src={`${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/walls/verified-icon.png`}
              />
            )} */}
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
            {location && (
              <Typography
                sx={{
                  fontFamily: 'var(--font-family-montserrat)',
                  fontWeight: '500',
                  color: '#9e9e9e',
                  fontSize: '12px',
                  letterSpacing: 0,
                  lineHeight: 1.3,
                  whiteSpace: 'nowrap',
                  textTransform: 'uppercase',
                  flex: '0 1 auto',
                }}
              >
                {location}
              </Typography>
            )}

            {/* TODO: Define Line component */}
            {/* <Line /> */}

            {/* status */}
            {status && (
              <Box
                sx={{
                  display: 'flex',
                  flex: '0 1 auto',
                  flexFlow: 'row nowrap',
                  alignItems: 'center',
                  paddingLeft: '8px',
                }}
              >
                {/* TODO: Define StatusIcon component */}
                {/* <StatusIcon
                  src={cloudflareImage(
                    `${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/walls/available-icon.svg`
                  )}
                /> */}
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
              </Box>
            )}
          </Box>

          {rate && (
            <RateContainer>
              <Rate>{`$${rate} per SQFT`}</Rate>
            </RateContainer>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const ValignTextMiddle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

// const VerifiedIcon = styled.img`
//   width: 21px;
//   height: 21px;
//   margin-left: 8px;
//   margin-top: -0.5px;
// `;

// const Location = styled.div`
//   ${ValignTextMiddle}
//   font-family: var(--font-family-montserrat);
//   font-weight: 500;
//   color: #9e9e9e;
//   font-size: 12px;
//   letter-spacing: 0;
//   line-height: 1.8;
//   white-space: nowrap;
//   text-transform: uppercase;
//   flex: 0 1 auto;
// `;

// const Line = styled.div`
//   width: 2px;
//   height: 13px;
//   margin-left: 9px;
//   background-color: rgba(204, 204, 204, 1);
// `;

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
