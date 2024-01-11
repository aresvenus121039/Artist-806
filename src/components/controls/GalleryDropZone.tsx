import React, { useCallback, useEffect, useState } from 'react';
import { Box, CardMedia, Typography } from '@mui/material';
import { styled } from '@mui/system';
import InputLabel from './InputLabel';
import { cloudflareImage } from '@/utility/images';
import { useDropzone } from 'react-dropzone';

type FileData = {
  file: File;
  dataURL: string | ArrayBuffer | null;
};

interface InputUploadProps {
  textLabel?: string;
  textLabelSmall?: string;
  multiple?: boolean;
  form: {
    setFieldValue: (field: string, value: any) => void;
    errors: any;
    values: any;
    touched: any;
  };
  field: {
    name: string;
  };
}

const Input = styled('input')({
  display: 'none',
});

const GalleryDropzone: React.FC<InputUploadProps> = (props) => {
  const {
    textLabel,
    textLabelSmall,
    multiple,
    form: { setFieldValue, errors, values, touched },
    field: { name },
  } = props;
  const [photosCount, setPhotosCount] = useState(0);

  const onDrop = useCallback((acceptedFile: Array<File>) => {}, []);

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({
      onDrop,
      accept: {
        'image/jpeg': [],
        'image/png': [],
        'image/webp': [],
        'image/heic': [],
        'image/jfif': [],
      },
    });

  const onChange = async () => {
    try {
      let filesDataURL = await Promise.all<FileData>(
        Array.from(acceptedFiles!).map((file) => {
          return new Promise((resolve, reject) => {
            let reader = new FileReader();
            reader.onload = () => resolve({ file, dataURL: reader.result });
            reader.onerror = reject;
            reader.readAsDataURL(file);
          });
        })
      );

      const currentFiles = values[name] || [];
      const updatedFiles = [...currentFiles];

      if (currentFiles.length + filesDataURL.length > 16) {
        return;
      }

      filesDataURL.forEach((newFile) => {
        const exists = updatedFiles.some(
          (existingFile) => existingFile.dataURL === newFile.dataURL
        );

        if (!exists) {
          updatedFiles.push(newFile);
        }
      });

      setFieldValue(name, updatedFiles);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    onChange();
  }, [acceptedFiles]);

  useEffect(() => {
    setPhotosCount(values[name]?.length || 0);
  }, [values[name]]);

  return (
    <Box>
      {textLabel && <InputLabel text={textLabel} />}
      {textLabelSmall && (
        <Typography
          sx={{
            fontSize: '10px',
            color: '#848381',
            fontWeight: '500',
            marginBottom: '10px',
          }}
        >
          {textLabelSmall}
        </Typography>
      )}
      <Box
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.13)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '8px',
          border: '1px dashed #FFFFFF',
          width: '100%',
          height: 200,
          '&:hover': {
            cursor: 'pointer',
          },
        }}
        {...getRootProps()}
      >
        <label htmlFor={name}>
          <Input {...getInputProps()} />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'nowrap',
                mx: 4,
              }}
            >
              <CardMedia
                component="img"
                image={cloudflareImage(
                  'https://anima-uploads.s3.amazonaws.com/projects/6183b51d6b5cbed22d564e6f/releases/618a04ee1ebc77dda1e390a7/img/icon@2x.svg?v=1636444489397&v=1636444489800&v=1636446995761&v=1636447000710&v=1636453494937&v=1636453495631'
                )}
                sx={{
                  width: '27px',
                  height: '25px',
                  paddingRight: '8px',
                }}
              />
              <Typography
                sx={{
                  color: '#FFFFFF',
                  fontFamily: 'var(--font-family-montserrat)',
                  fontSize: '16px',
                  fontWeight: '700',
                  fontStyle: 'normal',
                }}
              >
                {isDragActive ? (
                  <span>Drop file here</span>
                ) : (
                  <span>Upload or Drag files here ({photosCount} of 16)</span>
                )}
              </Typography>
            </Box>
          </Box>
        </label>
      </Box>
    </Box>
  );
};

export default GalleryDropzone;
