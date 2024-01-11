import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import { makeStyles } from '@mui/styles';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { LogoutButton, LogoutButtonMobile } from './../controls/LogoutButton';
import { SignupButton } from './../controls/SignupButton';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectIsUserSignedIn,
  selectSignedInUser,
} from '@/store/reducers/userReducers';
import { styled as styledMui } from '@mui/material/styles';

const useStyles = makeStyles({
  menu_btn: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '40px',
    height: '30px',
    position: 'fixed',
    right: '36px',
    top: '25px',
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
    background: 'white',
    borderRadius: '10px',
    transform: 'translateY(-5px)',
  },
  menu_btn__burger_two: {
    position: 'absolute',
    width: '25px',
    height: '2px',
    background: 'white',
    borderRadius: '10px',
  },
  menu_btn__burger_three: {
    position: 'absolute',
    width: '20px',
    height: '2px',
    background: 'white',
    borderRadius: '10px',
    transform: 'translateY(5px)',
  },
});

const BurgerMenuBtn = (props) => {
  const classes = useStyles();
  return (
    <div
      className={`${classes.menu_btn} ${props.show && classes.open}`}
      onClick={props.onClick}
    >
      <div className={classes.menu_btn__burger_one} />
      <div className={classes.menu_btn__burger_two} />
      <div className={classes.menu_btn__burger_three} />
    </div>
  );
};

const StyledMenu = styledMui((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    width: '200px',
    top: '80px !important',
    right: '5px !important',
    background: 'rgba(138, 138, 138, 0.75)',
    backdropFilter: 'blur(4.96203px)',
    borderTopLeftRadius: '18px',
    borderTopRightRadius: 0,
    borderBottomLeftRadius: '18px',
    borderBottomRightRadius: '18px',
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {},
      '&:active': {
        backgroundColor: '',
      },
    },
  },
}));

export class MenuWrap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: false,
    };
  }

  componentDidUpdate(prevProps) {
    const sideChanged =
      this.props.children.props.right !== prevProps.children.props.right;

    if (sideChanged) {
      this.setState({ hidden: true });

      setTimeout(() => {
        this.show();
      }, this.props.wait);
    }
  }

  show() {
    this.setState({ hidden: false });
  }

  render() {
    let style;

    if (this.state.hidden) {
      style = { display: 'none' };
    }

    return (
      <Box
        sx={{
          display: {
            xs: 'block',
            sm: 'block',
            md: 'none',
            lg: 'none',
            xl: 'none',
          },
        }}
        style={style}
        className={this.props.side}
      >
        {this.props.children}
      </Box>
    );
  }
}

