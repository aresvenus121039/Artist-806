import React from 'react';
import Link from 'next/link';
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from '@mui/core/ButtonUnstyled';
import { styled as muiStyledSystem } from '@mui/system';

const CustomButtonRoot = muiStyledSystem('button')(`
  color: #f8fafc;
  font-family: "Montserrat", Helvetica, Arial, sans-serif;
  font-weight: 600;
  font-size: 6.51px;
  letter-spacing: 0;
  white-space: nowrap;
  text-transform: capitalize;
  transition: all 200ms ease;
  cursor: pointer;
  border: none;
  border-radius: 1000px;
  background: linear-gradient(82.36deg, #A946F7 0.1%, rgba(255, 255, 255, .55) 133.17%);
  filter: drop-shadow(0px 0px 16px rgba(0, 0, 0, 0.5));

  &:hover {
    background: linear-gradient(82.36deg, #A946F7 0.1%, rgba(255, 255, 255, .55) 133.17%);
  }

  &.${buttonUnstyledClasses.focusVisible} {
    outline: none;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`);

interface SearchButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // You can add any additional props if needed
}

const SearchButton: React.FC<SearchButtonProps> = (props) => {
  return (
    <ButtonUnstyled
      LinkComponent={Link}
      to="artist"
      component={CustomButtonRoot}
      sx={{
        fontSize: 'var(--font-size-m)',
        height: {
          xs: '36px',
          sm: '36px',
          md: '48px',
          lg: '48px',
          xl: '48px',
        },
        width: {
          xs: '103px',
          sm: '103px',
          md: '132px',
          lg: '132px',
          xl: '132px',
        },
      }}
      {...props}
    >
      search
    </ButtonUnstyled>
  );
};

export default SearchButton;
