import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import { Box, styled, Button } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';
import MenuItem from '@mui/material/MenuItem';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Zoom from '@mui/material/Zoom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import {
  selectIsUserSignedIn,
  selectSignedInUser,
} from '@/store/reducers/userReducers';
import { USER_TYPE } from '@/constants/userConstants';
import Slide from '@mui/material/Slide';
import { LogoutButton, LogoutButtonMobile } from '../controls/LogoutButton';
import { SignupButton } from '../controls/SignupButton';
import { WxllspaceBlackLogo, WxllspaceColorLogo } from '../icons';
import Link from 'next/link';

// Burger Menu
const useStyles = makeStyles({
  menu_btn: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '40px',
    height: '30px',
    color: 'var(--white)',
    cursor: 'pointer',
    zIndex: 1001,
  },
  open: {
    '& div:nth-child(1)': {
      transform: 'rotate(45deg)',
      width: '20px',
    },
    '& div:nth-child(2)': {
      transform: 'translateX(-20px)',
      background: 'transparent',
    },
    '& div:nth-child(3)': {
      transform: 'rotate(-45deg)',
      width: '20px',
    },
  },
  menu_btn__burger_one: {
    width: '30px',
    height: '2px',
    background: (props: { isTrue: boolean }) =>
      props.isTrue ? 'black' : 'white',
    borderRadius: '10px',
    transform: 'translateY(-5px)',
  },
  menu_btn__burger_two: {
    position: 'absolute',
    width: '25px',
    height: '2px',
    background: (props: { isTrue: boolean }) =>
      props.isTrue ? 'black' : 'white',
    borderRadius: '10px',
  },
  menu_btn__burger_three: {
    position: 'absolute',
    width: '20px',
    height: '2px',
    background: (props: { isTrue: boolean }) =>
      props.isTrue ? 'black' : 'white',
    borderRadius: '10px',
    transform: 'translateY(5px)',
  },
});

interface BurgerMenuBtnProps {
  aria_controls: string;
  aria_haspopup: string;
  onClick: (event: any) => void;
  color: string;
  isTrue: boolean;
}

interface NavBarProps {
  isMarketplaceScreen?: boolean;
  window?: () => Window;
}

interface ChildrenProps {
  children: React.ReactNode;
}

interface IconImageProps {
  src: string;
  alt: string;
}

const BurgerMenuBtn = (props: BurgerMenuBtnProps) => {
  const classes = useStyles(props);
  return (
    <Box
      className={classes.menu_btn}
      aria-controls={props.aria_controls}
      aria-haspopup={props.aria_haspopup ? 'true' : 'false'}
      aria-expanded={props.aria_haspopup ? 'true' : 'false'}
      onClick={props.onClick}
    >
      <Box className={classes.menu_btn__burger_one} />
      <Box className={classes.menu_btn__burger_two} />
      <Box className={classes.menu_btn__burger_three} />
    </Box>
  );
};

