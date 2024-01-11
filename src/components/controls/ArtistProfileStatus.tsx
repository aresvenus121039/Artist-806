import React from 'react';
import styled from 'styled-components';
import { get } from 'lodash';
import { makeStyles } from '@mui/styles';
import { useSelector } from 'react-redux';
import { EditArtistPageButton } from './EditArtistPageButton';
import { ArtistRateLabel } from './ArtistRateLabel';
import { selectSignedInUser } from '@/store/reducers/userReducers';
import { Box } from '@mui/material';
import { cloudflareImage } from '@/utility/images';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

const useStyles = makeStyles((theme: any) => ({
  name: {
    [theme.breakpoints.only('xs')]: {
      height: '25px',
      opacity: 0.7,
      letterSpacing: '0',
      lineHeight: '1.75',
      whiteSpace: 'nowrap',
      color: 'var(--white-2)',
      fontFamily: 'var(--font-family-montserrat)',
      fontSize: 'var(--font-size-m2)',
      fontWeight: 700,
      fontStyle: 'normal',
      display: 'none',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    [theme.breakpoints.only('sm')]: {
      height: '25px',
      opacity: 0.7,
      letterSpacing: '0',
      lineHeight: '1.75',
      whiteSpace: 'nowrap',
      color: 'var(--white-2)',
      fontFamily: 'var(--font-family-montserrat)',
      fontSize: 'var(--font-size-m2)',
      fontWeight: 700,
      fontStyle: 'normal',
      display: 'none',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    [theme.breakpoints.only('md')]: {
      height: '25px',
      opacity: 0.7,
      letterSpacing: '0',
      lineHeight: '1.75',
      whiteSpace: 'nowrap',
      color: 'var(--white-2)',
      fontFamily: 'var(--font-family-montserrat)',
      fontSize: 'var(--font-size-m2)',
      fontWeight: 700,
      fontStyle: 'normal',
      display: 'none',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    [theme.breakpoints.only('lg')]: {
      opacity: 0.7,
      fontFamily: 'var(--font-family-montserrat)',
      fontWeight: 700,
      color: '#ffffff33',
      fontSize: 'var(--font-size-l)',
      letterSpacing: '0',
      whiteSpace: 'nowrap',
      display: 'none',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    [theme.breakpoints.only('xl')]: {
      opacity: 0.7,
      fontFamily: 'var(--font-family-montserrat)',
      fontWeight: 700,
      color: '#ffffff33',
      fontSize: 'var(--font-size-l)',
      letterSpacing: '0',
      whiteSpace: 'nowrap',
      display: 'none',
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
}));

interface ArtistProfileStatusProps {
  artist: {
    _id: string;
    name: string;
    logo: {
      fieldname: string;
      location: string;
    }[];
    is_ready: boolean;
    price_per_square_foot: number;
  };
}

const Line = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  border-right: 1px solid rgba(255, 255, 255, 0.32);
`;

const Group3294 = styled.div`
  display: flex;
  margin-top: 17px;
  flex-wrap: wrap;
  align-items: center;
`;

export const ArtistProfileStatus: React.FC<ArtistProfileStatusProps> = (
  props
) => {
  const signedInUser = useSelector(selectSignedInUser);
  const { artist } = props;
  const classes = useStyles();

  const canUserEditDetails = (
    artist: ArtistProfileStatusProps['artist'],
    signedInUser: any
  ) => {
    if (!signedInUser || !artist || !artist._id) {
      return false;
    }
    return artist._id === get(signedInUser, 'id', undefined) || undefined;
  };

  const artistLogoCollection = get(artist, 'logo', []) || [];
  const [artistLogo] = artistLogoCollection.filter(
    (image) => image.fieldname && image.location
  );

  const artistLogoLocation = get(artistLogo, 'location', '') || '';
  const router = useRouter();
  const { slug } = router.query as { slug: string };

  return (
    <Box>
      <Box
        className={classes.name}
        sx={{
          mt: {
            xs: '15px',
            sm: 0,
          },
        }}
      >
        {artist.name}
      </Box>
      <Group3294>
        {artistLogoLocation && (
          <>
            <Image
              src={cloudflareImage(artistLogoLocation)}
              style={{
                marginRight: '15px',
                maxWidth: '145px',
                width: 'auto',
                objectFit: 'contain',
              }}
              width={145}
              height={41}
              quality={100}
              priority
              alt="artist logo"
            />
          </>
        )}
        <Box
          sx={{
            display: 'none',
            flexFlow: 'row nowrap',
            alignItems: 'center',
          }}
        >
          {/* <ArtistStatusButton is_ready={artist.is_ready} /> */}
          <Line />
          <ArtistRateLabel rate={artist.price_per_square_foot} />
        </Box>
        {canUserEditDetails(artist, signedInUser) && (
          <>
            {artistLogoLocation && <Line />}
            <Link
              href={`/artist/${slug}/edit`}
              style={{
                paddingLeft: artistLogoLocation ? '12px' : '0',
                textDecoration: 'none',
              }}
            >
              <EditArtistPageButton />
            </Link>
          </>
        )}
      </Group3294>
    </Box>
  );
};
