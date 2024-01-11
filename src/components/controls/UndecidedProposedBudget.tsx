import React from 'react';
import { Box, Typography } from '@mui/material';

interface UndecidedProposedBudgetProps {
  styleWrap: React.CSSProperties;
  totalCost: number | string;
}

const UndecidedProposedBudget: React.FC<UndecidedProposedBudgetProps> = (
  props: UndecidedProposedBudgetProps
) => {
  const { styleWrap, totalCost } = props;
  return (
    <Box
      sx={{
        ...styleWrap,
        backgroundColor: '#27375d',
        padding: '21px 18px',
        borderRadius: '8px',
        border: '1px solid #547dfc',
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
          color: '#547dfc',
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
        {`Proposed budget is undecided`}
      </Typography>
    </Box>
  );
};

export default UndecidedProposedBudget;
