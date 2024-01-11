import React from 'react';
import styled, { css } from 'styled-components';
import { Autocomplete, Box, InputBase } from '@mui/material';

import WxSwitch from '../blocks/WxSwitch';
import { SearchButton } from '../blocks/SearchButton';

export const SmallSearchForm = (props) => {
  const { onSubmitSearchFormChange, states, onChangeSearchType } = props;

  return (
    <Container>
      <SearchWXLLSPACE>Search WXLLSPACE</SearchWXLLSPACE>

      <SearchBySwitch onClick={onChangeSearchType}>
        <WxSwitch />
      </SearchBySwitch>

      <OverlapGroup1>
        <SearchByLocation>
          {/* <SearchFormTextField placeholder={`Search by ${switchValue}`} /> */}
          <Autocomplete
            disablePortal
            isOptionEqualToValue={(option, value) =>
              option.label === value.label
            }
            options={states}
            onInputChange={(event, newInputValue) => {
              onSubmitSearchFormChange(newInputValue);
            }}
            renderOption={(props, option) => {
              const { label } = option;
              return (
                <span
                  {...props}
                  style={{ color: '#06102b', backgroundColor: '#fff' }}
                >
                  {label}
                </span>
              );
            }}
            renderInput={(params) => {
              return (
                <InputBase
                  {...params}
                  sx={{
                    fontFamily: 'var(--font-family-montserrat) !important',
                    fontWeight: '600 !important',
                    lineHeight: '1.4375em',
                    background: 'transparent',
                    position: 'relative',
                    padding: '6px 35px 3px 8px',
                    width: '100%',
                    fontSize: '14px !important',
                  }}
                  placeholder="Search by city"
                  inputProps={params.inputProps}
                  ref={params.InputProps.ref}
                  value={props.city}
                  label="Search by city"
                />
              );
            }}
          />
        </SearchByLocation>

        <SearchInputBorder></SearchInputBorder>

        <Box
          sx={{
            position: 'absolute',
            display: 'flex',
            alignItems: 'flex-start',
            height: '48px',
            top: {
              xs: '12px',
              sm: '15px',
              md: '8px',
              lg: '8px',
              xl: '8px',
            },
            left: {
              xs: '187px',
              sm: '540px',
              md: '519px',
              lg: '519px',
              xl: '519px',
            },
          }}
        >
          <SearchButton onClick={props.onSubmitSearchForm} />
        </Box>
      </OverlapGroup1>
    </Container>
  );
};

export const ValignTextMiddle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MontserratSemiBoldWhite12px = css`
  color: var(--white);
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-s2);
  font-weight: 600;
  font-style: normal;
`;

const Container = styled.div`
  width: 327px;
  display: flex;
  flex-direction: column;
  padding: 12px 0;
  align-items: center;
  min-height: 185px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(60px);
`;

const SearchWXLLSPACE = styled.div`
  ${ValignTextMiddle}
  width: 158px;
  height: 20px;
  margin-right: 0;
  font-family: var(--font-family-montserrat);
  font-weight: 700;
  color: var(--white);
  font-size: var(--font-size-m2);
  text-align: center;
  letter-spacing: 0;
  line-height: 30.8px;
  white-space: nowrap;
  text-transform: capitalize;
`;

const SearchBySwitch = styled.div`
  margin-top: 20px;
`;

const OverlapGroup1 = styled.div`
  width: 303px;
  height: 60px;
  position: relative;
  margin-top: 20px;
  border-radius: 1000px;
`;

const SearchByLocation = styled.div`
  ${ValignTextMiddle}
  position: absolute;
  width: 146px;
  height: 17px;
  top: 22px;
  left: 16px;
  font-family: var(--font-family-montserrat);
  font-weight: 600;
  color: var(--white-42);
  font-size: var(--font-size-s2);
  letter-spacing: 0;
  line-height: 28.8px;
  white-space: nowrap;
`;

const SearchInputBorder = styled.div`
  position: absolute;
  width: 303px;
  height: 60px;
  top: 0;
  left: 0;
  border-radius: 1000px;
  border: 1px solid rgba(255, 255, 255, 0.17);
  z-index: -1;
`;
