import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { SmallWallCard } from './SmallWallCard';
import { LargeWallCard } from './LargeWallCard';
import Link from 'next/link';

interface WallCardProps {
  slug: string;

  // Add additional props if needed
}

const ProxyComponent: React.FC<WallCardProps> = (props) => {
  const theme = useTheme();
  const betweenSmAndXlScreen = useMediaQuery(theme.breakpoints.up('sm'));
  const onlySm = useMediaQuery(theme.breakpoints.only('sm'));
  const extraSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  if (extraSmallScreen) {
    return <SmallWallCard {...props} />;
  }

  if (onlySm) {
    return <SmallWallCard {...props} />;
  }

  if (betweenSmAndXlScreen) {
    return (
      <LargeWallCard
        wallImageSrc={''}
        status={''}
        budget={''}
        location={''}
        loading={false}
        state={''}
        area={''}
        dimension={''}
        {...props}
      />
    );
  }

  return null;
};

export const WallCard: React.FC<WallCardProps> = (props: any) => {
  const { slug } = props;

  return (
    <Link
      href={`/wall/${slug}`}
      style={{
        textDecoration: 'none',
      }}
    >
      <ProxyComponent {...props} />
    </Link>
  );
};