export const TopNavigationBar = (props) => {
  const { isMarketplaceScreen } = props;
  const isUserSignedIn = useSelector(selectIsUserSignedIn);
  const userDetail = useSelector(selectSignedInUser);
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  // mui menu setup
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClickOpenMenu = (event) => {
    !open && setAnchorEl(event.currentTarget);
    open && setAnchorEl(null);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box>
        <MenuWrap wait={20} side="left" className="menu-wrap">
          <Box
            sx={{
              position: 'absolute',
              zIndex: 1001,
            }}
          >
            <BurgerMenuBtn onClick={handleClickOpenMenu} show={open} />
            {open && (
              <>
                <StyledMenu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleCloseMenu}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <MenuItem>
                    <Link
                      onClick={() => {
                        setAnchorEl(null);
                      }}
                      style={{
                        width: '100%',
                        textDecoration: 'none',
                      }}
                      to="/about"
                    >
                      <LinkItems>
                        <IconImage
                          src="/icons/About_Us.svg"
                          alt="About Us Icon"
                        />
                        <LinkText>about us</LinkText>
                      </LinkItems>
                    </Link>
                  </MenuItem>

                  <MenuItem>
                    <Link
                      onClick={() => {
                        setAnchorEl(null);
                      }}
                      style={{
                        width: '100%',
                        textDecoration: 'none',
                      }}
                      to="/marketplace"
                    >
                      <LinkItems>
                        <IconImage
                          src="/icons/Marketplace.svg"
                          alt="Marketplace Icon"
                        />
                        <LinkText>marketplace</LinkText>
                      </LinkItems>
                    </Link>
                  </MenuItem>

                  <MenuItem>
                    <Link
                      onClick={() => {
                        setAnchorEl(null);
                      }}
                      style={{
                        width: '100%',
                        textDecoration: 'none',
                      }}
                      to="/contact"
                    >
                      <LinkItems>
                        <IconImage
                          src="/icons/Contact.svg"
                          alt="Contact Icon"
                        />
                        <LinkText>contact</LinkText>
                      </LinkItems>
                    </Link>
                  </MenuItem>

                  <MenuItem>
                    <Link
                      onClick={() => {
                        setAnchorEl(null);
                      }}
                      style={{
                        width: '100%',
                        textDecoration: 'none',
                      }}
                      to="/creatives"
                    >
                      <LinkItems>
                        <IconImage
                          src="/icons/Creatives.svg"
                          alt="Creatives Icon"
                        />
                        <LinkText>creatives</LinkText>
                      </LinkItems>
                    </Link>
                  </MenuItem>

                  <MenuItem>
                    <Link
                      onClick={() => {
                        setAnchorEl(null);
                      }}
                      style={{
                        width: '100%',
                        textDecoration: 'none',
                      }}
                      to="/real-estate"
                    >
                      <LinkItems>
                        <IconImage
                          src="/icons/Real_Estate.svg"
                          alt="Real Estate Icon"
                        />
                        <LinkText>Real estate</LinkText>
                      </LinkItems>
                    </Link>
                  </MenuItem>

                  <MenuItem>
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
                        onClick={() => {
                          setAnchorEl(null);
                        }}
                        style={{
                          width: '100%',
                          textDecoration: 'none',
                          marginRight: '10px',
                        }}
                        to="/login"
                      >
                        <LinkItems>
                          <IconImage src="/icons/Login.svg" alt="Login Icon" />
                          <LinkText>login</LinkText>
                        </LinkItems>
                      </Link>
                    )}
                  </MenuItem>

                  <MenuItem>
                    {' '}
                    {isUserSignedIn ? (
                      <LogoutButtonMobile />
                    ) : (
                      <Link
                        onClick={() => {
                          setAnchorEl(null);
                        }}
                        style={{
                          width: '100%',
                          textDecoration: 'none',
                        }}
                        to="/signup"
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
                </StyledMenu>
              </>
            )}
          </Box>
        </MenuWrap>

        <TopNavigationBarContainer isMarketplaceScreen={isMarketplaceScreen}>
          <Box
            sx={{
              marginLeft: '2rem',
            }}
          >
            <Link
              onClick={() => {
                setShow(false);
              }}
              to="/"
            >
              <Logo
                src={
                  isMarketplaceScreen
                    ? `${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/logo-black-for-map.svg`
                    : `${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/wxllspace-logo.png`
                }
              />
            </Link>
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
              flexGrow: 1,
            }}
          >
            <CustomMenuItem>
              <Link
                style={{
                  color: isMarketplaceScreen ? '#06102B' : '#FFF',
                  fontFamily: 'var(--font-family-montserrat)',
                  fontSize: 'var(--font-size-xs)',
                  fontWeight: 700,
                  fontStyle: 'normal',
                  textDecoration: 'none',
                }}
                to="/about"
              >
                about us
              </Link>
            </CustomMenuItem>

            <CustomMenuItem>
              <Link
                onClick={() => {
                  setShow(!show);
                }}
                style={{
                  color: isMarketplaceScreen ? '#06102B' : '#FFF',
                  fontFamily: 'var(--font-family-montserrat)',
                  fontSize: 'var(--font-size-xs)',
                  fontWeight: 700,
                  fontStyle: 'normal',
                  textDecoration: 'none',
                }}
                to="/marketplace?state=New%20York&search-type=artists"
              >
                marketplace
              </Link>
            </CustomMenuItem>

            <CustomMenuItem>
              <Link
                style={{
                  color: isMarketplaceScreen ? '#06102B' : '#FFF',
                  fontFamily: 'var(--font-family-montserrat)',
                  fontSize: 'var(--font-size-xs)',
                  fontWeight: 700,
                  fontStyle: 'normal',
                  textDecoration: 'none',
                }}
                to="/creatives"
              >
                creative
              </Link>
            </CustomMenuItem>

            <CustomMenuItem>
              <Link
                style={{
                  color: isMarketplaceScreen ? '#06102B' : '#FFF',
                  fontFamily: 'var(--font-family-montserrat)',
                  fontSize: 'var(--font-size-xs)',
                  fontWeight: 700,
                  fontStyle: 'normal',
                  textDecoration: 'none',
                }}
                to="/real-estate"
              >
                real estate
              </Link>
            </CustomMenuItem>

            <CustomMenuItem>
              <Link
                style={{
                  color: isMarketplaceScreen ? '#06102B' : '#FFF',
                  fontFamily: 'var(--font-family-montserrat)',
                  fontSize: 'var(--font-size-xs)',
                  fontWeight: 700,
                  fontStyle: 'normal',
                  textDecoration: 'none',
                }}
                to="/contact"
              >
                contact
              </Link>
            </CustomMenuItem>
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
                to={
                  isUserSignedIn
                    ? userDetail && userDetail.role === 'artist'
                      ? `/artist/${userDetail.slug}`
                      : userDetail && userDetail.role === 'wxllowner'
                      ? `/wall/${userDetail.wall_slug}`
                      : '/login'
                    : '/login'
                } // API work
                style={{
                  textDecoration: 'none',
                }}
              >
                <Login
                  style={{ color: isMarketplaceScreen ? '#06102B' : '#FFF' }}
                >
                  {isUserSignedIn
                    ? userDetail.artist_name || userDetail.name
                    : 'login'}
                </Login>
              </Link>
              <span
                style={{
                  marginLeft: '16px',
                }}
              >
                {isUserSignedIn ? (
                  <LogoutButton />
                ) : (
                  <Link to="/signup" style={{ textDecoration: 'none' }}>
                    <SignupButton />
                  </Link>
                )}
              </span>
            </LoginAndSignupContainer>
          </Box>
        </TopNavigationBarContainer>
      </Box>
    </>
  );
};

