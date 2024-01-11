import React from 'react';
import Link from 'next/link';
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from '@mui/core/ButtonUnstyled';
import { styled as muiStyledSystem } from '@mui/system';
import { Box, Typography } from '@mui/material';
import { cloudflareImage } from '@/utility/images';

const CustomButtonRoot = muiStyledSystem('button')(`
  color: #f8fafc;
  font-family: "Montserrat", Helvetica, Arial, sans-serif;
  font-weight: 600;
  font-size: 6.51px;
  letter-spacing: 0;
  white-space: nowrap;
  text-transform: capitalize;
  box-shadow: 12px 12px 27px #a845f77d;
  transition: all 200ms ease;
  cursor: pointer;
  border: none;
  transition: all 200ms ease;
  height: 20px;
  min-width: 51px;
  background-color: var(--hot-magenta);
  border-radius: 4.34px;
  backdrop-filter: blur(32.540184020996094px) brightness(100%);
  -webkit-backdrop-filter: blur(32.540184020996094px) brightness(100%);

  &:hover {
    background-color: rgba(169, 69, 247, 0.5);
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: 0 0 0 0 rgba(0, 127, 255, 0);
  }
`);

export const BlogPostCard = (props) => {
  const { featuredImage, blog, text1 } = props;

  return (
    <Link
      to="/blog/1234"
      style={{
        textDecoration: 'none',
      }}
    >
      <Box
        sx={{
          width: {
            xs: '288px',
            sm: '288px',
            md: '530px',
            lg: '530px',
            xl: '530px',
          },
          marginTop: '-0.19px',
          display: 'flex',
          flexDirection: 'column',
          padding: '17.4px 17.7px',
          alignItems: 'flex-start',
          minHeight: {
            xs: '180px',
            sm: '180px',
            md: '332px',
            lg: '332px',
            xl: '332px',
          },
          backgroundSize: 'cover',
          backgroundPosition: '50% 50%',
          backgroundImage: `url(${cloudflareImage(featuredImage)})`,
        }}
      >
        <Box
          sx={{
            width: '211px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            minHeight: '61px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              fontFamily: 'var(--font-family-montserrat)',
              fontWeight: 600,
              color: 'var(--white)',
              fontSize: {
                xs: 'var(--font-size-s)',
                sm: 'var(--font-size-s)',
                md: 'var(--font-size-l)',
                lg: 'var(--font-size-l)',
                xl: 'var(--font-size-l)',
              },
              letterSpacing: 0,
              lineHeight: '20.8px',
              whiteSpace: 'nowrap',
            }}
          >
            {blog}
          </Box>

          <Typography
            component="p"
            variant="p"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              width: {
                xs: '208px',
                sm: '208px',
                md: '382px',
                lg: '382px',
                xl: '382px',
              },
              height: {
                xs: '38px',
                sm: '38px',
                md: '70px',
                lg: '70px',
                xl: '70px',
              },
              marginTop: {
                xs: '1rem',
                sm: '1rem',
                md: '1rem',
                lg: '2rem',
                xl: '2rem',
              },
              fontFamily: 'var(--font-family-montserrat)',
              fontWeight: 700,
              color: 'var(--white)',
              fontSize: {
                xs: 'var(--font-size-s2)',
                sm: 'var(--font-size-s2)',
                md: 'var(--font-size-xxl)',
                lg: 'var(--font-size-xxl)',
                xl: 'var(--font-size-xxl)',
              },
              letterSpacing: 0,
              lineHeight: {
                xs: '26px',
                sm: '26px',
                md: '48px',
                lg: '48px',
                xl: '48px',
              },
            }}
          >
            {text1}
          </Typography>
        </Box>

        <Box
          sx={{
            flexGrow: 3,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
          }}
        >
          <ButtonUnstyled
            LinkComponent={Link}
            to="blog"
            component={CustomButtonRoot}
            sx={{
              fontSize: {
                md: 'var(--font-size-s2)',
                lg: 'var(--font-size-s2)',
                xl: 'var(--font-size-s2)',
              },
              height: {
                md: '36.36px',
                lg: '36.36px',
                xl: '36.36px',
              },
              width: {
                md: '94.08px',
                lg: '94.08px',
                xl: '94.08px',
              },
            }}
          >
            show all
          </ButtonUnstyled>
        </Box>
      </Box>
    </Link>
  );
};
