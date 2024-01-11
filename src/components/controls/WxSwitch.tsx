import * as React from 'react';
import clsx from 'clsx';
import { styled } from '@mui/system';
import { useSwitch, SwitchUnstyledProps } from '@mui/core/SwitchUnstyled';

const SwitchRoot = styled('span')`
  display: inline-block;
  position: relative;
  width: 213px;
  height: 42px;
  padding: 5px;
  background: rgba(233, 233, 233, 0.22);
  box-shadow: inset 0px 0px 6px rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: 1000px;
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

const SwitchThumb = styled('span')`
  position: absolute;
  display: flex;
  width: 103px;
  height: 34px;
  background: linear-gradient(
    79.45deg,
    #5700ff 6.96%,
    #64e1dc 108.67%
  ) !important;
  border-radius: 100px;
  top: 4px;
  text-align: center;
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);

  &:before {
    display: flex;
    content: 'Artist';
    width: 100%;
    height: 100%;
    font-size: 12px;
    font-weight: 600;
    line-height: 240%;
    align-items: center;
    justify-content: center;
    transform: translateX(23px);
  }

  &:after {
    display: flex;
    content: 'Walls';
    width: 100%;
    height: 100%;
    font-size: 12px;
    font-weight: 600;
    line-height: 240%;
    align-items: center;
    justify-content: center;
    transform: translateX(77px);
  }

  &.focusVisible {
    background-color: #79b;
  }

  &.checked {
    transform: translateX(2px);
    background: transparent !important;

    &:before {
      content: 'Artist';
      transform: translateX(0px);
    }

    &:after {
      background: linear-gradient(
        79.45deg,
        #64e1dc 6.96%,
        #5700ff 108.67%
      ) !important;
      border-radius: 100px;
      width: 103px;
      height: 34px;
      display: flex;
      position: absolute;
      transform: translateX(97px);
    }
  }
`;

const SwitchTrack = styled('span')`
  background-color: transparent;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  display: block;
`;

function WxSwitch(props: SwitchUnstyledProps) {
  const { getInputProps, checked, disabled, focusVisible } = useSwitch(props);

  const stateClasses = {
    checked,
    focusVisible,
  };

  return (
    <SwitchRoot className={clsx(stateClasses)}>
      <SwitchTrack>
        <SwitchThumb className={clsx(stateClasses)} />
      </SwitchTrack>
      <SwitchInput {...getInputProps()} aria-label="Artist/Walls" />
    </SwitchRoot>
  );
}

export default function UseSwitchesCustom() {
  return <WxSwitch defaultChecked />;
}
