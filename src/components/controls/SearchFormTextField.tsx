import React, { forwardRef } from 'react';
import { useInput } from '@mui/core/';
import { styled as muiStyled, CSSObject } from '@mui/system';

const StyledInputElement = muiStyled('input')(
  (props: CSSObject) => `
  font-family: var(--font-family-montserrat);
  font-weight: 500;
  width: 200px;
  font-size: var(--font-size-l);
  line-height: 1.4375em;
  background: transparent;
  border: unset;
  color: var(--white-42);
  transition: width 300ms ease;
  white-space: nowrap;
  line-height: 75px;
  letter-spacing: 0;

  &:focus {
    outline: none;
    width: 220px;
    transition: width 200ms ease-out;
  }
`
);

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  function CustomInput(
    { disabled, 'aria-label': ariaLabel, placeholder },
    ref
  ) {
    const { getRootProps, getInputProps } = useInput({}, ref);

    return (
      <div {...getRootProps()}>
        <StyledInputElement {...getInputProps()} placeholder={placeholder} />
      </div>
    );
  }
);

interface CustomInputProps {
  disabled: boolean;
  'aria-label': string;
  placeholder: string;
}

export default function SearchFormTextField({
  placeholder,
}: {
  placeholder: string;
}) {
  return (
    <CustomInput
      disabled={false}
      aria-label={placeholder}
      placeholder={placeholder}
    />
  );
}
