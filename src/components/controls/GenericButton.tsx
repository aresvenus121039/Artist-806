import React from 'react';
import { styled, Button } from '@mui/material';
import { width } from '@mui/system';

interface Props {
  title: string;
  onClick: () => void;
}

export const GenericButton: React.FC<Props> = ({ onClick, title }) => {
  return <MuiBtn onClick={onClick}>{title}</MuiBtn>;
};

const MuiBtn = styled(Button)(({ theme }) => ({
  boxShadow: 'none',
  textTransform: 'none',
  minWidth: '97px',
  width: '80%',
  height: '50px',
  color: theme.palette.common.white,
  fontSize: theme.typography.pxToRem(14),
  fontWeight: 700,
  fontStyle: 'normal',
  textAlign: 'center',
  padding: '12.9px 23.1px',
  border: 'none',
  borderRadius: '8px',
  lineHeight: '85px',
  background: 'linear-gradient(74.3deg, #5700ff 2.8%, #00c8c8 133.27%)',
  fontFamily: theme.typography.fontFamily,
  '&:hover': {
    background: 'linear-gradient(74.3deg, #5700ff 2.8%, #00c8c8 133.27%)',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    background: 'linear-gradient(74.3deg, #5700ff 2.8%, #00c8c8 133.27%)',
  },
  '&:focus': {
    boxShadow: `0 0 0 0.2rem ${theme.palette.primary.main}80`,
  },
}));
