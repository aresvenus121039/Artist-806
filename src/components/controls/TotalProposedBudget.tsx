import React from 'react';
import { Box, Typography } from '@mui/material';

interface TotalProposedBudgetProps {
  textTotalBudget: number | string;
  styleWrap: React.CSSProperties;
}

const TotalProposedBudget: React.FC<TotalProposedBudgetProps> = ({
  textTotalBudget,
  styleWrap,
}) => {
  return (
    <Box
      sx={{
        ...styleWrap,
        background: 'rgba(206, 206, 206, 0.1)',
        border: '1px solid #C8C8C8',
        padding: '21px 18px',
        borderRadius: '8px',
        maxWidth: '1000px',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Typography
        component="h5"
        sx={{
          color: '#CECECE',
          fontSize: {
            xs: '12px',
            sm: '14px',
          },
          fontWeight: '700',
          paddingRight: {
            xs: '12px',
            sm: '15px',
          },
          flex: '1 1 auto',
        }}
      >
        Proposed Budget:
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'nowrap',
          alignItems: 'end',
        }}
      >
        <Typography
          component="h4"
          sx={{
            color: '#CECECE',
            fontSize: {
              xs: '20px',
              sm: '24px',
            },
            fontWeight: '700',
          }}
        >
          {Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(Number(textTotalBudget))}
        </Typography>

        <Typography
          component="span"
          sx={{
            color: '#CECECE',
            fontSize: '14px',
            fontWeight: '700',
            paddingBottom: '4px',
            paddingLeft: '5px',
          }}
        >
          USD
        </Typography>
      </Box>
    </Box>
  );
};

export default TotalProposedBudget;
