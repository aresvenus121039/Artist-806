import React from 'react';
import Slider from 'react-slick';
import { Box } from '@mui/material';
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from '@mui/core/ButtonUnstyled';
import { styled } from '@mui/system';
import { LeftArrowIcon, RightArrowIcon } from './../icons/index';

import ArtistCard from './../controls/ArtistCard';

const CustomButtonRoot = styled('button')(`
  background-color: rgba(220, 220, 220, 0.15);
  padding: 12px;
  border-radius: 100px;
  color: #fff;
  font-weight: 600;
  font-family: "Montserrat", Helvetica, Arial, sans-serif;
  font-size: 14px;
  transition: all 200ms ease;
  cursor: pointer;
  box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 0 rgba(0, 127, 255, 0);
  border: none;
  width: 60px;
  height: 60px;

  &:hover {
    background-color: rgba(220, 220, 220, 0.5);
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

function PrevArrowButton(props) {
  return (
    <ButtonUnstyled {...props} component={CustomButtonRoot}>
      <LeftArrowIcon />
    </ButtonUnstyled>
  );
}

function NextArrowButton(props) {
  return (
    <ButtonUnstyled {...props} component={CustomButtonRoot}>
      <RightArrowIcon />
    </ButtonUnstyled>
  );
}

const CustomSlide = (props) => {
  const { artist, loading } = props;
  return (
    <ArtistCard
      artistCard={
        artist?.artist_image[0]
          ? artist?.artist_image[0]?.location
          : `${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/placeholders/placeholder-artist-photo.png`
      }
      available="Available"
      name={artist?.name || `Andrea Key`}
      artist_name={artist?.artist_name}
      city={artist?.address?.city ? artist?.address?.city : `austin`}
      state={artist?.address?.state ? artist?.address?.state : `TX`}
      loading={loading}
      slug={artist?.slug}
      is_verified={artist?.is_verified}
    />
  );
};

export class FeaturedArtistCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    const artists = this.props.artists;
    const loading = this.props.loading;
    const settings = {
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      className: 'center',
      centerPadding: '120px',
      centerMode: true,
      responsive: [
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            centerMode: true,
            className: 'center',
            centerPadding: '30px',
          },
        },
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            centerMode: true,
            className: 'center',
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            centerMode: true,
            className: 'center',
          },
        },
        {
          breakpoint: 1194,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: false,
            infinite: true,
            centerMode: true,
            className: 'center',
            centerPadding: '70px',
          },
        },
        {
          breakpoint: 1180,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: false,
            infinite: true,
            centerMode: true,
            className: 'center',
            centerPadding: '70px',
          },
        },
        {
          breakpoint: 1080,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: false,
            infinite: true,
            centerMode: true,
            className: 'center',
            centerPadding: '25px',
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: false,
            infinite: true,
            centerMode: true,
            className: 'center',
            centerPadding: '160px',
          },
        },
        {
          breakpoint: 926,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: false,
            infinite: true,
            centerPadding: '120px',
            centerMode: true,
            className: 'center',
          },
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: false,
            infinite: true,
            centerPadding: '105px',
            centerMode: true,
            className: 'center',
          },
        },
        {
          breakpoint: 844,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: false,
            infinite: true,
            centerPadding: '78px',
            centerMode: true,
            className: 'center',
          },
        },
        {
          breakpoint: 834,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: false,
            infinite: true,
            centerPadding: '65px',
            centerMode: true,
            className: 'center',
          },
        },
        {
          breakpoint: 820,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: false,
            infinite: true,
            centerPadding: '65px',
            centerMode: true,
            className: 'center',
          },
        },
        {
          breakpoint: 810,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: false,
            infinite: true,
            centerPadding: '50px',
            centerMode: true,
            className: 'center',
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: false,
            infinite: true,
            centerPadding: '50px',
            centerMode: true,
            className: 'center',
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: false,
            infinite: true,
            centerPadding: '40px',
            centerMode: true,
            className: 'center',
          },
        },
        {
          breakpoint: 720,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            infinite: true,
            centerPadding: '180px',
            centerMode: true,
            className: 'center',
          },
        },
        {
          breakpoint: 667,
          settings: {
            arrows: false,
            infinite: true,
            centerPadding: '160px',
            centerMode: true,
            className: 'center',
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            arrows: false,
            infinite: true,
            centerPadding: '100px',
            centerMode: true,
            className: 'center',
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            infinite: true,
            centerPadding: '40px',
            centerMode: true,
            className: 'center',
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 414,
          settings: {
            arrows: false,
            infinite: true,
            centerPadding: '35px',
            centerMode: true,
            className: 'center',
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 390,
          settings: {
            arrows: false,
            infinite: true,
            centerPadding: '25px',
            centerMode: true,
            className: 'center',
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 375,
          settings: {
            arrows: false,
            infinite: true,
            centerPadding: '16px',
            centerMode: true,
            className: 'center',
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 320,
          settings: {
            arrows: false,
            infinite: true,
            centerPadding: '10px',
            centerMode: true,
            className: 'center',
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <Box
        sx={{
          paddingTop: '1rem',
          paddingBottom: '1rem',
          backgroundColor: 'transparent',
          maxWidth: '1440px',
          width: '100%',
          margin: 'auto',
        }}
      >
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          {artists &&
            artists.map((artist, idex) => (
              <CustomSlide
                key={idex}
                index={artist._id}
                artist={artist}
                loading={loading}
                is_verified={artist.is_verified}
              />
            ))}
        </Slider>

        {/* arrows */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Box
            sx={{
              position: 'relative',
              top: {
                xs: '-275px',
                sm: '-275px',
                md: '-275px',
                lg: '-275px',
                xl: '-275px',
              },
              zIndex: 10,
            }}
          >
            <PrevArrowButton onClick={this.previous} />
          </Box>

          <Box
            sx={{
              position: 'relative',
              top: {
                xs: '-275px',
                sm: '-275px',
                md: '-275px',
                lg: '-275px',
                xl: '-275px',
              },
              zIndex: 10,
            }}
          >
            <NextArrowButton onClick={this.next} />
          </Box>
        </Box>
      </Box>
    );
  }
}
