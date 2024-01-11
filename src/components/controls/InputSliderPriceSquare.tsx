import React from 'react';
import { Box } from '@mui/material';
import SliderUseRCSlider from './SliderUseRCSlider';
import InputLabel from './InputLabel';
import {
  DEFAULT_SLIDER_MARKS,
  DEFAULT_SLIDER_MAX_VALUE,
  DEFAULT_SLIDER_MIN_VALUE,
} from '../../constants/commonConstants';

const InputSliderPriceSquare = (props: {
  styleWrap: React.CSSProperties;
  sliderValue: number;
  setSliderValue: (value: number) => void;
}) => {
  const { styleWrap, sliderValue, setSliderValue } = props;
  return (
    <Box sx={styleWrap}>
      <InputLabel
        text={`Price per Square Foot: $${sliderValue}`}
        styleWrap={{
          position: 'relative',
          marginBottom: '12px',
        }}
      />
      <Box
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.13)',
          padding: '14px 18px 15px 18px',
          borderRadius: '8px',
          height: '63px',
        }}
      >
        <Box
          sx={{
            position: 'relative',
          }}
        >
          <SliderUseRCSlider
            marks={DEFAULT_SLIDER_MARKS}
            min={DEFAULT_SLIDER_MIN_VALUE}
            max={DEFAULT_SLIDER_MAX_VALUE}
            defaultValue={sliderValue}
            onChange={(val: any) => setSliderValue(val)}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default InputSliderPriceSquare;
