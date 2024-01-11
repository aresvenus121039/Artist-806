import React, { useState } from 'react';
import { Box, Fab, Typography } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CloseIcon from '@mui/icons-material/Close';
import SubmitProposalForm from './SubmitProposalForm';

const SubmitProposalPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box>
      <Box
        sx={{
          position: 'fixed',
          zIndex: 999,
          top: '90px',
          left: '25px',
          right: '25px',
          bottom: '100px',
          backgroundColor: '#1f2841',
          padding: '25px 20px',
          borderRadius: '24px',
          overflowY: 'scroll',
          visibility: isOpen ? 'visible' : 'hidden',
          opacity: isOpen ? '1' : '0',
          transition: 'all .3s ease',
        }}
      >
        <SubmitProposalForm styleWrap={{}} />
      </Box>

      <Fab
        sx={{
          background:
            'linear-gradient(79.45deg, #5700FF 6.96%, #64E1DC 108.67%) !important',
          color: '#FFFFFF',
          position: 'fixed',
          zIndex: 90,
          left: '70px',
          bottom: '15px',
          display: {
            xs: 'flex',
            md: 'none',
          },
          alignItems: 'center',
        }}
        variant="extended"
        onClick={() => setIsOpen(!isOpen)}
        size="medium"
      >
        {isOpen ? (
          <CloseIcon sx={{ mr: '8px' }} />
        ) : (
          <AssignmentIcon sx={{ mr: '8px' }} />
        )}

        <Typography
          sx={{
            fontFamily: 'var(--font-family-montserrat)',
            fontSize: '14px !important',
            fontWeight: '700 !important',
            fontStyle: 'normal',
            textTransform: 'capitalize',
          }}
        >
          {isOpen ? 'Hide' : 'Submit Proposal'}
        </Typography>
      </Fab>
    </Box>
  );
};

export default SubmitProposalPopup;