const NavBar = ({ isMarketplaceScreen }: NavBarProps) => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const isUserSignedIn = useSelector(selectIsUserSignedIn);
  const userDetail = useSelector(selectSignedInUser);

  // Handle profile url
  const userSlug =
    userDetail?.role === USER_TYPE.ARTIST
      ? userDetail?.slug
      : userDetail?.role === USER_TYPE.WXLLOWNER
      ? userDetail?.wall_slug
      : null;
  const profileUrl =
    userDetail?.role === USER_TYPE.ARTIST
      ? `/artist/${userSlug}`
      : userDetail?.role === USER_TYPE.WXLLOWNER
      ? `/wall/${userSlug}`
      : '#';
  const profileName =
    userDetail?.role === USER_TYPE.ARTIST
      ? userDetail.artistName
      : userDetail?.role === USER_TYPE.WXLLOWNER
      ? userDetail.wall_name
      : 'log in';

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          display: 'flex',
          padding: {
            xs: '30px 0',
            md: '30px 0',
          },
          justifyContent: {
            xs: 'flex-start',
            md: 'space-between',
          },
          alignItems: 'center',
          width: '100%',
          backgroundColor: 'transparent',
          color: 'var(--white)',
          fontFamily: 'Roboto',
          fontSize: 'var(--font-size-m)',
          fontWeight: 600,
          fontStyle: 'normal',
          zIndex: 1000,
          boxShadow: 'none',
        }}
      >
        <Container maxWidth={false}>
          <Toolbar>
            <Link href="/">
              <WxllspaceColorLogo />
            </Link>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Box
                sx={{
                  display: 'inline-flex',
                  padding: '8px',
                  background: 'var(--opacity-white-white-10)',
                  border: '1px solid var(--opacity-white-white-10)',
                  borderRadius: 'var(--radius-full)',
                  backdropFilter: 'blur(40px) brightness(100%)',
                  WebkitBackdropFilter: 'blur(40px) brightness(100%)',
                }}
              >
                <CustomMenuItem>
                  <Link
                    style={{
                      color: '#FFF',
                      fontFamily: 'Roboto !important',
                      fontSize: 'var(--font-size-m)',
                      fontWeight: 600,
                      fontStyle: 'normal',
                      textDecoration: 'none',
                    }}
                    href="/marketplace?state=New York&search-type=artists"
                  >
                    <NavButton>marketplace</NavButton>
                  </Link>
                </CustomMenuItem>

                <CustomMenuItem>
                  <a
                    style={{
                      color: '#FFF',
                      fontFamily: 'var(--font-family-montserrat)',
                      fontSize: 'var(--font-size-m)',
                      fontWeight: 600,
                      fontStyle: 'normal',
                      textDecoration: 'none',
                    }}
                    href={
                      window.location.host === 'wxllspace.com'
                        ? 'https://wxllspace.com/creatives'
                        : 'https://staging.wxllspace.com/creatives'
                    }
                  >
                    <NavButton>artists</NavButton>
                  </a>
                </CustomMenuItem>

                <CustomMenuItem>
                  <a
                    style={{
                      color: '#FFF',
                      fontFamily: 'var(--font-family-montserrat)',
                      fontSize: 'var(--font-size-m)',
                      fontWeight: 600,
                      fontStyle: 'normal',
                      textDecoration: 'none',
                    }}
                    href={
                      window.location.host === 'wxllspace.com'
                        ? 'https://wxllspace.com/real-estate'
                        : 'https://staging.wxllspace.com/real-estate'
                    }
                  >
                    <NavButton>real estate</NavButton>
                  </a>
                </CustomMenuItem>

                <CustomMenuItem>
                  <a
                    style={{
                      color: '#FFF',
                      fontFamily: 'var(--font-family-montserrat)',
                      fontSize: 'var(--font-size-m)',
                      fontWeight: 400,
                      fontStyle: 'normal',
                      textDecoration: 'none',
                    }}
                    href={
                      window.location.host === 'wxllspace.com'
                        ? 'https://wxllspace.com/real-estate'
                        : 'https://staging.wxllspace.com/real-estate'
                    }
                  >
                    <NavButton>mural statement</NavButton>
                  </a>
                </CustomMenuItem>

                <CustomMenuItem>
                  <a
                    style={{
                      color: '#FFF',
                      fontFamily: 'var(--font-family-montserrat)',
                      fontSize: 'var(--font-size-l)',
                      fontWeight: 400,
                      fontStyle: 'normal',
                      textDecoration: 'none',
                    }}
                    href={
                      window.location.host === 'wxllspace.com'
                        ? 'https://wxllspace.com/whats-new'
                        : 'https://staging.wxllspace.com/whats-new'
                    }
                  >
                    <NavButton>blog</NavButton>
                  </a>
                </CustomMenuItem>

                <CustomMenuItem>
                  <a
                    style={{
                      color: '#FFF',
                      fontFamily: 'var(--font-family-montserrat)',
                      fontSize: 'var(--font-size-l)',
                      fontWeight: 400,
                      fontStyle: 'normal',
                      textDecoration: 'none',
                    }}
                    href={
                      window.location.host === 'wxllspace.com'
                        ? 'https://wxllspace.com/contact'
                        : 'https://staging.wxllspace.com/contact'
                    }
                  >
                    <NavButton>contact</NavButton>
                  </a>
                </CustomMenuItem>
              </Box>
            </Box>

            <Box
              sx={{
                justifyContent: 'center',
                display: {
                  xs: 'none',
                  sm: 'none',
                  md: 'flex',
                  lg: 'flex',
                  xl: 'flex',
                },
              }}
            >
              <LoginAndSignupContainer>
                <Link
                  href={
                    isUserSignedIn ? (userSlug ? profileUrl : '') : '/login'
                  }
                  style={{
                    textDecoration: 'none',
                  }}
                >
                  <NavButton>{profileName}</NavButton>
                </Link>
                <span
                  style={{
                    marginLeft: '16px',
                  }}
                >
                  {isUserSignedIn ? (
                    <LogoutButton />
                  ) : (
                    <Link href="/signup" style={{ textDecoration: 'none' }}>
                      <SignupButton />
                    </Link>
                  )}
                </span>
              </LoginAndSignupContainer>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'flex', md: 'none' },
                justifyContent: 'flex-end',
              }}
            >
              <BurgerMenuBtn
                aria_controls="menu-appbar"
                aria_haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                isTrue={false}
              />
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'flex', md: 'none' },
                  '& .MuiPaper-root': {
                    position: 'absolute',
                    top: '100px',
                    background: 'rgba(138, 138, 138, 0.75)',
                    backdropFilter: 'blur(4.96203px)',
                    borderTopLeftRadius: '18px',
                    borderTopRightRadius: 0,
                    borderBottomLeftRadius: '18px',
                    borderBottomRightRadius: '18px',
                  },
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <a
                    style={{
                      width: '100%',
                      textDecoration: 'none',
                    }}
                    href={
                      window.location.host === 'wxllspace.com'
                        ? 'https://wxllspace.com/about'
                        : 'https://staging.wxllspace.com/about'
                    }
                  >
                    <LinkItems>
                      <IconImage
                        src={`${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/menu-icon/About_Us.svg`}
                        alt="About Us Icon"
                      />
                      <LinkText>about us</LinkText>
                    </LinkItems>
                  </a>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link
                    style={{
                      width: '100%',
                      textDecoration: 'none',
                    }}
                    href="/marketplace"
                  >
                    <LinkItems>
                      <IconImage
                        src={`${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/menu-icon/Marketplace.svg`}
                        alt="Marketplace Icon"
                      />
                      <LinkText>marketplace</LinkText>
                    </LinkItems>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <a
                    style={{
                      width: '100%',
                      textDecoration: 'none',
                    }}
                    href={
                      window.location.host === 'wxllspace.com'
                        ? 'https://wxllspace.com/contact'
                        : 'https://staging.wxllspace.com/contact'
                    }
                  >
                    <LinkItems>
                      <IconImage
                        src={`${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/menu-icon/Contact.svg`}
                        alt="Contact Icon"
                      />
                      <LinkText>contact</LinkText>
                    </LinkItems>
                  </a>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <a
                    style={{
                      width: '100%',
                      textDecoration: 'none',
                    }}
                    href={
                      window.location.host === 'wxllspace.com'
                        ? 'https://wxllspace.com/creatives'
                        : 'https://staging.wxllspace.com/creatives'
                    }
                  >
                    <LinkItems>
                      <IconImage
                        src={`${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/menu-icon/Creatives.svg`}
                        alt="Creatives Icon"
                      />
                      <LinkText>creatives</LinkText>
                    </LinkItems>
                  </a>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <a
                    style={{
                      width: '100%',
                      textDecoration: 'none',
                    }}
                    href={
                      window.location.host === 'wxllspace.com'
                        ? 'https://wxllspace.com/real-estate'
                        : 'https://staging.wxllspace.com/real-estate'
                    }
                  >
                    <LinkItems>
                      <IconImage
                        src={`${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/menu-icon/Real_Estate.svg`}
                        alt="Real Estate Icon"
                      />
                      <LinkText>Real estate</LinkText>
                    </LinkItems>
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    style={{
                      color: '#FFF',
                      fontFamily: 'var(--font-family-montserrat)',
                      fontSize: 'var(--font-size-xs)',
                      fontWeight: 700,
                      fontStyle: 'normal',
                      textDecoration: 'none',
                    }}
                    href={
                      window.location.host === 'wxllspace.com'
                        ? 'https://wxllspace.com/whats-new'
                        : 'https://staging.wxllspace.com/whats-new'
                    }
                  >
                    <LinkItems>
                      <IconImage
                        src={`${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/menu-icon/Real_Estate.svg`}
                        alt="What's New Icon"
                      />
                      <LinkText>what's new</LinkText>
                    </LinkItems>
                  </a>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  {isUserSignedIn ? (
                    <Box
                      style={{
                        width: '80%',
                        alignItems: 'center',
                        display: 'flex',
                        justifyContent: 'center',
                        marginRight: '10px',
                      }}
                    >
                      {userDetail.name}
                    </Box>
                  ) : (
                    <Link
                      style={{
                        width: '100%',
                        textDecoration: 'none',
                        marginRight: '10px',
                      }}
                      href="/login"
                    >
                      <LinkItems>
                        <IconImage
                          src={`${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/menu-icon/Login.svg`}
                          alt="Login Icon"
                        />
                        <LinkText>login</LinkText>
                      </LinkItems>
                    </Link>
                  )}
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  {' '}
                  {isUserSignedIn ? (
                    <LogoutButtonMobile />
                  ) : (
                    <Link
                      style={{
                        width: '100%',
                        textDecoration: 'none',
                      }}
                      href="/signup"
                    >
                      <LinkItems>
                        <IconImage
                          src={`${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/menu-icon/Sign_Up.svg`}
                          alt="Sign Up Icon"
                        />
                        <LinkText>sign up</LinkText>
                      </LinkItems>
                    </Link>
                  )}
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

