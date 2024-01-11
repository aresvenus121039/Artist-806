import React from 'react';
import { Box } from '@mui/material';
import NewNavBar from './NewNavBar';

interface HeaderProps {
  hideNewNavBar?: boolean;
  isMarketplaceScreen?: boolean;
}

const Header: React.FC<HeaderProps> = (props) => {
  if (props.hideNewNavBar) {
    return null;
  }
  return (
    <Box {...props}>
      <NewNavBar />
    </Box>
  );
};

export default Header;
