import React, { useState, useContext } from 'react';
import clsx from 'clsx';
import { styled } from '@mui/system';
import { UseSwitchProps, useSwitch } from '@mui/core/SwitchUnstyled';
import { useSelector } from 'react-redux';

import { MarketplaceMapContext } from '@/contexts/MarketplaceMapContext';
import { selectSignedInUser } from '@/store/reducers/userReducers';
import { USER_TYPE } from '@/constants/userConstants';
import { useSearchParams } from 'next/navigation';

const SwitchRoot = styled('span')`
  display: inline-block;
  position: relative;
  width: 212px;
  height: 41px;
  padding: 4px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: inset 0px 0px 6px rgba(0, 0, 0, 0.5);
  border: none;
`;

const SwitchInput = styled('input')`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: 1;
  margin: 0;
  cursor: pointer;
`;

const SwitchThumb = styled('span')(
  ({ theme }) => `
  position: absolute;
  display: flex;
  border-radius: 8px;
  text-align: center;
  background: linear-gradient(79.45deg, #5700FF 6.96%, #64E1DC 108.67%);

  &:before {
    display: flex;
    content: "artist";
    width: 100%;
    height: 100%;
    font-size: 12px;
    font-weight: 600;
    line-height: 240%;
    align-items: center;
    justify-content: center;
    transform: translateX(26px);
    text-transform: capitalize;
  }

  &:after {
    color: #06102b;
    display: flex;
    content: "walls";
    width: 100%;
    height: 100%;
    font-size: 12px;
    font-weight: 600;
    line-height: 240%;
    align-items: center;
    justify-content: center;
    transform: translateX(77px);
    text-transform: capitalize;
  }

  &.checked {
    transform: translateX(5px);
    background: transparent !important;
    &:before {
      color: #06102b;
      content: "Artist";
      transform: translateX(-5px);
    }
    &:after {
        color: #ffffff;
        background: linear-gradient(79.45deg, #64E1DC 6.96%, #5700FF 108.67%) !important;
        border-radius: 8px;
        display: flex;
        position: absolute;
        transform: translateX(97px);
    }
  }
`
);

const SwitchTrack = styled('span')(
  ({ theme }) => `
  background-color: transparent;
  width: 100%;
  height: 100%;
  display: block;
`
);

interface SearchTypeSwitchProps {
  onChange: (type: 'artists' | 'walls') => void;
  checked: boolean;
  searchType: string;
}

function WxSwitch(props: UseSwitchProps & SearchTypeSwitchProps) {
  const { getInputProps, checked, focusVisible } = useSwitch(props);

  const stateClasses = {
    checked,
    focusVisible,
  };

  return (
    <SwitchRoot
      className={clsx(stateClasses)}
      sx={{
        width: {
          xs: '200px',
          sm: '200px',
          md: '212px',
          lg: '212px',
          xl: '212px',
        },
        height: {
          xs: '38px',
          sm: '38px',
          md: '41px',
          lg: '41px',
          xl: '41px',
        },
      }}
    >
      <SwitchTrack>
        <SwitchThumb
          className={clsx(stateClasses)}
          sx={{
            width: {
              xs: '92px',
              sm: '92px',
              md: '102px',
              lg: '102px',
              xl: '102px',
            },
            height: {
              xs: '30px',
              sm: '30px',
              md: '33px',
              lg: '33px',
              xl: '33px',
            },
          }}
        />
      </SwitchTrack>
      <SwitchInput
        checked={checked}
        {...getInputProps()}
        aria-label="Artist/Walls"
      />
    </SwitchRoot>
  );
}

const UseSwitchesCustom: React.FC<SearchTypeSwitchProps> = (props) => {
  const [checked, setChecked] = useState(props.searchType === 'walls');
  const { setSearchType } = useContext(MarketplaceMapContext);
  const query = useSearchParams();

  const userDetail = useSelector(selectSignedInUser)?.role;
  React.useEffect(() => {
    if (userDetail) {
      const searchTypeQuery = query.get('search-type');
      if (searchTypeQuery) return;
      if (userDetail === USER_TYPE.ARTIST) {
        setSearchType('walls');
      } else {
        setSearchType('artists');
      }
    }
  }, []);

  React.useEffect(() => {
    setChecked(props.checked);
  }, [props.checked]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(event.target.checked ? 'walls' : 'artists');
    setSearchType(event.target.checked ? 'walls' : 'artists');
  };

  return (
    <WxSwitch
      checked={checked}
      onChange={handleChange as any}
      searchType={''}
    />
  );
};

UseSwitchesCustom.defaultProps = {
  onChange: () => undefined,
};

export default UseSwitchesCustom;
