import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import styled, { css } from 'styled-components';
import _ from 'lodash';
import { Box } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import InputBase from '@mui/material/InputBase';
import { useRouter } from 'next/router';

import { getRegisteredStates } from '@/store/actions/marketplaceActions';
import { selectStatesFilters } from '@/store/reducers/marketplaceReducer';

import { getState } from '@/utility/usaStateAbbr';
import { SmallSearchForm } from './SmallSearchForm';
import WxSwitch from '../blocks/WxSwitch';
import { SearchButton } from '../blocks/SearchButton';

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

export const MontserratSemiBoldWhite16px = css`
  color: var(--white);
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-l);
  font-weight: 600;
  font-style: normal;
`;

export const MontserratSemiBoldWhite14px = css`
  color: var(--white);
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-m);
  font-weight: 600;
  font-style: normal;
`;

const Container = styled.div`
  width: 699px;
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  align-items: center;
  min-height: 163px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.1);
  -webkit-backdrop-filter: blur(60px);
  backdrop-filter: blur(60px);
  filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25));
`;

const SearchWXLLSPACE = styled.div`
  ${ValignTextMiddle}
  ${MontserratSemiBoldWhite16px}
  width: 174px;
  height: 24px;
  margin-top: 6px;
  margin-left: 0;
  letter-spacing: 0;
  line-height: 75px;
  white-space: nowrap;
`;

const OverlapGroup1 = styled.div`
  width: 659px;
  height: 64px;
  position: relative;
  margin-top: 29px;
  border-radius: 1000px;
`;

const SearchByLocation = styled.div`
  ${ValignTextMiddle}
  position: absolute;
  width: 146px;
  height: 17px;
  top: 24px;
  left: 246px;
  font-family: var(--font-family-montserrat);
  font-weight: 500;
  color: var(--white-42);
  font-size: var(--font-size-m);
  letter-spacing: 0;
  line-height: 75px;
  white-space: nowrap;
`;

const SearchInputBorder = styled.div`
  position: absolute;
  width: 659px;
  height: 64px;
  top: 0;
  left: 0;
  border-radius: 1000px;
  border: 1px solid rgba(255, 255, 255, 0.17);
  z-index: -1;
`;

const SearchBySwitch = styled.div`
  ${MontserratSemiBoldWhite12px}
  position: absolute;
  height: 41px;
  top: 7px;
  left: 11px;
  display: flex;
  padding: 3.6px 3.6px;
  align-items: flex-start;
  min-width: 212px;
  border-radius: 100px;
`;

const ProxyComponent = () => {
  const history = useRouter();
  const theme = useTheme();
  const dispatch = useDispatch();
  const largerThanSm = useMediaQuery(theme.breakpoints.up('sm'));
  const smallerThanSm = useMediaQuery(theme.breakpoints.down('sm'));
  const [searchType, setSearchType] = React.useState('walls');
  const [selectedState, setSelectedState] = React.useState('');

  const registeredStates = useSelector(selectStatesFilters);

  let states = registeredStates.map((state) => ({
    label: getState(state),
  }));

  states = _.uniqBy(states, 'label');

  const handleSearchFormChange = (value) => {
    setSelectedState(value);
  };

  const handleSearchButtonClick = () => {
    history.push(
      `/marketplace?state=${selectedState}&search-type=${searchType}`
    );
  };

  const onChangeSearchType = () => {
    searchType === 'walls' && setSearchType('artists');
    searchType === 'artists' && setSearchType('walls');
  };

  useEffect(() => {
    dispatch(getRegisteredStates());
  }, []);

  if (largerThanSm) {
    return (
      <Container>
        <SearchWXLLSPACE>Search WXLLSPACE</SearchWXLLSPACE>
        <OverlapGroup1>
          <SearchByLocation>
            <Autocomplete
              disablePortal
              isOptionEqualToValue={(option, value) =>
                option.label === value.label
              }
              options={states}
              onInputChange={(event, newInputValue) => {
                handleSearchFormChange(newInputValue);
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
                const { InputLabelProps, InputProps, ...rest } = params;
                return (
                  <InputBase
                    {...rest}
                    sx={{
                      fontFamily: 'var(--font-family-montserrat) !important',
                      fontWeight: '600 !important',
                      lineHeight: '1.4375em',
                      background: 'transparent',
                      position: 'relative',
                      padding: '6px 10px 3px 8px',
                      width: '100%',
                      fontSize: '14px !important',
                    }}
                    placeholder="Search by State"
                    ref={params.InputProps.ref}
                    value={selectedState}
                    label="Search by State"
                  />
                );
              }}
            />
          </SearchByLocation>

          <SearchInputBorder></SearchInputBorder>

          <Box
            sx={{
              position: 'absolute',
              height: '48px',
              top: {
                sm: '15px',
                md: '8px',
                lg: '8px',
                xl: '8px',
              },
              left: {
                sm: '540px',
                md: '519px',
                lg: '519px',
                xl: '519px',
              },
            }}
          >
            <SearchButton onClick={handleSearchButtonClick} />
          </Box>

          <SearchBySwitch onClick={onChangeSearchType}>
            <WxSwitch></WxSwitch>
          </SearchBySwitch>
        </OverlapGroup1>
      </Container>
    );
  }

  if (smallerThanSm) {
    return (
      <SmallSearchForm
        state={selectedState}
        states={states}
        onSubmitSearchFormChange={handleSearchFormChange}
        onSubmitSearchForm={handleSearchButtonClick}
        onChangeSearchType={onChangeSearchType}
      />
    );
  }

  return null;
};

export const SearchForm = (props) => <ProxyComponent {...props} />;
