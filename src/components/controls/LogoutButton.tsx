import React from 'react';
import PropTypes, { Requireable } from 'prop-types';
import { Box, Typography, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { signOut } from '@/store/actions/userActions';
import { styled } from '@mui/system';
import { cloudflareImage } from '@/utility/images';
import { ButtonPropsColorOverrides } from '@mui/material/Button/Button';
import { useRouter } from 'next/router';
import Link from 'next/link';

type BackgroundColor = string | undefined;

interface LogoutButtonProps {
  backgroundColor?: BackgroundColor;
  onClick?: () => void;
}

export const LogoutButton: React.FC<LogoutButtonProps> = ({
  backgroundColor = undefined,
  onClick,
}) => {
  const dispatch = useDispatch();
  const history = useRouter();

  const handleSignOut = () => {
    dispatch(signOut());
    history.push('/');
  };

  return (
    <Link
      style={{
        textDecoration: 'none',
      }}
      href="#"
      onClick={handleSignOut}
    >
      <MuiButton backgroundColor={backgroundColor}>{'sign out'}</MuiButton>
    </Link>
  );
};

LogoutButton.defaultProps = {
  backgroundColor: undefined,
  onClick: undefined,
};

LogoutButton.propTypes = {
  backgroundColor: PropTypes.string as Requireable<BackgroundColor>,
  onClick: PropTypes.func,
};

interface LogoutButtonMobileProps {
  backgroundColor?: string | null;
  onClick?: () => void;
}

export const LogoutButtonMobile: React.FC<LogoutButtonMobileProps> = ({
  backgroundColor = null,
  onClick,
}) => {
  const dispatch = useDispatch();
  const history = useRouter();

  const handleSignOut = () => {
    dispatch(signOut());
    history.push('/');
  };

  return (
    <Link
      style={{
        width: '100%',
        textDecoration: 'none',
      }}
      href="#"
      onClick={handleSignOut}
    >
      <LinkItems
        background={'linear-gradient(82.62deg, #5700FF 0%, #64E1DC 126.17%)'}
      >
        <IconImage
          imageURL={`${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/menu-icon/Sign_Up.svg`}
          alt="Sign Up Icon"
        />
        <LinkText>{'sign out'}</LinkText>
      </LinkItems>
    </Link>
  );
};

LogoutButtonMobile.propTypes = {
  backgroundColor: PropTypes.string as Requireable<BackgroundColor>,
  onClick: PropTypes.func,
};

const MuiButton = styled(Button)<{ backgroundColor?: string }>`
  && {
    box-shadow: none;
    text-transform: none;
    min-width: 97px;
    height: 42px;
    color: var(--white);
    font-size: var(--font-size-xs);
    font-weight: 700;
    font-style: normal;
    text-align: center;
    padding: 12.9px 23.1px;
    border: none;
    border-radius: 8px;
    line-height: 75px;
    background: linear-gradient(74.3deg, #5700ff 2.8%, #00c8c8 133.27%);
    font-family: var(--font-family-montserrat);
    &:hover {
      background: linear-gradient(74.3deg, #5700ff 2.8%, #00c8c8 133.27%);
      box-shadow: none;
    }
    &:active {
      box-shadow: none;
      background: linear-gradient(74.3deg, #5700ff 2.8%, #00c8c8 133.27%);
    }
    &:focus {
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
    }
  }
`;

interface LinkItemsProps {
  background?: string;
  children: React.ReactNode;
}

const LinkItems: React.FC<LinkItemsProps> = ({
  background = 'rgb(28, 37, 61)',
  children,
}) => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        alignItems: 'center',
        background,
        border: '1px solid var(--big-stone)',
        borderRadius: '8px',
        padding: '21px 27px',
        margin: '10px auto',
      }}
    >
      {children}
    </Box>
  );
};

interface IconImageProps {
  imageURL: string;
  alt: string;
}

const IconImage: React.FC<IconImageProps> = ({ imageURL, alt }) => {
  return (
    <img src={cloudflareImage(imageURL)} alt={alt} style={{ width: '20px' }} />
  );
};

interface LinkTextProps {
  children: React.ReactNode;
}

const LinkText: React.FC<LinkTextProps> = ({ children }) => {
  return (
    <Typography
      style={{
        color: 'rgb(184, 183, 173)',
        fontFamily: 'var(--font-family-montserrat)',
        fontSize: 'var(--font-size-m)',
        fontWeight: 400,
        fontStyle: 'normal',
        textTransform: 'uppercase',
      }}
    >
      {children}
    </Typography>
  );
};

export default LogoutButton;
