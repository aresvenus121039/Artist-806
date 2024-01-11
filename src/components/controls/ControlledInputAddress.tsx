import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  ChangeEventHandler,
} from 'react';
import { Box, Input, Typography } from '@mui/material';
import InputLabel from './InputLabel';
import { fieldToTextField, TextFieldProps } from 'formik-mui';
import { setInitValue } from '@/utility/numberWords';

interface Props {
  style?: React.CSSProperties;
  placeholder?: string;
  styleWrap?: React.CSSProperties;
  textLabel?: string;
  textLabelSmall?: string;
  typeField?: string;
  isUpdateField?: boolean;
  form: {
    setFieldValue: (field: string, value: any) => void;
    values: any;
    errors: any;
    touched: any;
  };
  field: {
    name: string;
    meta: any;
  };
}

const InputAddress: React.FC<Props & TextFieldProps> = (props) => {
  const {
    style = {},
    placeholder = 'Address',
    styleWrap,
    textLabel,
    textLabelSmall,
    typeField,
    isUpdateField,
    form: {
      setFieldValue,
      values,
      errors,
      touched,
      submitCount = 0,
      initialValues,
    },
    field: { name },
  } = props;

  const [autocomplete, setAutocomplete] = useState<any>(null);
  const [input, setInput] = useState<string>(values[name]);
  const [predictions, setPredictions] = useState<string[]>([]);
  const predictionList = useRef<any>();

  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  }, []);

  useEffect(() => {
    setAutocomplete(new window.google.maps.places.AutocompleteService());
  }, []);

  const getPredictions = (input: string) => {
    autocomplete?.getPlacePredictions(
      { input, componentRestrictions: {} }, // set only united states
      (predictions: any) => {
        if (predictions) {
          setPredictions(
            predictions.map((prediction: any) => prediction.description)
          );
        }
      }
    );
  };

  useEffect(() => {
    if (input?.length > 0) {
      getPredictions(input);
    }
  }, [input]);

  const selectAddress = (address: string) => {
    setInput(address);
  };

  const showPredictions = () => {
    if (predictions.length === 0 || input.length === 0) {
      return false;
    } else {
      if (predictions.includes(input)) {
        return false;
      } else {
        return true;
      }
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleKeyDown = ({ code }: { code: string }) => {
    switch (code) {
      case 'ArrowUp':
        handleArrowUp();
        break;
      case 'ArrowDown':
        handleArrowDown();
        break;
      case 'Enter':
        handleEnter();
        break;
    }
  };

  const handleArrowUp = () => {
    if (predictionList.current) {
      if (document.activeElement?.previousSibling) {
        (document.activeElement.previousSibling as HTMLElement).focus();
      } else {
        const inputElement = document.getElementById(
          'autocomplete-address-input'
        );
        if (inputElement) {
          inputElement.focus();
        }
      }
    }
  };

  const handleArrowDown = () => {
    if (predictionList.current) {
      if (document.activeElement?.className !== 'prediction') {
        (predictionList.current.childNodes[0] as HTMLElement).focus();
      } else {
        if (document.activeElement.nextSibling) {
          (document.activeElement.nextSibling as HTMLElement).focus();
        }
      }
    }
  };

  const handleEnter = () => {
    if (predictionList.current) {
      setInput(
        (document.activeElement?.childNodes[0] as HTMLElement)?.innerHTML || ''
      );
    }
  };

  useEffect(() => {
    setFieldValue(name, input);
  }, [input]);

  return (
    <Box
      sx={{
        ...styleWrap,
        position: 'relative',
      }}
    >
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

      <Input
        {...fieldToTextField(props)}
        type="text"
        sx={{
          backgroundColor: '#303950',
          padding: '18px 18px',
          fontSize: '16px',
          borderRadius: '8px',
          color: '#FFFFFF',
          fontWeight: '600',
          height: '52px',
          width: '100%',
          fontFamily: 'var(--font-family-montserrat)',
          '& input:-webkit-autofill': {
            WebkitBoxShadow: '0 0 0 50px #303950 inset !important',
            boxShadow: '0 0 0 50px #303950 inset !important',
            WebkitTextFillColor: '#FFFFFF !important',
            backgroundColor: 'transparent !important',
          },
        }}
        style={style}
        id="autocomplete-address-input"
        placeholder={placeholder}
        onChange={onChange}
        disableUnderline={true}
        value={input}
        margin="none"
        onInvalid={undefined}
        ref={undefined}
        onKeyDown={undefined}
        autoComplete="off"
        onKeyUp={undefined}
        defaultValue={setInitValue(
          name,
          isUpdateField,
          typeField,
          initialValues
        )}
      />
      {showPredictions() && (
        <Box
          sx={{
            position: 'relative',
          }}
        >
          <Box
            sx={{
              backgroundColor: '#FFFFFF',
              color: '#000',
              padding: '12px 12px',
              borderRadius: '8px',
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              zIndex: 2,
            }}
          >
            <Box className="predictions-list" ref={predictionList}>
              {predictions.map((prediction, key) => {
                return (
                  <Box
                    key={key}
                    className="prediction"
                    tabIndex={0}
                    onClick={() => selectAddress(prediction)}
                  >
                    <Typography
                      component="h6"
                      sx={{
                        fontFamily: 'var(--font-family-montserrat)',
                        fontSize: '13px',
                        fontWeight: 600,
                        lineHeight: 1.5,
                        color: 'rgb(70, 78, 98)',
                        padding: '4px 0',
                      }}
                    >
                      {prediction}
                    </Typography>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
      )}
      {errors[name] && touched[name] && submitCount > 0 && (
        <Typography sx={{ color: 'red', fontSize: '13px' }}>
          {errors[name]}
        </Typography>
      )}
    </Box>
  );
};

export default InputAddress;
