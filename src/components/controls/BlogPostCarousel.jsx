import React from 'react';
import Slider from 'react-slick';
import { Container, Box } from '@mui/material';
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from '@mui/core/ButtonUnstyled';
import { styled } from '@mui/system';
import { RightArrowIcon } from './../icons/index';
import { BlogPostCard } from './../controls/BlogPostCard';
import { cloudflareImage } from '@/utility/images';

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

function NextArrowButton(props) {
  return (
    <ButtonUnstyled {...props} component={CustomButtonRoot}>
      <RightArrowIcon />
    </ButtonUnstyled>
  );
}
const CustomSlide = (props) => {
  return (
    <BlogPostCard
      featuredImage={cloudflareImage(
        'https://anima-uploads.s3.amazonaws.com/projects/61686e84d5059459cbead39b/releases/617f74fd43122ccd822c7f73/img/featured-image@2x.png'
      )}
      blog="Blog"
      text1="Lorem ipsum dolor sit amet, consectetur adipiscing."
    />
  );
};

export class BlogPostCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
  }

  next() {
    this.slider.slickNext();
  }

  render() {
    const settings = {
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      initialSlide: 0,
      centerPadding: '150px',
      className: 'center',
      centerMode: true,
      responsive: [
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            centerMode: true,
            className: 'center',
            centerPadding: '150px',
          },
        },
        {
          breakpoint: 1366,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            centerMode: true,
            className: 'center',
            centerPadding: '120px',
          },
        },
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            centerMode: true,
            className: 'center',
            centerPadding: '100px',
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            className: 'center',
            centerPadding: '10px',
          },
        },
        {
          breakpoint: 1194,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            centerMode: true,
            className: 'center',
            centerPadding: '55px',
          },
        },
        {
          breakpoint: 1180,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            centerMode: true,
            className: 'center',
            centerPadding: '50px',
          },
        },
        {
          breakpoint: 1080,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            className: 'center',
            centerPadding: '270px',
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            className: 'center',
            centerPadding: '240px',
          },
        },
        {
          breakpoint: 950,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            className: 'center',
            centerPadding: '200px',
          },
        },
        {
          breakpoint: 926,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            className: 'center',
            centerPadding: '190px',
          },
        },
        {
          breakpoint: 915,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            className: 'center',
            centerPadding: '185px',
          },
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            className: 'center',
            centerPadding: '180px',
          },
        },
        {
          breakpoint: 896,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            centerMode: true,
            className: 'center',
            centerPadding: '150px',
          },
        },
        {
          breakpoint: 854,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            centerMode: true,
            className: 'center',
            centerPadding: '130px',
          },
        },
        {
          breakpoint: 844,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            centerMode: true,
            className: 'center',
            centerPadding: '120px',
          },
        },
        {
          breakpoint: 820,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            centerMode: true,
            className: 'center',
            centerPadding: '110px',
          },
        },
        {
          breakpoint: 812,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            centerMode: true,
            className: 'center',
            centerPadding: '110px',
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            centerMode: true,
            className: 'center',
            centerPadding: '100px',
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            centerPadding: '90px',
            centerMode: true,
            className: 'center',
          },
        },
        {
          breakpoint: 720,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            centerPadding: '65px',
            centerMode: true,
            className: 'center',
          },
        },
        {
          breakpoint: 667,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            centerPadding: '40px',
            centerMode: true,
            className: 'center',
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: '10px',
            centerMode: true,
            className: 'center',
          },
        },
        {
          breakpoint: 428,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: '65px',
            centerMode: true,
            className: 'center',
          },
        },
        {
          breakpoint: 414,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: '60px',
            centerMode: true,
            className: 'center',
          },
        },
        {
          breakpoint: 390,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: '45px',
            centerMode: true,
            className: 'center',
          },
        },
        {
          breakpoint: 384,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: '45px',
            centerMode: true,
            className: 'center',
          },
        },
        {
          breakpoint: 375,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: '40px',
            centerMode: true,
            className: 'center',
          },
        },
        {
          breakpoint: 360,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: '33px',
            centerMode: true,
            className: 'center',
          },
        },
      ],
    };

    return (
      <Box
        sx={{
          paddingTop: '1rem',
          paddingBottom: '1rem',
          maxWidth: '1440px',
          width: '100%',
          margin: 'auto',
        }}
      >
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          <CustomSlide index={1} />
          <CustomSlide index={2} />
          <CustomSlide index={3} />
          <CustomSlide index={4} />
          <CustomSlide index={5} />
          <CustomSlide index={6} />
        </Slider>

        {/* arrows container */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}
        >
          <Box
            sx={{
              position: 'relative',
              top: {
                xs: '-120px',
                sm: '-120px',
                md: '-195px',
                lg: '-195px',
                xl: '-195px',
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
