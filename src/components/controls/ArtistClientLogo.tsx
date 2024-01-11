import * as React from 'react';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/material';
import { cloudflareImage } from '@/utility/images';
import OptimizedImage from '../OptimizedImage';

interface Client {
  id: string;
  url: string;
  height: number;
}

interface ArtistClientLogoProps {
  clients: Client[];
}

const Logo: React.FC<Client> = ({ url, height }) => {
  const useStyles = makeStyles((theme: any) => ({
    logo: {
      [theme.breakpoints.only('xs')]: {
        height: `${(50 / 100) * height}px`,
      },
      [theme.breakpoints.only('sm')]: {
        height: `${height}px`,
      },
      [theme.breakpoints.only('md')]: {
        height: `${height}px`,
      },
      [theme.breakpoints.only('lg')]: {
        height: `${height}px`,
      },
      [theme.breakpoints.only('xl')]: {
        height: `${height}px`,
      },
    },
  }));

  const classes = useStyles();

  return (
    <Box sx={{ position: 'relative' }}>
      <OptimizedImage alt="client" fill className={classes.logo} src={url} />
    </Box>
  );
};

const ArtistClientLogo: React.FC<ArtistClientLogoProps> = ({ clients }) => {
  return (
    <Box
      sx={{ display: 'flex', gap: 5, flexWrap: 'wrap', alignItems: 'center' }}
    >
      {clients.map((item) => (
        <Logo key={item.id} {...item} />
      ))}
    </Box>
  );
};

export default ArtistClientLogo;
