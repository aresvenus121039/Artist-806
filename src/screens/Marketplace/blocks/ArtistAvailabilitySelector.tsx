import React, { useState, FC, ChangeEvent } from 'react';
import {
  Box,
  Select,
  FormControl,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styled, { css } from 'styled-components';
import { useSelector } from 'react-redux';

import { selectArtistFilters } from '@/store/reducers/marketplaceReducer';

interface StatusTextProps {
  available?: boolean;
  sx?: React.CSSProperties;
  children: React.ReactNode;
}

interface StatusProps {
  available?: boolean;
  children: React.ReactNode;
}

interface MinimalSelectProps {
  onChange: (value: number) => void;
}

export const ValignTextMiddle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MontserratBoldWhite12px = css`
  color: var(--white);
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-s2);
  font-weight: 700;
  font-style: normal;
`;

const Ellipse111 = styled.div`
  height: 12px;
  display: flex;
  min-width: 12px;
`;

const Ellipse112 = styled.img`
  width: 12px;
  height: 13px;
  margin-top: -0.5px;
  border-radius: 100%;
`;

const StatusText: FC<StatusTextProps> = ({ available, sx, children }) => {
  const styles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    fontFamily: 'var(--font-family-montserrat)',
    fontSize: 'var(--font-size-s2)',
    fontWeight: 700,
    fontStyle: 'normal',
    color: available ? 'rgba(73, 210, 78, 1)' : 'rgba(245, 101, 101, 1)',
    textTransform: 'capitalize',
    width: '59px',
    height: '17px',
    marginLeft: '10px',
    letterSpacing: 0,
    lineHeight: '90px',
    whiteSpace: 'nowrap',
    ...sx,
  };
  return <Box sx={styles}>{children}</Box>;
};

const Status: FC<StatusProps> = ({ available, children }) => {
  const iconSrc = available
    ? `${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/available-icon.svg`
    : `${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/busy-icon.svg`;

  return (
    <Box
      sx={{
        height: '41px',
        display: 'flex',
        padding: '0 12px',
        justifyContent: 'center',
        alignItems: 'center',
        width: '94.64px',
        backgroundColor: available
          ? 'rgba(73, 210, 78, 0.15)'
          : 'rgba(245, 101, 101, 0.15)',
        borderRadius: '100px',
        backdropFilter: 'blur(60px) brightness(100%)',
        webkitBackdropFilter: 'blur(60px) brightness(100%)',
        boxShadow: 'inset 0px 0px 6px rgba(0, 0, 0, 0.5)',
        border: 'none',
      }}
    >
      <Ellipse111>
        <Ellipse112 src={iconSrc} />
      </Ellipse111>

      <StatusText available={available}>{children}</StatusText>
    </Box>
  );
};

const MinimalSelect: FC<MinimalSelectProps> = ({ onChange }) => {
  const artistFilter = useSelector(selectArtistFilters);
  const [val, setVal] = useState(artistFilter.is_ready);

  const handleChange = (event: SelectChangeEvent<{ value: unknown }>) => {
    const value = Number(event.target.value);
    setVal(value);
    onChange(value);
  };

  const iconComponent = (props: { className: string }) => {
    return <ExpandMoreIcon className={props.className} />;
  };

  return (
    <FormControl>
      <Select
        sx={{
          minWidth: '122px',
          height: 42,
          '& .MuiOutlinedInput-notchedOutline': {
            border: 'none !important',
          },
          '& .MuiSelect-select': {
            background: 'transparent',
            borderStyle: 'none',
            paddingTop: 14,
            paddingBottom: 15,
            overflow: 'unset !important',
            '&:focus': {
              background: 'transparent',
            },
          },
          '& .MuiPaper-root': {
            borderRadius: '8px',
            marginTop: 8,
          },
          '& .MuiList-root': {
            padding: 0,
            background: 'white',
            '& li': {
              fontWeight: 200,
              paddingTop: 12,
              paddingBottom: 12,
            },
          },
        }}
        disableUnderline
        displayEmpty
        IconComponent={iconComponent}
        onChange={handleChange}
        value={val || 1}
      >
        <MenuItem value={1}>
          <Status available>available</Status>
        </MenuItem>
        <MenuItem value={2}>
          <Status>busy</Status>
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export const ArtistAvailabilitySelector: FC<MinimalSelectProps> = (props) => (
  <MinimalSelect {...props} />
);
