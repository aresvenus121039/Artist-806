import React from 'react';
import { styled } from '@mui/system';
import Slider from 'react-slick';
import { RightArrowIcon, LeftArrowIcon } from './../icons/index';
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from '@mui/core/ButtonUnstyled';
import { Box, CardMedia } from '@mui/material';
import { isDueDate } from '@/utility/index';
import { cloudflareImage } from '@/utility/images';

const CustomButtonRoot = styled('button')(`
background: rgba(113, 113, 113, 0.788);
backdrop-filter: blur(50px);
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
function PrevArrowButton(props) {
  return (
    <ButtonUnstyled {...props} component={CustomButtonRoot}>
      <LeftArrowIcon />
    </ButtonUnstyled>
  );
}

const FeaturedImagesCard = (props) => {
  const { styleWrap, styleImage, featuredImageSrc } = props;
  return (
    <Box
      sx={{
        ...styleWrap,
      }}
    >
      <CardMedia
        component="img"
        image={cloudflareImage(featuredImageSrc)}
        sx={{
          ...styleImage,
          display: 'block',
          objectFit: 'cover',
          objectPosition: 'center',
          height: {
            xs: '174px',
            sm: '453px',
            md: '462px',
          },
        }}
      />
    </Box>
  );
};

class FeaturedSliderCard extends React.Component {
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
    const settings = {
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    const imageLength = this.props.image.length;
    return (
      <Box
        sx={{
          maxWidth: '1440px',
          width: '100%',
          heigh: '200px',
          margin: 'auto',
        }}
      >
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          {this.props.image.map((item, i) => (
            <FeaturedImagesCard
              featuredImageSrc={item.location}
              key={i}
              styleWrap={{
                width: '100%',
              }}
              styleImage={{
                borderTopLeftRadius: '8px',
                borderBottomLeftRadius: '8px',
                borderTopRightRadius: { xs: '8px', md: '0' },
                borderBottomRightRadius: { xs: '8px', md: '0' },
              }}
              textLabel={false}
            />
          ))}
        </Slider>
        {imageLength > 1 && (
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
                  xs: '-120px',
                  sm: '-265px',
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
                  xs: '-120px',
                  sm: '-265px',
                },
                zIndex: 10,
              }}
            >
              <NextArrowButton onClick={this.next} />
            </Box>
          </Box>
        )}
      </Box>
    );
  }
}

export default FeaturedSliderCard;