export const ValignTextMiddle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MontserratBoldWhite10px = css`
  color: var(--white);
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-xs);
  font-weight: 700;
  font-style: normal;
`;

const TopNavigationBarContainer = (props) => {
  const topNavBarContainerStyles = props.isMarketplaceScreen
    ? {
        height: '80px',
        display: 'flex',
        padding: {
          xs: '0px',
          sm: '0px',
          md: '18.8px 61px',
          lg: '18.8px 61px',
          xl: '18.8px 61px',
        },
        justifyContent: {
          xs: 'flex-start',
          sm: 'flex-start',
          md: 'space-between',
          lg: 'space-between',
          xl: 'space-between',
        },
        alignItems: 'center',
        width: '100%',
        backgroundColor: props.isMarketplaceScreen ? 'transparent' : '#06102b',
        color: '#06102b',
        fontFamily: 'var(--font-family-montserrat)',
        fontSize: 'var(--font-size-xs)',
        fontWeight: 700,
        fontStyle: 'normal',
      }
    : {
        position: 'fixed',
        height: '80px',
        display: 'flex',
        padding: {
          xs: '0px',
          sm: '0px',
          md: '18.8px 61px',
          lg: '18.8px 61px',
          xl: '18.8px 61px',
        },
        justifyContent: {
          xs: 'flex-start',
          sm: 'flex-start',
          md: 'space-between',
          lg: 'space-between',
          xl: 'space-between',
        },
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'var(--bon-jour)',
        backdropFilter: 'blur(40px) brightness(100%)',
        color: 'var(--white)',
        fontFamily: 'var(--font-family-montserrat)',
        fontSize: 'var(--font-size-xs)',
        fontWeight: 700,
        fontStyle: 'normal',
        WebkitBackdropFilter: 'blur(40px) brightness(100%)',
        zIndex: 1000,
      };

  return (
    <Box sx={topNavBarContainerStyles} {...props}>
      {props.children}
    </Box>
  );
};

export const CustomMenuItem = (props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: {
          xs: '48px',
          sm: '48px',
          md: '15px',
          lg: '15px',
          xl: '15px',
        },
        margin: {
          md: '0 1em',
          lg: '0 1em',
          xl: '0 1em',
        },
        minWidth: '46px',
        letterSpacing: 0,
        lineHeight: '15px',
        whiteSpace: 'nowrap',
        textTransform: 'uppercase',
      }}
    >
      {props.children}
    </Box>
  );
};

const LoginAndSignupContainer = styled.div`
  align-self: flex-end;
  display: flex;
  align-items: center;
  min-width: 145px;
`;

const Login = styled.button`
  ${ValignTextMiddle}
  ${MontserratBoldWhite10px}
  height: 15px;
  margin-bottom: 0;
  min-width: 30px;
  letter-spacing: 0;
  line-height: 15px;
  white-space: nowrap;
  text-transform: capitalize;
  background-color: inherit;
  outline: none;
  border: none;
  cursor: pointer;
`;

TopNavigationBar.propTypes = {
  isMarketplaceScreen: PropTypes.bool,
};

TopNavigationBar.defaultProps = {
  isMarketplaceScreen: false,
};

const Logo = styled.img`
  width: 183px;
  height: 33px;
`;
const IconImage = styled.img`
  width: 20px;
`;

const LinkItems = (props) => {
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

const LinkText = (props) => {
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
