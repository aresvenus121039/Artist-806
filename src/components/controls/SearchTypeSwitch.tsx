import React, { useState, ChangeEvent, ChangeEventHandler } from 'react';
import clsx from 'clsx';
import { styled } from '@mui/system';
import PropTypes from 'prop-types';
import { useSwitch } from '@mui/core/SwitchUnstyled';
import { useRouter } from 'next/router';

interface SwitchProps {
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

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

const SwitchThumb = styled('span')`
  position: absolute;
  display: flex;
  border-radius: 8px;
  text-align: center;
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
  background: linear-gradient(79.45deg, #5700ff 6.96%, #64e1dc 108.67%);

  &:before {
    display: flex;
    content: 'artist';
    width: 100%;
    height: 100%;
    font-size: 12px;
    font-weight: 600;
    line-height: 240%;
    align-items: center;
    justify-content: center;
    transform: translateX(23px);
    text-transform: capitalize;
  }

  &:after {
    color: #06102b;
    display: flex;
    content: 'walls';
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
    transform: translateX(2px);
    background: transparent !important;
    &:before {
      color: #06102b;
      content: 'Artist';
      transform: translateX(0px);
    }
    &:after {
      color: #ffffff;
      background: linear-gradient(
        79.45deg,
        #64e1dc 6.96%,
        #5700ff 108.67%
      ) !important;
      border-radius: 8px;
      display: flex;
      position: absolute;
      transform: translateX(97px);
    }
  }
`;

const SwitchTrack = styled('span')`
  background-color: transparent;
  width: 100%;
  height: 100%;
  display: block;
`;

const WxSwitch: React.FC<SwitchProps> = ({ checked, onChange }) => {
  const {
    getInputProps,
    checked: isChecked,
    focusVisible,
  } = useSwitch({
    checked,
    onChange,
  });

  const stateClasses = {
    checked: isChecked,
    focusVisible,
  };

  return (
    <SwitchRoot className={clsx(stateClasses)}>
      <SwitchTrack>
        <SwitchThumb className={clsx(stateClasses)} />
      </SwitchTrack>
      <SwitchInput
        checked={checked}
        {...getInputProps()}
        aria-label="Artist/Wxlls"
      />
    </SwitchRoot>
  );
};

WxSwitch.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

interface UseSwitchesCustomProps {
  onChange?: (searchType: string) => void;
  checked?: boolean;
  searchType?: string;
}

const UseSwitchesCustom: React.FC<UseSwitchesCustomProps> = ({
  onChange = () => undefined,
  checked = false,
  searchType = 'artists',
}) => {
  const history = useRouter();
  const [isChecked, setIsChecked] = useState(searchType === 'walls');

  React.useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    onChange(!event.target.checked ? 'artists' : 'walls');
    const searchParams = new URLSearchParams(window.location.search);
    if (!event.target.checked) {
      searchParams.set('search-type', 'artists');
    } else {
      searchParams.set('search-type', 'walls');
    }
    history.push(`/marketplace?${searchParams.toString()}`);
  };

  return <WxSwitch checked={isChecked} onChange={handleChange} />;
};

UseSwitchesCustom.propTypes = {
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  searchType: PropTypes.string,
};

export default UseSwitchesCustom;
