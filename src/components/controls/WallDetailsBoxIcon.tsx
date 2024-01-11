import React, { useState } from 'react';
import { Box, CardMedia, Typography, Button } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { cloudflareImage } from '@/utility/images';

const useStyles = makeStyles((theme) => ({
  ripple: {
    backgroundPosition: 'center',
    transition: 'background 0.4s',
    '&:hover': {
      background:
        '#3c445a radial-gradient(circle, transparent 1%, #3c445a 1%) center/15000%',
      cursor: 'pointer',
    },
    '&:active': {
      backgroundColor: '#06102b',
      backgroundSize: '100%',
      transition: 'background 0s',
    },
  },
}));

interface WallDetailsBoxIconProps {
  styleWrap?: React.CSSProperties;
  iconImageSrc: string;
  text: string;
  popoverText?: string;
}

const WallDetailsBoxIcon: React.FC<WallDetailsBoxIconProps> = (props: any) => {
  const { styleWrap, iconImageSrc, text, popoverText } = props;
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  const handlePopoverOpen = () => {
    setIsOpen(!isOpen);
  };

  const handlePopoverClose = () => {
    setIsOpen(false);
  };

  return (
    <Box
      sx={{
        position: 'relative',
      }}
    >
      {/* ripple */}
      {popoverText && (
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            top: '-55px',
            opacity: isOpen ? 1 : 0,
            visibility: isOpen ? 'visible' : 'hidden',
            transition: '0.4s',
          }}
        >
          <Box
            sx={{
              backgroundColor: '#FFF',
              p: '8px',
              borderRadius: '4px',
            }}
          >
            <Typography
              sx={{
                color: '#000',
                fontFamily: 'var(--font-family-montserrat)',
                lineHeight: 1.5,
                fontSize: '12px',
                fontWeight: '600',
                fontStyle: 'normal',
              }}
            >
              {popoverText}
            </Typography>
          </Box>
          {/* arrow */}
          <Box
            sx={{
              width: 0,
              height: 0,
              borderLeft: '15px solid transparent',
              borderRight: '15px solid transparent',
              borderTop: '15px solid #fff',
              marginTop: '-4px',
              borderRadius: '6px',
              marginLeft: '15px',
            }}
          ></Box>
        </Box>
      )}

      {/* content */}
      <Button
        variant="outlined"
        sx={{
          ...styleWrap,
          padding: '19.74px 20px',
          borderRadius: '12px',
          border: '1px solid rgba(255, 255, 255, 0.2) !important',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'nowrap',
          position: 'relative',
          width: '100% !important',
          justifyContent: 'start',
          textTransform: 'unset !important',
        }}
        onClick={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        <CardMedia
          component="img"
          image={iconImageSrc}
          sx={{
            width: {
              xs: '16px',
              sm: '24px',
            },
            height: {
              xs: '16px',
              sm: '25px',
            },
            flex: '0 1 auto',
          }}
        />

        <Typography
          component="p"
          sx={{
            color: '#FFFFFF',
            fontFamily: 'var(--font-family-montserrat)',
            fontSize: {
              xs: '12px',
              sm: '14px',
            },
            fontWeight: '600',
            fontStyle: 'normal',
            flex: '0 1 auto',
            padding: {
              xs: '0 0 0 8px',
              sm: '0 0 0 12px',
            },
            textTransform: 'capitalize',
          }}
        >
          {text}
        </Typography>
      </Button>
    </Box>
  );
};

export default WallDetailsBoxIcon;
