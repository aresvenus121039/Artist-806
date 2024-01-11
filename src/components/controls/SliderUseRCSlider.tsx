import React from 'react';
import Slider, { createSliderWithTooltip } from 'rc-slider';

const SliderToolTip = createSliderWithTooltip(Slider);

const SliderUseRCSlider = (props: any) => {
  const { defaultValue, onChange, min, max, marks } = props;
  return (
    <SliderToolTip
      marks={marks}
      min={min}
      max={max}
      defaultValue={defaultValue}
      tipFormatter={(value) => `${value}`}
      tipProps={{
        placement: 'top',
        visible: true,
        prefixCls: 'rc-slider-tooltip',
      }}
      onChange={onChange}
    />
  );
};

export default SliderUseRCSlider;
