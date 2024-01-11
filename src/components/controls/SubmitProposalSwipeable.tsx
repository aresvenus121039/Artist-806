import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';
import { cloudflareImage } from '@/utility/images';

interface SubmitProposalSwipeableProps {
  children: React.ReactNode;
}

const SubmitProposalSwipeable: React.FC<SubmitProposalSwipeableProps> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Box
        sx={{
          backgroundColor: '#1f2841',
          padding: '33px 24px',
          borderTopLeftRadius: '24px',
          borderTopRightRadius: '24px',
          position: 'fixed',
          zIndex: 999,
          bottom: 0,
          left: 0,
          right: 0,
          height: '100%',
          maxHeight: {
            xs: isOpen ? '80%' : '5%',
            sm: isOpen ? '80%' : '5%',
          },
          transition: '.6s ease-in-out',
        }}
      >
        <Grid container alignItems="center" justifyContent="space-around">
          {isOpen ? (
            <img
              src={cloudflareImage(
                `${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/walls/min.png`
              )}
              onClick={() => setIsOpen(!isOpen)}
              style={{ cursor: 'pointer', marginBottom: 32 }}
              alt="Minimize"
            />
          ) : null}
          <Box
            sx={{
              width: 82,
              height: 6,
              backgroundColor: '#06102B',
              borderRadius: 3,
              margin: '0 auto',
              marginBottom: '32px',
              cursor: !isOpen ? 'pointer' : 'normal',
            }}
            onClick={() => setIsOpen(true)}
          />
          {isOpen ? (
            <img
              src={cloudflareImage(
                `${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/walls/plus.png`
              )}
              onClick={() => setIsOpen(!isOpen)}
              style={{ cursor: 'pointer', marginBottom: 32 }}
              alt="Expand"
            />
          ) : null}
        </Grid>

        <Box
          sx={{
            overflowY: 'auto',
            height: '100%',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            '-ms-overflow-style': 'none',
            scrollbarWidth: 'none',
          }}
        >
          {children}
        </Box>
      </Box>
    </>
  );
};

export default SubmitProposalSwipeable;
