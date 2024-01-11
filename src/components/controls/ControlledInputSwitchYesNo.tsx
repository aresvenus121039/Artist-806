import React, { useCallback } from 'react';
import { Box, Typography } from '@mui/material';
import { fieldToSwitch } from 'formik-mui';
import { styled } from '@mui/system';
import SwitchUnstyled, {
  switchUnstyledClasses,
} from '@mui/core/SwitchUnstyled';
import InputLabel from './InputLabel';

const Root = styled('span')`
  font-size: 0;
  position: relative;
  display: inline-block;
  width: 100%;
  max-width: 1000px;
  height: 52px;
  cursor: pointer;
  font-family: var(--font-family-montserrat);

  &:before {
    content: 'No';
    position: absolute;
    top: 50%;
    left: 25%;
    transform: translate(-25%, -50%);
    z-index: 2;
    color: #ffffff;
    font-size: 12px;
    font-weight: 600;
  }

  &:after {
    content: 'Yes';
    position: absolute;
    top: 50%;
    right: 25%;
    transform: translate(25%, -50%);
    z-index: 2;
    color: #ffffff;
    font-size: 12px;
    font-weight: 600;
  }

  &.${switchUnstyledClasses.disabled} {
    opacity: 0.4;
    cursor: not-allowed;
  }

  & .${switchUnstyledClasses.track} {
    background: rgba(255, 255, 255, 0.13);
    border-radius: 8px;
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
  }

  & .${switchUnstyledClasses.thumb} {
    display: block;
    width: 49%;
    height: 40px;
    top: 6px;
    left: 6px;
    border-radius: 8px;
    background-color: #00c8c8;
    position: relative;
    transition: all 200ms ease;

    &:after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;
      color: #ffffff;
      font-size: 12px;
      font-weight: 600;
    }
  }

  &.${switchUnstyledClasses.focusVisible} .${switchUnstyledClasses.thumb} {
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0 0 1px 8px rgba(0, 0, 0, 0.25);
  }

  &.${switchUnstyledClasses.checked} {
    .${switchUnstyledClasses.thumb} {
      left: 49.4%;
      top: 6px;
      background-color: #00c8c8;

      &:after {
        display: none;
      }
    }

    .${switchUnstyledClasses.track} {
      background: rgba(255, 255, 255, 0.13);
    }
  }

  & .${switchUnstyledClasses.input} {
    cursor: inherit;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 1;
    margin: 0;
  }
`;

interface ControlledInputSwitchYesNoProps {
  textLabel: string;
  form: {
    setFieldValue: Function;
    errors: any;
    touched: any;
  };
  field: {
    name: string;
  };
  [key: string]: any;
}

const ControlledInputSwitchYesNo: React.FC<ControlledInputSwitchYesNoProps> = (
  props: ControlledInputSwitchYesNoProps
) => {
  const {
    textLabel,
    form: { setFieldValue, errors, touched },
    field: { name },
    ...rest
  } = props;

  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { checked } = event.target;
      setFieldValue(name, checked || false);
    },
    [setFieldValue, name]
  );

  return (
    <Box
      sx={{
        position: 'relative',
      }}
    >
      {textLabel && (
        <InputLabel
          text={textLabel}
          styleWrap={{
            marginBottom: '12px',
          }}
        />
      )}
      <SwitchUnstyled
        {...rest}
        component={Root}
        onChange={onChange}
        componentsProps={{
          input: {
            'aria-label': 'switch',
          },
        }}
      />
      {errors[name] && touched[name] && (
        <Typography sx={{ color: 'red', fontSize: '13px' }}>
          {errors[name]}
        </Typography>
      )}
    </Box>
  );
};

export default ControlledInputSwitchYesNo;