const LinkItems = (props: ChildrenProps) => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        alignItems: 'center',
      }}
    >
      {props.children}
    </Box>
  );
};

const LinkText = (props: ChildrenProps) => {
  return (
    <Typography
      style={{
        color: 'white',
        fontFamily: 'var(--font-family-montserrat)',
        fontSize: 'var(--font-size-m)',
        fontWeight: 400,
        fontStyle: 'normal',
        textTransform: 'uppercase',
      }}
    >
      {props.children}
    </Typography>
  );
};

const CustomMenuItem = (props: ChildrenProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: {
          md: '0 8px',
          lg: '0 8px',
          xl: '0 8px',
        },
        letterSpacing: 0,
        whiteSpace: 'nowrap',
      }}
    >
      {props.children}
    </Box>
  );
};

const IconImage = ({ src, alt }: IconImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        width: '20px',
      }}
    />
  );
};

const LoginAndSignupContainer = ({ children }: ChildrenProps) => {
  return (
    <Box
      sx={{
        alignSelf: 'flex-end',
        display: 'flex',
        alignItems: 'center',
        minWidth: '145px',
      }}
    >
      {children}
    </Box>
  );
};

const NavButton = styled(Button)({
  minWidth: '30px',
  fontFamily: 'Roboto',
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: 'normal',
  padding: '6px 12px',
  textTransform: 'uppercase',
  borderRadius: 'var(--radius-full)',
  border: '1px solid transparent',
  boxShadow: 'none',
  color: '#D8D8D8',
  letterSpacing: '2.24px',
  background: 'transparent',
  '&:hover': {
    boxShadow: '0px 0px 25px 0px rgba(255, 255, 255, 0.25)',
    border: '1px solid var(--white)',
    background: 'var(--opacity-white-white-10)',
  },
  '&:active': {
    boxShadow: '0px 0px 25px 0px rgba(255, 255, 255, 0.25)',
    border: '1px solid var(--white)',
    background: 'var(--white)',
    color: 'var(--main-dark)',
  },
  '@media(max-width: 1200px)': {
    fontSize: '9px',
    padding: '6px',
  },
});

export default NavBar;
