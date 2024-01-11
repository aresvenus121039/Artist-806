import React from 'react';
import { Box, Typography } from '@mui/material';
import styled from 'styled-components';
import { makeStyles } from '@mui/styles';
import { MontserratBoldWhite16px, ValignTextMiddle } from './ArtistCard';
import { cloudflareImage } from '@/utility/images';

const useStyles = makeStyles((theme: any) => ({
  artist_name: {
    [theme.breakpoints.down('md')]: {
      fontFamily: 'var(--font-family-montserrat)',
      fontStyle: 'normal',
      fontWeight: 900,
      fontSize: 'var(--font-size-l)',
      color: 'var(--white)',
      letterSpacing: 0,
      whiteSpace: 'wrap',
      wordBreak: 'break-word',
    },
    [theme.breakpoints.up('md')]: {
      fontFamily: 'var(--font-family-montserrat)',
      fontStyle: 'normal',
      fontWeight: 900,
      fontSize: '25px',
      color: 'var(--white)',
      letterSpacing: 0,
      whiteSpace: 'wrap',
      wordBreak: 'break-word',
    },
  },
  artistLocation: {
    [theme.breakpoints.down('md')]: {
      fontFamily: 'var(--font-family-montserrat)',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: 'var(--font-size-xs)',
      color: 'var(--white-42)',
      letterSpacing: 0,
      whiteSpace: 'normal',
      textTransform: 'uppercase',
    },
    [theme.breakpoints.up('md')]: {
      fontFamily: 'var(--font-family-montserrat)',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: 'var(--font-size-l)',
      color: 'var(--white-42)',
      letterSpacing: 0,
      whiteSpace: 'normal',
      textTransform: 'uppercase',
    },
  },
  artistLazyImageWrapper: {
    width: '100%',
    height: '100%',
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: '50% 50%',
    },
  },
}));

const PortfolioCard = (props: {
  portfolioImage: string;
  title: string;
  address: string;
  styleWrap?: React.CSSProperties;
}) => {
  const { portfolioImage, title, address, styleWrap } = props;
  const classes = useStyles();
  return (
    <CardWrap>
      <Box
        sx={{
          position: 'relative',
          height: '274px',
          ...styleWrap,
        }}
      >
        <Box className={classes.artistLazyImageWrapper}>
          <PortfImage src={cloudflareImage(portfolioImage)} />
        </Box>
        {(title || address) && (
          <Group3316>
            {title && (
              <Typography className={classes.artist_name}>{title}</Typography>
            )}
            {address && (
              <Location>
                <Typography className={classes.artistLocation}>
                  {address}
                </Typography>
              </Location>
            )}
          </Group3316>
        )}
      </Box>
    </CardWrap>
  );
};

export default PortfolioCard;

export const PortfImage = styled.img`
  object-fit: cover;
  object-position: 50% 50%;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Group3316 = styled.div`
  opacity: 0;
  position: absolute;
  bottom: 20px;
  right: 20px;
  left: 20px;
  padding: 15.5px 20px;
  background-color: #00000069;
  backdrop-filter: blur(40px) brightness(100%);
  -webkit-backdrop-filter: blur(40px) brightness(100%);
  text-align: left;
  border-radius: 10px;
  transition: opacity 0.5s;
`;

const CardWrap = styled.div`
  position: relative;
  &:hover ${Group3316} {
    opacity: 1;
  }
`;

const Location = styled.div`
  ${ValignTextMiddle}
  ${MontserratBoldWhite16px}
  letter-spacing: 0;
  line-height: 90px;
  white-space: normal;
`;
