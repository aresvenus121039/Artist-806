import React, { useState, ChangeEvent } from 'react';
import clsx from 'clsx';
import { styled } from '@mui/system';
import PropTypes from 'prop-types';
import { useSwitch } from '@mui/core/SwitchUnstyled';

interface WxSwitchProps {
  checked?: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
  inputProps?: Record<string, any>;
}

interface UseSwitchesCustomProps {
  checked?: boolean;
  onChange?: (value: 'sign-in' | 'sign-up') => void;
}

const SwitchRoot = styled('span')(`
  display: inline-block;
  position: relative;
  width: 212px;
  height: 41px;
  padding: 4px;
  background-color: #1D263E;
  border-radius: 100px;
`);

const SwitchInput = styled('input')(`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: 1;
  margin: 0;
  cursor: pointer;
`);

const SwitchThumb = styled('span')(
  ({ theme }) => `
  position: absolute;
  display: flex;
  background: linear-gradient(79.45deg, #5700FF 6.96%, #64E1DC 108.67%) !important;
  border-radius: 100px;
  text-align: center;

  &:before {
    display: flex;
    content: "Sign up";
    width: 100%;
    height: 100%;
    font-size: 12px;
    font-weight: 600;
    line-height: 240%;
    align-items: center;
    justify-content: center;
    transform: translateX(25px);
    white-space: nowrap;
  }

  &:after {
    color: #ffffff;
    display: flex;
    content: "Sign in";
    width: 100%;
    height: 100%;
    font-size: 12px;
    font-weight: 600;
    line-height: 240%;
    align-items: center;
    justify-content: center;
    transform: translateX(80px);
  }

  &.checked {
    transform: translateX(5px);
    background: transparent !important;
    &:before {
      color: #ffffff;
      content: "Sign up";
      transform: translateX(-10px);
    }
    &:after {
        color: #ffffff;
        background: linear-gradient(79.45deg, #64E1DC 6.96%, #5700FF 108.67%) !important;
        border-radius: 100px;
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

function WxSwitch(props: WxSwitchProps) {
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
        aria-label="Login/Wxlls"
      />
    </SwitchRoot>
  );
}

const UseSwitchesCustom: React.FC<UseSwitchesCustomProps> = (props) => {
  const [checked, setChecked] = useState(!!props.checked);
  const [value, setValue] = useState(!!props.checked ? 'sign-in' : 'sign-up');

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const newChecked = event.target.checked;
    const newValue = newChecked ? 'sign-in' : 'sign-up';
    setChecked(newChecked);
    setValue(newValue);
    if (props.onChange) {
      props.onChange(newValue);
    }
  };

  return (
    <WxSwitch
      value={value}
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  );
};

export default UseSwitchesCustom;
