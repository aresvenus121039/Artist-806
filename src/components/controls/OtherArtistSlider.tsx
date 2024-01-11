import React, { useRef } from 'react';
import _ from 'lodash';
import { styled } from '@mui/system';
import { makeStyles } from '@mui/styles';
import Slider from 'react-slick';
import { RightArrowIcon, LeftArrowIcon } from './../icons/index';
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from '@mui/core/ButtonUnstyled';
import { Box, CardMedia, Typography, Grid } from '@mui/material';
import { cloudflareImage } from '@/utility/images';
import { Right_square } from './../icons/index';

const useStyles = makeStyles((theme: any) => ({
  artistName: {
    fontSize: '40px',
    fontWeight: 700,
    fontFamily: 'var(--font-family-formula-condensed)',
    fontStyle: 'normal',
    letterSpacing: '2px',
    textTransform: 'uppercase',
  },
  artistInfo: {
    opacity: 0,
    transition: '0.5s',
  },
  wrapGrid: {
    '&:hover div': {
      opacity: 1,
    },
  },
}));

const CustomButtonRoot = styled('button')(`
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(50px);
  padding: 12px;
  border-radius: 100px;
  transition: all 200ms ease;
  cursor: pointer;
  box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 0 rgba(0, 127, 255, 0);
  border: 1px solid white;
  width: 60px;
  height: 60px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: 0 0 0 0 rgba(0, 127, 255, 0);
  }
`);

function NextArrowButton(props: any) {
  return (
    <ButtonUnstyled {...props} component={CustomButtonRoot}>
      <RightArrowIcon />
    </ButtonUnstyled>
  );
}
function PrevArrowButton(props: any) {
  return (
    <ButtonUnstyled {...props} component={CustomButtonRoot}>
      <LeftArrowIcon />
    </ButtonUnstyled>
  );
}

const ArtistCard = ({ artist }: { artist: Record<string, any> }) => {

  const classes = useStyles();
  const images = _.get(artist, 'artist_image', []) || [];
  const names = _.get(artist, 'artistName', []) || [];

  console.log("[artist]",images);

  return (
    <Box
      sx={{
        margin: '0 18px',
        borderRadius: '40px 40px 16px 16px',
        background: 'rgba(255, 255, 255, 0.10)',
        padding: '16px',
        position: 'relative',
      }}
      className={classes.wrapGrid}
    >
      <CardMedia
        component="img"
        image={images.length > 0 ? cloudflareImage(images[0].location) : ''}
        sx={{
          height: '425px',
          display: 'block',
          objectFit: 'cover',
          objectPosition: 'center',
          borderRadius: '20px',
          marginBottom: '14px',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        className={classes.artistInfo}
      >
        <Right_square />
        {names && (
          <Box>
            <Typography
              sx={{
                position: 'absolute',
                width: '250px',
                left: '-200px',
                top: '150px',
                '@media(max-width: 1900px)': {
                  left: '-160px',
                },
              }}
              className={classes.artistName}
            >
              {names}
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

interface OtherArtistsSliderProps {
  otherArtists: Array<Record<string, any>>;
}

const OtherArtistsSlider: React.FC<OtherArtistsSliderProps> = ({
  otherArtists,
}) => {
  const sliderRef = useRef<Slider>(null);

  const next = () => {
    sliderRef.current?.slickNext();
  };

  const previous = () => {
    sliderRef.current?.slickPrev();
  };

  const settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const imageLength = otherArtists.length;

  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      <Slider ref={sliderRef} {...settings}>
        {imageLength > 0 &&
          otherArtists.map((artist, i) => (
            <ArtistCard key={i} artist={artist} />
          ))}
      </Slider>
      {imageLength > 1 && (
        <Box
          sx={{
            position: 'absolute',
            display: 'flex',
            top: '10px',
            right: '42px',
            gap: '24px',
            '@media(max-width: 425px)': {
              top: '155px',
              right: '30%',
            },
          }}
        >
          <Box
            sx={{
              zIndex: 10,
            }}
          >
            <PrevArrowButton onClick={previous} />
          </Box>
          <Box
            sx={{
              zIndex: 10,
            }}
          >
            <NextArrowButton onClick={next} />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default OtherArtistsSlider;
