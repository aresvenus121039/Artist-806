import React, { useRef, useState, FC } from 'react';
import { styled } from '@mui/system';
import { makeStyles } from '@mui/styles';
import Slider from 'react-slick';
import { RightArrowIcon, LeftArrowIcon } from './../icons/index';
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from '@mui/core/ButtonUnstyled';
import { Box, CardMedia, Grid, Typography } from '@mui/material';
import { cloudflareImage } from '@/utility/images';

const useStyles = makeStyles((theme: any) => ({
  artist_name: {
    [theme.breakpoints.down('md')]: {
      fontFamily: 'var(--font-family-montserrat)',
      fontStyle: 'normal',
      fontWeight: 900,
      fontSize: 'var(--font-size-l)',
      color: 'var(--white)',
      letterSpacing: 0,
      whiteSpace: 'wrap',
      wordBreak: 'break-word',
    },
    [theme.breakpoints.up('md')]: {
      fontFamily: 'var(--font-family-montserrat)',
      fontStyle: 'normal',
      fontWeight: 900,
      fontSize: 'var(--font-size-xxxl)',
      color: 'var(--white)',
      letterSpacing: 0,
      whiteSpace: 'wrap',
      wordBreak: 'break-word',
    },
  },
  artistLocation: {
    [theme.breakpoints.down('md')]: {
      fontFamily: 'var(--font-family-montserrat)',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: 'var(--font-size-xs)',
      color: 'var(--white-42)',
      letterSpacing: 0,
      whiteSpace: 'normal',
      textTransform: 'uppercase',
    },
    [theme.breakpoints.up('md')]: {
      fontFamily: 'var(--font-family-montserrat)',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: 'var(--font-size-l)',
      color: 'var(--white-42)',
      letterSpacing: 0,
      whiteSpace: 'normal',
      textTransform: 'uppercase',
    },
  },
  wrapGrid: {
    '&:hover > .artistInfo': {
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

const NextArrowButton = (props: any) => {
  return (
    <ButtonUnstyled {...props} component={CustomButtonRoot}>
      <RightArrowIcon />
    </ButtonUnstyled>
  );
};

const PrevArrowButton = (props: any) => {
  return (
    <ButtonUnstyled {...props} component={CustomButtonRoot}>
      <LeftArrowIcon />
    </ButtonUnstyled>
  );
};

const Group3316 = styled('div')(`
  opacity: 0;
  position: absolute;
  bottom: 20px;
  right: 20px;
  left: 20px;
  padding: 15.5px 20px;
  background-color: #00000069;
  backdrop-filter: blur(40px) brightness(100%);
  -webkit-backdrop-filter: blur(40px) brightness(100%);
  text-align: left;
  border-radius: 10px;
  transition: opacity 0.5s;
  text-overflow: ellipsis;
  max-height: 200px;
  overflow-x: hidden;
  overflow-y: hidden;
`);

const Location = styled('div')(`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--white-42);
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-l);
  font-weight: 700;
  font-style: normal;
  letter-spacing: 0;
  line-height: 90px;
  white-space: normal;
`);

const SliderItem = (props: any) => {
  const classes = useStyles();
  const { styleWrap, styleImage, item } = props;
  return (
    <Box
      sx={{
        ...styleWrap,
      }}
    >
      <CardMedia
        component="img"
        image={cloudflareImage(item.location)}
        sx={{
          ...styleImage,
          display: 'block',
          objectFit: 'cover',
          objectPosition: 'center',
          height: {
            xs: '320px',
            sm: '560px',
            md: '720px',
          },
        }}
        className={classes.wrapGrid}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '60px',
          left: '60px',
        }}
      >
        {(item.title || item.address) && (
          <Group3316 className="artistInfo">
            {item.title && (
              <Typography className={classes.artist_name}>
                {item.title}
              </Typography>
            )}
            {item.address && (
              <Location>
                <Typography className={classes.artistLocation}>
                  {item.address}
                </Typography>
              </Location>
            )}
          </Group3316>
        )}
      </Box>
    </Box>
  );
};

interface MuralsSliderProps {
  murals: { location: string; title?: string; address?: string }[];
}

const MuralsSlider: FC<MuralsSliderProps> = ({ murals }) => {
  const sliderRef = useRef<Slider | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const next = () => {
    sliderRef.current?.slickNext();
  };

  const previous = () => {
    sliderRef.current?.slickPrev();
  };

  const settings = {
    arrows: false,
    infinite: true,
    fade: true,
    speed: 900,
    autoplay: false,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current: number) => setCurrentSlide(current),
  };

  const imageLength = murals.length;

  return (
    <Box
      sx={{
        width: '100%',
        position: 'relative',
      }}
    >
      <Slider ref={sliderRef} {...settings}>
        {murals.map((item, i) => (
          <SliderItem
            item={item}
            key={i}
            styleWrap={{
              width: '100%',
              position: 'relative',
            }}
            styleImage={{
              borderRadius: '25px',
            }}
            textLabel=""
          />
        ))}
      </Slider>
      {imageLength > 1 && (
        <Box
          sx={{
            position: 'absolute',
            display: 'flex',
            top: '-75px',
            right: 0,
            gap: '24px',
            '@media(max-width: 425px)': {
              top: '-69px',
              right: '27%',
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
      <Box sx={{ overflow: 'hidden' }}>
        <Grid
          container
          columnSpacing={2}
          rowSpacing={1}
          sx={{
            marginTop: '16px',
            paddingBottom: '10px',
            flexWrap: 'nowrap',
            overflow: 'scroll',
            '&::-webkit-scrollbar': {
              width: 0,
              display: 'none',
            },
          }}
        >
          {murals.map((item, idx) => (
            <Grid
              item
              key={idx}
              onClick={() => {
                sliderRef.current?.slickGoTo(idx);
              }}
            >
              <CardMedia
                component="img"
                image={cloudflareImage(item.location)}
                sx={{
                  display: 'block',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  width: '60px',
                  height: '60px',
                  borderRadius: '12px',
                  border: `1.5px solid ${
                    currentSlide === idx ? '#fff' : 'transparent'
                  }`,
                  opacity: `${currentSlide === idx ? '1' : '0.4'}`,
                  '&:hover': {
                    opacity: 1,
                  },
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default MuralsSlider;
