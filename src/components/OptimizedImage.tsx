import { Button } from '@mui/material';
import { Box } from '@mui/system';
import Image, { ImageProps } from 'next/image';

const OptimizedImage = ({ src, alt, ...props }: ImageProps) => {
  // Modify the source to use Cloudflare's Image Resizing
  const modifiedSrc = `https://eng.wxllspace.com/cdn-cgi/image/format=webp/${src}`;

  return (
    <Box
      sx={{ ...props.style, position: 'relative' }}
      className={props.className}
    >
      <Image src={modifiedSrc} alt={alt} {...props} priority fill />
      <Button
        variant="outlined"
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          borderRadius: '1000px',
          background: '#FFF',
          boder: '1px solid #FFF',
          backdropFilter: 'blur(20px)',
          padding: '18px 48px !important',
          color: '#06112B',
          textAlign: 'center',
          fontFamily: 'Roboto',
          fontSize: '16px',
          fontStyle: 'normal',
          fontWeight: '900',
          lineHeight: '25px',
          letterSpacing: '1.6px',
        }}
      >
        contact artist
      </Button>
    </Box>
  );
};

export default OptimizedImage;
