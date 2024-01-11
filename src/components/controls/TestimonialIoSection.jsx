import React from 'react';
import IframeResizer from 'iframe-resizer-react';

const TestimonialIoSection = () => {
  return (
    <div>
      <IframeResizer
        src="https://embed.testimonial.to/w/artists?theme=dark&card=base"
        style={{ width: '1px', minWidth: '100%' }}
      />
    </div>
  );
};

export default TestimonialIoSection;
