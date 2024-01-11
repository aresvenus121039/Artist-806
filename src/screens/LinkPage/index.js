import React from 'react';
import { Box, Button, CardMedia, Typography } from '@mui/material';

const LinkPage = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#000000',
        position: 'relative',
        minHeight: '100vh',
      }}
    >
      <CardMedia
        component="img"
        src="/bg-star.svg"
        sx={{
          position: 'absolute',
          top: '0',
          right: '0',
        }}
      />
      <Box
        sx={{
          position: 'relative',
          zIndex: 3,
        }}
      >
        <Box
          sx={{
            pt: '100px',
            pb: '40px',
            maxWidth: '255px',
            width: '100%',
            textAlign: 'center',
            mx: 'auto',
          }}
        >
          <CardMedia
            component="img"
            src="/title-logo-purple.svg"
            sx={{
              width: '165px',
              mx: 'auto',
              mb: '10px',
            }}
          />
          <Typography
            sx={{
              color: '#FFFFFF',
              fontFamily: 'var(--font-family-montserrat)',
              fontSize: '12px',
              fontWeight: 700,
              mb: '10px',
            }}
          >
            Jordan Giha | founder + ceo
          </Typography>
          <Typography
            sx={{
              color: '#FFFFFF',
              fontFamily: 'var(--font-family-montserrat)',
              fontSize: '12px',
            }}
          >
            Connecting creatives to real estate for community development.
          </Typography>
        </Box>

        <Box
          sx={{
            maxWidth: '240px',
            width: '100%',
            mx: 'auto',
          }}
        >
          {/* item link */}
          <Button
            href="https://wxllspace.com/"
            sx={{
              display: 'flex',
              justifyContent: 'start',
              px: '10px',
              py: '15px',
              textTransform: 'capitalize',
            }}
          >
            <Box
              sx={{
                mr: '12px',
              }}
            >
              <CardMedia component="img" src="/icon-link.svg" />
            </Box>
            <Typography
              sx={{
                color: '#FFFFFF',
                fontFamily: 'var(--font-family-montserrat)',
                fontSize: '14px',
                fontWeight: 700,
              }}
            >
              WXLLSPACE.com
            </Typography>
          </Button>

          {/* item link */}
          <Button
            href="https://www.facebook.com/wxllspace"
            sx={{
              display: 'flex',
              justifyContent: 'start',
              px: '10px',
              py: '15px',
              textTransform: 'capitalize',
            }}
          >
            <Box
              sx={{
                mr: '12px',
              }}
            >
              <CardMedia component="img" src="/icon-facebook.svg" />
            </Box>
            <Typography
              sx={{
                color: '#FFFFFF',
                fontFamily: 'var(--font-family-montserrat)',
                fontSize: '14px',
                fontWeight: 700,
              }}
            >
              Facebook
            </Typography>
          </Button>

          {/* item link */}
          <Button
            href="https://twitter.com/WXLLSPACE"
            sx={{
              display: 'flex',
              justifyContent: 'start',
              px: '10px',
              py: '15px',
              textTransform: 'capitalize',
            }}
          >
            <Box
              sx={{
                mr: '12px',
              }}
            >
              <CardMedia component="img" src="/icon-twitter.svg" />
            </Box>
            <Typography
              sx={{
                color: '#FFFFFF',
                fontFamily: 'var(--font-family-montserrat)',
                fontSize: '14px',
                fontWeight: 700,
              }}
            >
              Twitter
            </Typography>
          </Button>

          {/* item link */}
          <Button
            href="https://www.instagram.com/wxll.space/"
            sx={{
              display: 'flex',
              justifyContent: 'start',
              px: '10px',
              py: '15px',
              textTransform: 'capitalize',
            }}
          >
            <Box
              sx={{
                mr: '12px',
              }}
            >
              <CardMedia component="img" src="/icon-instagram.svg" />
            </Box>
            <Typography
              sx={{
                color: '#FFFFFF',
                fontFamily: 'var(--font-family-montserrat)',
                fontSize: '14px',
                fontWeight: 700,
              }}
            >
              Instagram
            </Typography>
          </Button>

          {/* item link */}
          <Button
            href="https://www.linkedin.com/company/wxllspace"
            sx={{
              display: 'flex',
              justifyContent: 'start',
              px: '10px',
              py: '15px',
              textTransform: 'capitalize',
            }}
          >
            <Box
              sx={{
                mr: '12px',
              }}
            >
              <CardMedia component="img" src="/icon-linkedin.svg" />
            </Box>
            <Typography
              sx={{
                color: '#FFFFFF',
                fontFamily: 'var(--font-family-montserrat)',
                fontSize: '14px',
                fontWeight: 700,
              }}
            >
              Linkedin
            </Typography>
          </Button>

          {/* item link */}
          <Button
            href="https://anchor.fm/wxllspace"
            sx={{
              display: 'flex',
              justifyContent: 'start',
              px: '10px',
              py: '15px',
              textTransform: 'capitalize',
            }}
          >
            <Box
              sx={{
                mr: '12px',
              }}
            >
              <CardMedia component="img" src="/icon-spotify.svg" />
            </Box>
            <Typography
              sx={{
                color: '#FFFFFF',
                fontFamily: 'var(--font-family-montserrat)',
                fontSize: '14px',
                fontWeight: 700,
              }}
            >
              The WXLLSPACE.Station
            </Typography>
          </Button>

          {/* item link */}
          <Button
            href="https://twitter.com/WXLLSPACE"
            sx={{
              display: 'flex',
              justifyContent: 'start',
              px: '10px',
              py: '15px',
              textTransform: 'capitalize',
            }}
          >
            <Box
              sx={{
                mr: '12px',
              }}
            >
              <CardMedia component="img" src="/icon-link.svg" />
            </Box>
            <Typography
              sx={{
                color: '#FFFFFF',
                fontFamily: 'var(--font-family-montserrat)',
                fontSize: '14px',
                fontWeight: 700,
              }}
            >
              Community
            </Typography>
          </Button>

          {/* item link */}
          <Button
            href="https://wxllspace.notion.site/WXLLSPACE-Press-Kit-2132714d418849959ad284d0d2ce0990"
            sx={{
              display: 'flex',
              justifyContent: 'start',
              px: '10px',
              py: '15px',
              textTransform: 'capitalize',
            }}
          >
            <Box
              sx={{
                mr: '12px',
              }}
            >
              <CardMedia component="img" src="/icon-link.svg" />
            </Box>
            <Typography
              sx={{
                color: '#FFFFFF',
                fontFamily: 'var(--font-family-montserrat)',
                fontSize: '14px',
                fontWeight: 700,
              }}
            >
              Press Kit
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default LinkPage;
