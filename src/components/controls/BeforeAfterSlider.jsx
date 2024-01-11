import ReactBeforeSliderComponent from 'react-before-after-slider-component';

export const BeforeAfterSlider = (props) => {
  const FIRST_IMAGE = {
    imageUrl: `${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/real-estate/side-B.jpg`,
  };
  const SECOND_IMAGE = {
    imageUrl: `${process.env.NEXT_PUBLIC_REACT_APP_S3_BASE_URL}/assets/real-estate/side-A.jpg`,
  };
  return (
    <ReactBeforeSliderComponent
      currentPercentPosition={60}
      delimiterColor="#06102b"
      className={props.style}
      firstImage={FIRST_IMAGE}
      secondImage={SECOND_IMAGE}
    />
  );
};
